# Transform Army AI — SKILL v1.1.1

**Purpose**: Equip LLMs/agents to support the Transform Army AI stack for **xcurzen.com**.

## Capabilities
- Website lead intake → forward to Workforce webhook.
- Stripe Checkout on the landing page.
- Vendor Signup → forward to Workforce as `vendor_signup` event.
- Orchestrate local stack (Ollama + Qdrant) and hub (n8n + Grafana).
- Workflow patterns: Lead Router, Calendar Clerk, RevOps Scribe, ContentOps Weekly.
- Voice path: Twilio SIP ↔ OpenAI Realtime (stub provided).

## Conventions
- Environment in `ops/.env`. For Next.js dev, you may also create `apps/web/.env.local`.
- Docs use doc-versioning; code uses semver.
- Use RUNBOOK for setup; ARCHITECTURE for the big picture.

## Bootstrap Checklist
1. Copy `ops/.env.example` → `ops/.env`; set keys and URLs.
2. Optionally mirror envs to `apps/web/.env.local` for dev.
3. `apps/web`: `npm i && npm run dev` → open http://localhost:3000.
4. Optional local stack: `docker compose -f ops/docker-compose.local.yml up -d`.
5. Optional hub: `docker compose -f ops/docker-compose.hub.yml up -d`.
6. Import workflow templates into Relevance AI; set destinations.
