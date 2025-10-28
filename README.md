# Transform Army AI — v1.0

**Mission:** Ship a proof‑of‑concept agentic workforce for **xcurzen.com** that captures leads, schedules calls, generates content, and supports marketplace payments for local excursions (Corpus Christi coast) and jungle rentals (Costa Rica).

> Think small rocket: launch fast, land repeatably. Website on Vercel; workflows in Relevance AI; voice via OpenAI Realtime + Twilio; optional local GPUs for embeddings and cheap inner loops.

---

## WHAT
- A tri‑part project:
  1) **Web** — Next.js site with `/api/lead` webhook to Workforce.
  2) **Voice** — minimal Node server stub to bridge Twilio SIP ↔ OpenAI Realtime API.
  3) **Ops** — docker compose for local GPU services (Ollama + Qdrant) and optional hub (n8n + Grafana).

## HOW (quick start)
```bash
# 0) Clone repo
git clone <your-github-url>/TransformArmyAI.git
cd TransformArmyAI

# 1) Create and fill env
cp ops/.env.example ops/.env

# 2) Next.js web (dev)
cd apps/web
npm i
npm run dev    # http://localhost:3000

# 3) Voice server stub (optional)
cd ../voice
npm i
npm run dev    # http://localhost:8787 (stub)

# 4) Local GPU stack (optional, requires NVIDIA)
cd ../../ops
docker compose -f docker-compose.local.yml up -d
```

## WHY
- Demonstrate an end‑to‑end agentic business flow in **days**, not weeks.
- Keep premium cognition in OpenAI; move heavy/cheap loops to local GPUs later.
- No‑code **Workforce** handles glue (intake, CRM, calendar, approvals).

---

## Repo map
```
TransformArmyAI/
  apps/
    web/        # Next.js + API route -> Workforce
    voice/      # Realtime voice stub
  ops/
    docker-compose.local.yml   # Ollama + Qdrant
    docker-compose.hub.yml     # n8n + Grafana
    .env.example               # master env template
    export-env.sh              # convenience loader
  workflows/
    relevance/
      lead_router.template.json
      calendar_clerk.template.json
  docs/
    SKILL.md           # LLM skill for prompting this project
    RUNBOOK.md         # day-1 ops
    ARCHITECTURE.md    # diagrams & decisions
    VERSIONING.md      # doc & semver policy
    CHANGELOG.md
  scripts/
    bootstrap.sh       # dev helpers
LICENSE
```

## Versioning
- **Semver** for code (e.g., 1.0.1).  
- **Docs** carry a human‑readable version at top (1.0, 1.1, …). See `docs/VERSIONING.md`.

## Security
- Never commit `.env`. Use a secrets vault (1Password/Bitwarden/AWS SM). Rotate keys quarterly.

---

## Badges
![Status](https://img.shields.io/badge/status-POC-blue)
![LLM](https://img.shields.io/badge/llm-OpenAI%20%2B%20BYO-green)
![Voice](https://img.shields.io/badge/voice-Realtime%20API-orange)
![GPU](https://img.shields.io/badge/compute-Local%20GPUs-lightgrey)

---

© 2025 Transform Army AI. MIT License.
