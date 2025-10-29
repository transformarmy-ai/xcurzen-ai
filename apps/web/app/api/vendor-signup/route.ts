import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const required = ["contact_name", "email", "business_name", "category"];
  for (const k of required) {
    if (!body?.[k]) return Response.json({ ok: false, error: `Missing ${k}` }, { status: 400 });
  }
  const url = process.env.WORKFORCE_WEBHOOK_URL;
  if (!url) return Response.json({ ok: false, error: "WORKFORCE_WEBHOOK_URL not set" }, { status: 500 });

  try {
    const payload = {
      source: "xcurzen.com/vendor-signup",
      type: "vendor_signup",
      created_at: new Date().toISOString(),
      data: body
    };
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return Response.json({ ok: r.ok });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message || "forwarding failed" }, { status: 502 });
  }
}

export const dynamic = "force-dynamic";
