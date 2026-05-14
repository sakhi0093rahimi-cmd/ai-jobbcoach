"use client";

import { useState } from "react";

type FormState = {
  name: string;
  role: string;
  experience: string;
  skills: string;
  jobAd: string;
};

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: "",
    role: "",
    experience: "",
    skills: "",
    jobAd: "",
  });
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function generateLetter() {
    setLoading(true);
    setError("");
    setLetter("");

    try {
      const res = await fetch("/api/generate-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Något gick fel");

      setLetter(data.letter);
    } catch (err: any) {
      setError(err.message || "Kunde inte skapa brevet");
    } finally {
      setLoading(false);
    }
  }

  async function copyLetter() {
    await navigator.clipboard.writeText(letter);
    alert("Brevet kopierades!");
  }
  function printLetter() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <html>
      <head>
        <title>Personligt brev</title>
        <style>
          body { font-family: Arial; padding: 40px; line-height: 1.6; }
          pre { white-space: pre-wrap; font-family: Arial; font-size: 16px; }
        </style>
      </head>
      <body>
        <pre>${letter}</pre>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
}

  return (
    <main>
      <nav className="nav">
        <div className="logo">💼 AI Jobbcoach</div>
        <a href="#tool">Kom igång</a>
      </nav>

      <section className="hero">
        <div>
          <p className="badge">För svenska jobbansökningar</p>
          <h1>Få bättre CV och personligt brev med AI</h1>
          <p className="subtitle">
            Skriv in din erfarenhet och jobbannonsen. AI skapar ett professionellt personligt brev på svenska.
          </p>
          <a className="primary" href="#tool">Skapa personligt brev</a>
        </div>

        <div className="preview-card">
          <div className="preview-top">Personligt brev <span>Klart ✓</span></div>
          <div className="line big"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line small"></div>
          <div className="ai-bubble">AI skriver ett brev anpassat till jobbet.</div>
        </div>
      </section>

      <section className="features">
        <div>✅ CV-förbättring</div>
        <div>✅ Personligt brev</div>
        <div>✅ Intervjufrågor</div>
      </section>

      <section id="tool" className="app-grid">
        <div className="panel">
          <h2>Skapa personligt brev</h2>
          <p className="muted">Fyll i formuläret och klicka på knappen.</p>

          <label>Namn</label>
          <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Ali Ahmed" />

          <label>Jobbtitel du söker</label>
          <input value={form.role} onChange={(e) => updateField("role", e.target.value)} placeholder="Frontend utvecklare" />

          <label>Erfarenhet</label>
          <textarea value={form.experience} onChange={(e) => updateField("experience", e.target.value)} placeholder="Jag har jobbat med kundservice, lager, programmering..." />

          <label>Kompetenser</label>
          <textarea value={form.skills} onChange={(e) => updateField("skills", e.target.value)} placeholder="React, svenska, engelska, service, problemlösning..." />

          <label>Jobbannons</label>
          <textarea className="large" value={form.jobAd} onChange={(e) => updateField("jobAd", e.target.value)} placeholder="Klistra in jobbannonsen här..." />

          <button onClick={generateLetter} disabled={loading}>
            {loading ? "Skapar..." : "Skapa personligt brev med AI ✨"}
          </button>

          {error && <p className="error">{error}</p>}
        </div>

        <div className="panel result">
          <h2>Ditt AI-brev</h2>
          {!letter && <p className="empty">Brevet visas här när AI är klar.</p>}
          {letter && (
            <>
            <>
  <pre>{letter}</pre>

  <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
    <button className="secondary" onClick={copyLetter}>
      Kopiera brevet
    </button>

    <button
      onClick={printLetter}
      className="secondary"
    >
      Ladda ner PDF
    </button>
  </div>
</>
            </>
          )}
        </div>
      </section>

      <section className="pricing">
        <h2>Prisidé senare</h2>
        <div className="price-cards">
          <div><b>Gratis</b><span>2 brev/mån</span></div>
          <div><b>Pro 99 kr/mån</b><span>Obegränsade brev</span></div>
          <div><b>Premium 199 kr/mån</b><span>CV + intervjucoach</span></div>
        </div>
      </section>
    </main>
  );
}
