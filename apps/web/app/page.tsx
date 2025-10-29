"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? "Received. We’ll be in touch." : `Error: ${data.error}`);
    } catch (err: any) {
      setStatus(`Error: ${err?.message || "unknown"}`);
    }
  };

  return (
    <main>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>Xcurzen</h1>
      <p style={{ marginTop: 0 }}>Ocean & coastal excursions. Local businesses ↔ local customers.</p>

      <div style={{ padding: "1rem", background: "#0e1621", borderRadius: 12, border: "1px solid #1f2b3a" }}>
        <h2>Get Started</h2>
        <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #203040", background: "#0b141f", color: "#d2e3ff" }}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #203040", background: "#0b141f", color: "#d2e3ff" }}
            required
          />
          <textarea
            placeholder="What do you want to build together?"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            rows={4}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #203040", background: "#0b141f", color: "#d2e3ff" }}
          />
          <button type="submit" style={{ padding: 12, borderRadius: 10, border: "0", background: "#00d1b2", color: "#06201e", fontWeight: 700 }}>
            Submit Lead
          </button>
        </form>

        <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={async () => {
              const res = await fetch("/api/checkout", { method: "POST" });
              const data = await res.json();
              if (data?.url) window.location.href = data.url;
              else alert(data?.error || "Checkout error");
            }}
            style={{ padding: 12, borderRadius: 10, border: "0", background: "#ffd60a", color: "#221a00", fontWeight: 700 }}
          >
            Buy Starter (Stripe)
          </button>
          <a href="/vendor-signup" style={{ padding: 12, borderRadius: 10, border: "1px solid #1f2b3a", textDecoration: "none", color: "#e6f1ff" }}>
            Vendor Signup
          </a>
        </div>

        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </div>

      <p style={{ marginTop: 24, opacity: 0.8, fontSize: 14 }}>
        This site forwards leads to a Workforce webhook. The AI agents handle triage, routing, and scheduling.
      </p>
    </main>
  );
}
