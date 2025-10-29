const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const WebSocket = require("ws");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: "/media" });

// Health
app.get("/healthz", (_, res) => res.json({ ok: true }));

// Twilio entry: return TwiML that starts a media stream to our WS /media
app.post("/twilio/voice", (req, res) => {
  const host = process.env.PUBLIC_WS_HOST || `ws://localhost:${PORT}/media`;
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting media stream. This is a stub bridge.</Say>
  <Start>
    <Stream url="${host}" />
  </Start>
  <Pause length="60"/>
</Response>`;
  res.type("text/xml").send(twiml);
});

// Basic WS handler — logs frames. Future: bridge to OpenAI Realtime via upstream WS.
wss.on("connection", (ws) => {
  console.log("[WS] Twilio stream connected");
  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg.toString());
      if (data.event === "start") console.log("[WS] call start", data.start?.callSid);
      if (data.event === "media" && data.media?.track === "inbound") {
        // data.media.payload is base64-encoded mulaw 8k audio
        // TODO: forward to OpenAI Realtime (wss) with proper protocol
      }
      if (data.event === "stop") console.log("[WS] call stop");
    } catch (e) {
      console.warn("[WS] non-JSON frame");
    }
  });
  ws.on("close", () => console.log("[WS] Twilio stream disconnected"));
});

server.listen(PORT, () => console.log(`Voice server ready on http://localhost:${PORT} (WS /media)`));
