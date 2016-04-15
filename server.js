const WebSocketServer = require('uws').Server;
const wss = new WebSocketServer({ port: 1307 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        ws.send(message);
    });
});
