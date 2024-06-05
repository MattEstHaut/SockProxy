const WebSocket = require("ws");
const net = require("net");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));

const wss = new WebSocket.Server({ port: 80 });

wss.on("connection", (ws) => {
    const tcp = new net.Socket();

    tcp.connect(config.tcp.port, config.tcp.host, () => {
        ws.on("message", (msg) => tcp.write(msg));
        tcp.on("data", (data) => ws.send(data));
        ws.on("close", () => tcp.end());
        tcp.on("close", () => ws.close());
        ws.on("error", () => ws.close());
        tcp.on("error", () => tcp.end());
    });
});