# Transform Army AI — v1.1.1

A pragmatic starter for **xcurzen.com** with web, voice, ops, agent workflows, and docs — now with **Stripe Checkout**, **Vendor Signup**, and business/legal/GTM docs.

**Folders**:
- `apps/web` — Next.js app: lead form, Stripe Checkout, and `/vendor-signup`.
- `apps/voice` — Node server: Twilio webhook + Media Streams WebSocket stub.
- `ops` — Docker compose stacks (local LLM + vector; hub: n8n + Grafana) + `.env.example` and `export-env.sh`.
- `workflows/relevance` — Importable JSON templates (Lead Router, Calendar Clerk, RevOps Scribe, ContentOps Weekly).
- `docs` — SKILL, RUNBOOK, ARCHITECTURE, VERSIONING, CHANGELOG, **BUSINESS_PLAN**, **VENDOR AGREEMENT**, **CANCELLATION POLICY**, **GTM CHECKLIST**, **CONTENT CALENDAR**.
- `scripts` — `bootstrap.sh` helper.

Quickstart → see `docs/RUNBOOK.md`.
