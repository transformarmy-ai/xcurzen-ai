# RUNBOOK — v1.0

## Day‑1 goals
- Live website with lead form.
- Lead posts to Workforce; triage + propose 3 times.
- Optional voice callback using Twilio + OpenAI Realtime.

## Steps
1) Duplicate `ops/.env.example` to `ops/.env` and fill secrets.
2) `apps/web`: `npm i && npm run dev`. Visit http://localhost:3000
3) Submit the lead form; confirm it appears in Workforce runs.
4) If voice enabled: call Twilio number; ensure transcript + booking.

## Troubleshooting
- 401 from Workforce: check `RELEVANCEAI_API_KEY` and webhook URL.
- No calendar slots: verify `CALCOM_*` keys and event IDs.
- Voice silence: confirm Twilio SIP domain/credentials and Realtime model name.
