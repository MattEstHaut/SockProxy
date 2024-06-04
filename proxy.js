const WebSocket = require("ws");
const net = require("net");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));

const wss = new WebSocket.Server({ port: config.wsPort });

wss.on("connection", (ws) => {
    const tcp = new net.Socket();

    tcp.connect(config.tcpPort, config.tcpHost, () => {
        ws.on("message", (msg) => tcp.write(msg));
        tcp.on("data", (data) => ws.send(data));
        ws.on("close", () => tcp.end());
        tcp.on("close", () => ws.close());
        ws.on("error", () => ws.close());
        tcp.on("error", () => tcp.end());
    });
});