# Xcurzen — Business Plan (v1.0)

> Doc version: v1.0 • Repo release: v1.1.1

## 1) Executive summary
Xcurzen connects local excursion operators (fishing charters, dolphin tours, surfing lessons) with residents and tourists in the Corpus Christi corridor. The product is intentionally tiny at the edge (one landing page + Stripe + vendor signup) with real “brain” in an agent workforce (lead routing, scheduling, content, ops). The model blends marketplace take rate (per-booking) with SaaS-style vendor subscriptions.

**Core thesis:** remove friction for vendors (lead capture → calendar → payment), concentrate demand with focused SEO + partnerships, and automate ops with agents.

## 2) Product (reverse-engineered from v1.1)
- **Web (Next.js):** lead form → Workforce webhook; Stripe Checkout (“Starter” package); vendor signup at `/vendor-signup`.
- **Workforce (Relevance):** Lead Router, Calendar Clerk, RevOps Scribe (normalize to CRM/Sheet), ContentOps Weekly (auto content).
- **Voice (Express):** Twilio `<Stream>` → WS endpoint for a future OpenAI Realtime bridge (v1.2).
- **Ops:** Optional local AI (Ollama + Qdrant) and hub (n8n + Grafana). Clean `.env` + RUNBOOK.
- **Docs/process:** SKILL.md, ARCHITECTURE, VERSIONING, CHANGELOG, bootstrap scripts.

## 3) Market & positioning
- **Geo beachhead:** Corpus Christi–coastal (Port Aransas, Rockport, Mustang Island).
- **Segments:** fishing charters, boat rentals, eco-tours, dolphin tours, surf/kite lessons, kayaks, beach services.
- **Positioning:** “Local, vetted, and fast.” An operations-powered local marketplace with real availability and concierge support.

## 4) Business model
**Revenue streams**
1) **Marketplace take rate:** 8–12% per booking (start at 10%). Stripe fees pass-through.
2) **Vendor subscriptions:** Free / Starter $49 / Pro $149 / Partner $399 (placement + tools; scale take-rate down at higher tiers).
3) **Featured placement / ads:** fixed monthly slots on high-intent pages.
4) **Concierge fee:** optional white-glove booking by phone/SMS (per-booking surcharge).

**Illustrative unit math**
- 50 vendors × $5,000 GMV/month each = $250,000 GMV/month.
- 10% take rate → $25,000/month.
- 30 paid vendors × $99 ARPU ≈ $2,970/month.
- Featured placements ≈ $2,000/month.
- **Run rate:** ≈ $29,970/month pre-ops.

## 5) Go-to-market (0→1)
**Supply first (vendors):** Founding vendor offer (3 months Pro at Starter price) + concierge onboarding.  
**Demand:** Local SEO (“Corpus fishing charter”, “dolphin tour Corpus”), hotel/visitor-center partnerships, kiosk QR in marinas/surf shops, weekly content.

## 6) Operations
- **People:** Founder-operator; vendor success; support/concierge; part-time content.
- **Systems:** Stripe, Cal.com, Sheets/Hub, n8n automations, Qdrant retrieval, Grafana.
- **Processes:** Vendor onboarding SLA ≤ 48h. Lead reply SLA ≤ 15m. Weekly content cadence.

## 7) Product roadmap
- **v1.2:** Twilio ↔ Realtime live bridge, vendor dashboard, basic reviews.
- **v1.3:** Availability sync, multi-SKU packages, coupons.
- **v1.4:** Qdrant-powered faceted search; multi-city expansion playbook.

## 8) KPIs
- **Supply:** vendors onboarded, % active, time-to-first-booking.
- **Demand:** sessions → leads → bookings, repeat rate, NPS.
- **Revenue:** GMV, take-rate revenue, subscription MRR, LTV/CAC.
- **Ops:** lead response time, refund/chargeback rate, uptime.

**90-day targets**
- 60 vendors live / 30 paid; $150k monthly GMV; <15m median response; 4 posts/month SEO.

## 9) Risks & mitigations
Seasonality (diversify categories, off-season content), supply fragmentation (clear value + lower take at higher tiers), chargebacks (standardize policies), platform dependence (own SEO + partnerships).

## 10) Compliance & legal
Stripe-native PCI; vendor insurance attestation; unified terms & cancellation policy; privacy policy; accessibility checklist.

## 11) 30-60-90 plan
**30 days:** Ship v1.2 voice bridge + vendor dashboard MVP; onboard 25 vendors.  
**60 days:** 50 vendors; concierge phone/SMS; featured placement pilot.  
**90 days:** Booking stabilization; add category ambassadors; expansion prep.
