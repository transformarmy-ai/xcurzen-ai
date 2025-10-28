// Minimal placeholder server (bridge Twilio SIP <-> OpenAI Realtime comes later)
import http from 'http';
import { WebSocketServer } from 'ws';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Voice stub running');
});
const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
  ws.send('connected');
});
server.listen(8787, () => console.log('Voice stub :8787'));
