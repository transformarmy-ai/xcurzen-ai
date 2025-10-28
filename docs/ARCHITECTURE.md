# ARCHITECTURE — v1.0

```mermaid
flowchart LR
  Web[Next.js (Vercel)] -->|Webhook JSON| WF[Relevance AI Workforce]
  WF -->|create event| Cal[Cal.com]
  WF -->|update| CRM[(CRM: Notion/Airtable/HubSpot)]
  WF --> Slack[Slack/Teams]

  Tel[(Twilio)] --> RT[OpenAI Realtime API]
  RT --> WF

  subgraph Local GPU
    Oll[Ollama] --> VDB[Qdrant]
  end
```
