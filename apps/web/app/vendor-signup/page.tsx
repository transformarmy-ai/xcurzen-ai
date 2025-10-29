"use client";

import { useState } from "react";

export default function VendorSignup() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    contact_name: "",
    email: "",
    business_name: "",
    category: "",
    website: "",
    phone: "",
    notes: ""
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/vendor-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? "Received. We’ll reach out." : `Error: ${data.error}`);
    } catch (err: any) {
      setStatus(`Error: ${err?.message || "unknown"}`);
    }
  };

  const field = (key: string, props: any = {}) => (
    <input
      {...props}
      value={(form as any)[key]}
      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      style={{ padding: 10, borderRadius: 8, border: "1px solid #203040", background: "#0b141f", color: "#d2e3ff" }}
      required={props.required}
    />
  );

  return (
    <main>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Vendor Signup</h1>
      <p style={{ marginTop: 0 }}>Join the Xcurzen marketplace. Tell us about your excursion business.</p>

      <div style={{ padding: "1rem", background: "#0e1621", borderRadius: 12, border: "1px solid #1f2b3a" }}>
        <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
          {field("contact_name", { placeholder: "Your name", required: true })}
          {field("email", { placeholder: "Email", type: "email", required: true })}
          {field("business_name", { placeholder: "Business name", required: true })}
          {field("category", { placeholder: "Category (e.g., fishing, dolphin tour)", required: true })}
          {field("website", { placeholder: "Website (optional)" })}
          {field("phone", { placeholder: "Phone (optional)" })}
          <textarea
            placeholder="Notes (pricing, capacity, schedule, anything useful)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            rows={4}
            style={{ padding: 10, borderRadius: 8, border: "1px solid #203040", background: "#0b141f", color: "#d2e3ff" }}
          />
          <button type="submit" style={{ padding: 12, borderRadius: 10, border: "0", background: "#00d1b2", color: "#06201e", fontWeight: 700 }}>
            Submit
          </button>
        </form>
        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </div>
    </main>
  );
}
