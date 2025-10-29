# RUNBOOK — Day 1 Setup (v1.1.1)

## 0) Prereqs
- Node 20+ and npm
- Docker Desktop/Engine (optional for local AI/hub)
- A text editor

## 1) Env
```bash
cp ops/.env.example ops/.env
```
Fill at minimum:
- `WORKFORCE_WEBHOOK_URL`
- `STRIPE_SECRET_KEY`, `STRIPE_PRICE_BASIC`, `STRIPE_SUCCESS_URL`, `STRIPE_CANCEL_URL`
- Optional: `CALCOM_*`, `OPENAI_API_KEY` (for upcoming voice)

> **Next.js tip**: Create `apps/web/.env.local` with the same keys for `npm run dev`.

## 2) Web
```bash
cd apps/web
npm i
npm run dev
```
Visit http://localhost:3000 → test lead form and Stripe button. Vendor form at `/vendor-signup`.

## 3) Local AI (optional)
```bash
cd ../../ops
docker compose -f docker-compose.local.yml up -d
```
- Ollama on 11434
- Qdrant on 6333

## 4) Hub (optional)
```bash
docker compose -f docker-compose.hub.yml up -d
```
- n8n at 5678 (basic auth)
- Grafana at 3001

## 5) Relevance AI
- Import `workflows/relevance/*.template.json` (Lead Router, Calendar Clerk, RevOps Scribe, ContentOps Weekly).
- Wire Slack/Sheets/Email/CRM destinations per your environment.

## 6) Upgrade Path
- v1.2: Voice media bridge (Twilio <Stream> ↔ Realtime), Vendor dashboard, Qdrant indexing pipeline.
