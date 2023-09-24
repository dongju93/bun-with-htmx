Bun.serve({
    fetch(req, server) {
        if (server.upgrade(req)) {
            return;
        }
        return new Response("Upgreade failed", { status: 500 });
    },
    websocket: {
        open() {
            console.log("new cliend connceted");
        },
        message(ws, message) {
            console.log(message);
            ws.sendText("Hello from Bun Websocket");
        },
    },
});

// const ws2 = new WebSocket("ws://localhost:3000")
// ws2.addEventListener("message", (data) => console.log(data))
// ws2.send("Hi")