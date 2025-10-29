import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, note } = await req.json();
  if (!name || !email) {
    return Response.json({ ok: false, error: "Missing name or email" }, { status: 400 });
  }
  const url = process.env.WORKFORCE_WEBHOOK_URL;
  if (!url) {
    return Response.json({ ok: false, error: "WORKFORCE_WEBHOOK_URL not set" }, { status: 500 });
  }
  try {
    const payload = {
      source: "xcurzen.com/lead",
      created_at: new Date().toISOString(),
      data: { name, email, note }
    };
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const ok = r.ok;
    return Response.json({ ok });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message || "forwarding failed" }, { status: 502 });
  }
}

export const dynamic = "force-dynamic";
