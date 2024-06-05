const WebSocket = require("ws");
const net = require("net");
const https = require("https");
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

if (config.ssl.key != null && config.ssl.cert != null) {
    const ssl = https.createServer({
        key: fs.readFileSync(config.ssl.key),
        cert: fs.readFileSync(config.ssl.cert),
    });

    const wssSecure = new WebSocket.Server({ server: ssl });

    wssSecure.on("connection", (ws) => {
        console.log("Secure connection");

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

    ssl.listen(443);
}