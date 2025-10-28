'use client';
import { useState } from 'react';

export default function Lead() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', vertical:'coast', activity:'fishing' });
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: any) {
    e.preventDefault();
    const r = await fetch('/api/lead', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ source:'web', ...form })
    });
    const j = await r.json();
    setMsg(j.ok ? 'Thanks! We will reach out shortly.' : 'Something went wrong.');
  }

  return (
    <main style={{padding:'2rem', maxWidth:700, margin:'0 auto'}}>
      <h2>Lead Form</h2>
      <form onSubmit={submit} style={{display:'grid', gap:12}}>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <select value={form.vertical} onChange={e=>setForm({...form, vertical:e.target.value})}>
          <option value="coast">Coast (Corpus)</option>
          <option value="jungle">Jungle (Costa Rica)</option>
        </select>
        <select value={form.activity} onChange={e=>setForm({...form, activity:e.target.value})}>
          <option value="fishing">Fishing</option>
          <option value="parasailing">Parasailing</option>
          <option value="rental">Rental</option>
          <option value="tour">Tour</option>
        </select>
        <button type="submit">Send</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  );
}
