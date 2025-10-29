# ARCHITECTURE

```mermaid
flowchart TD
  subgraph Web[Next.js — xcurzen.com]
    UI[Lead Form] --> API[/api/lead/]
  end

  API -->|POST JSON| Workforce[Agent Workforce Webhook]

  subgraph Ops[Local Ops]
    Ollama[(Ollama)]
    Qdrant[(Qdrant)]
    Hub[n8n + Grafana]
  end

  Workforce --> Hub
  Hub <---> Qdrant
  Hub <---> Ollama

  subgraph Voice[Voice (v1.2 target)]
    Twilio[(SIP/Phone)] --> Bridge[Node Stub ↔ OpenAI Realtime]
  end
```
