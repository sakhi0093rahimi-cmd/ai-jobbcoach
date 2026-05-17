"use client";

import { useState } from "react";

type Lang = "sv" | "en" | "de";

type FormState = {
  name: string;
  role: string;
  experience: string;
  skills: string;
  jobAd: string;
};

const text = {
  sv: {
    navCv: "CV-generator",
    navLetter: "Personligt brev",
    navTemplates: "Mallar",
    navPricing: "Priser",
    navContact: "Kontakt",
    login: "Logga in",
    cta: "Skapa CV gratis",
    badge: "#1 AI-driven CV och personligt brev",
    title1: "Skapa ett professionellt",
    title2: "CV med AI",
    title3: "på några minuter",
    subtitle:
      "Välj bland moderna CV-mallar, fyll i dina uppgifter och ladda ner ett snyggt, ATS-vänligt CV som hjälper dig att söka jobb snabbare.",
    ai: "AI-förslag",
    templates: "Professionella mallar",
    ats: "ATS-vänligt",
    pdf: "Ladda ner som PDF",
    letterCta: "Skapa personligt brev",
    users: "Bli en av många jobbsökande som skapar bättre ansökningar.",
    chooseTemplates: "Välj bland professionella CV-mallar",
    chooseTemplatesSub:
      "Designade för olika yrken, branscher och karriärnivåer.",
    modern: "Modern",
    classic: "Classic",
    minimal: "Minimal",
    engineering: "Engineering",
    healthcare: "Healthcare",
    seeAll: "Se alla mallar",
    feature1Title: "AI som hjälper dig",
    feature1Text: "Få smarta förslag på profil, erfarenhet och färdigheter.",
    feature2Title: "ATS-vänliga CV:n",
    feature2Text: "Tydlig struktur som fungerar bättre i rekryteringssystem.",
    feature3Title: "Ladda ner som PDF",
    feature3Text: "Spara ett professionellt CV redo att skickas till arbetsgivare.",
    feature4Title: "Dina uppgifter är säkra",
    feature4Text: "Du kontrollerar dina uppgifter och ditt CV.",
    howTitle: "Så enkelt är det",
    step1Title: "Fyll i dina uppgifter",
    step1Text: "Svara på några enkla frågor eller ladda upp befintligt CV.",
    step2Title: "Välj en mall",
    step2Text: "Välj design som passar ditt yrke och din ansökan.",
    step3Title: "Ladda ner och sök jobb",
    step3Text: "Ladda ner ett CV som PDF och börja söka jobb.",
    letterTitle: "Skapa personligt brev med AI",
    letterSub: "Fyll i kort information och få ett professionellt brev.",
    name: "Namn",
    role: "Jobbtitel du söker",
    experience: "Erfarenhet",
    skills: "Kompetenser",
    jobAd: "Jobbannons",
    generate: "Skapa personligt brev med AI ✨",
    loading: "Skapar...",
    resultTitle: "Ditt AI-brev",
    emptyLetter: "Brevet visas här när AI är klar.",
    copy: "Kopiera brevet",
    print: "Ladda ner PDF",
    bottomTitle: "Redo att ta nästa steg i din karriär?",
    bottomSub: "Skapa ett professionellt CV med AI och sök jobb med mer självförtroende.",
  },
  en: {
    navCv: "CV Builder",
    navLetter: "Cover Letter",
    navTemplates: "Templates",
    navPricing: "Pricing",
    navContact: "Contact",
    login: "Log in",
    cta: "Create CV for free",
    badge: "#1 AI-powered CV and cover letter",
    title1: "Create a professional",
    title2: "CV with AI",
    title3: "in minutes",
    subtitle:
      "Choose modern CV templates, fill in your details and download a clean, ATS-friendly CV that helps you apply faster.",
    ai: "AI suggestions",
    templates: "Professional templates",
    ats: "ATS-friendly",
    pdf: "Download as PDF",
    letterCta: "Create cover letter",
    users: "Join job seekers creating better applications.",
    chooseTemplates: "Choose from professional CV templates",
    chooseTemplatesSub:
      "Designed for different jobs, industries and career levels.",
    modern: "Modern",
    classic: "Classic",
    minimal: "Minimal",
    engineering: "Engineering",
    healthcare: "Healthcare",
    seeAll: "See all templates",
    feature1Title: "AI that helps you",
    feature1Text: "Get smart suggestions for profile, experience and skills.",
    feature2Title: "ATS-friendly CVs",
    feature2Text: "Clear structure that works better in recruiting systems.",
    feature3Title: "Download as PDF",
    feature3Text: "Save a professional CV ready to send to employers.",
    feature4Title: "Your data is safe",
    feature4Text: "You control your information and your CV.",
    howTitle: "How it works",
    step1Title: "Fill in your details",
    step1Text: "Answer a few simple questions or upload an existing CV.",
    step2Title: "Choose a template",
    step2Text: "Pick a design that fits your profession and application.",
    step3Title: "Download and apply",
    step3Text: "Download your CV as PDF and start applying.",
    letterTitle: "Create a cover letter with AI",
    letterSub: "Fill in short information and get a professional letter.",
    name: "Name",
    role: "Job title",
    experience: "Experience",
    skills: "Skills",
    jobAd: "Job ad",
    generate: "Create cover letter with AI ✨",
    loading: "Creating...",
    resultTitle: "Your AI letter",
    emptyLetter: "The letter will appear here when AI is done.",
    copy: "Copy letter",
    print: "Download PDF",
    bottomTitle: "Ready for the next step in your career?",
    bottomSub: "Create a professional CV with AI and apply with confidence.",
  },
  de: {
    navCv: "Lebenslauf-Generator",
    navLetter: "Anschreiben",
    navTemplates: "Vorlagen",
    navPricing: "Preise",
    navContact: "Kontakt",
    login: "Einloggen",
    cta: "Lebenslauf kostenlos erstellen",
    badge: "#1 KI-Lebenslauf und Anschreiben",
    title1: "Erstelle einen professionellen",
    title2: "Lebenslauf mit KI",
    title3: "in wenigen Minuten",
    subtitle:
      "Wähle moderne Lebenslauf-Vorlagen, fülle deine Daten aus und lade einen klaren, ATS-freundlichen Lebenslauf als PDF herunter.",
    ai: "KI-Vorschläge",
    templates: "Professionelle Vorlagen",
    ats: "ATS-freundlich",
    pdf: "Als PDF herunterladen",
    letterCta: "Anschreiben erstellen",
    users: "Werde Teil vieler Bewerber, die bessere Bewerbungen erstellen.",
    chooseTemplates: "Wähle professionelle Lebenslauf-Vorlagen",
    chooseTemplatesSub:
      "Entwickelt für verschiedene Berufe, Branchen und Karrierelevel.",
    modern: "Modern",
    classic: "Klassisch",
    minimal: "Minimal",
    engineering: "Engineering",
    healthcare: "Healthcare",
    seeAll: "Alle Vorlagen ansehen",
    feature1Title: "KI unterstützt dich",
    feature1Text: "Erhalte Vorschläge für Profil, Erfahrung und Fähigkeiten.",
    feature2Title: "ATS-freundliche Lebensläufe",
    feature2Text: "Klare Struktur für moderne Bewerbungssysteme.",
    feature3Title: "Als PDF herunterladen",
    feature3Text: "Speichere einen professionellen Lebenslauf als PDF.",
    feature4Title: "Deine Daten sind sicher",
    feature4Text: "Du kontrollierst deine Informationen und deinen Lebenslauf.",
    howTitle: "So einfach funktioniert es",
    step1Title: "Daten eingeben",
    step1Text: "Beantworte einfache Fragen oder lade einen vorhandenen Lebenslauf hoch.",
    step2Title: "Vorlage wählen",
    step2Text: "Wähle ein Design passend zu Beruf und Bewerbung.",
    step3Title: "Herunterladen und bewerben",
    step3Text: "Lade deinen Lebenslauf als PDF herunter und bewirb dich.",
    letterTitle: "Anschreiben mit KI erstellen",
    letterSub: "Gib kurze Informationen ein und erhalte ein professionelles Anschreiben.",
    name: "Name",
    role: "Jobtitel",
    experience: "Erfahrung",
    skills: "Fähigkeiten",
    jobAd: "Stellenanzeige",
    generate: "Anschreiben mit KI erstellen ✨",
    loading: "Erstellt...",
    resultTitle: "Dein KI-Anschreiben",
    emptyLetter: "Das Anschreiben erscheint hier, wenn die KI fertig ist.",
    copy: "Text kopieren",
    print: "PDF herunterladen",
    bottomTitle: "Bereit für den nächsten Schritt deiner Karriere?",
    bottomSub: "Erstelle einen professionellen Lebenslauf mit KI und bewirb dich selbstbewusst.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("sv");
  const t = text[lang];

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
    alert("Texten kopierades!");
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
    <main style={page}>
      <nav style={nav}>
        <a href="/" style={logo}>
          <span style={logoIcon}>CV</span>
          AI Jobbcoach
        </a>

        <div style={navLinks}>
          <a href="/cv-generator" style={navLink}>{t.navCv}</a>
          <a href="#letter" style={navLink}>{t.navLetter}</a>
          <a href="#templates" style={navLink}>{t.navTemplates}</a>
          <a href="#pricing" style={navLink}>{t.navPricing}</a>
          <a href="/kontakt" style={navLink}>{t.navContact}</a>
        </div>

        <div style={rightNav}>
          <button onClick={() => setLang("sv")} style={lang === "sv" ? activeLang : langBtn}>SV</button>
          <button onClick={() => setLang("en")} style={lang === "en" ? activeLang : langBtn}>EN</button>
          <button onClick={() => setLang("de")} style={lang === "de" ? activeLang : langBtn}>DE</button>
          <a href="/cv-generator" style={topCta}>{t.cta}</a>
        </div>
      </nav>

      <section style={hero}>
        <div style={heroText}>
          <div style={badge}>{t.badge}</div>

          <h1 style={title}>
            {t.title1} <br />
            <span style={blue}>{t.title2}</span> {t.title3}
          </h1>

          <p style={subtitle}>{t.subtitle}</p>

          <div style={checkRow}>
            <span>✓ {t.ai}</span>
            <span>✓ {t.templates}</span>
            <span>✓ {t.ats}</span>
            <span>✓ {t.pdf}</span>
          </div>

          <div style={buttonRow}>
            <a href="/cv-generator" style={primaryButton}>{t.cta} →</a>
            <a href="#letter" style={secondaryButton}>{t.letterCta} ✎</a>
          </div>

          <div style={rating}>
            <span style={avatars}>👩‍💼 👨‍💻 👩‍⚕️ 👨‍🔧</span>
            <span style={stars}>★★★★★</span>
            <span style={muted}>{t.users}</span>
          </div>
        </div>

        <div style={heroPreview}>
          <div style={cvMock}>
            <div style={cvSidebar}>
              <div style={photo}>👤</div>
              <div style={mockLineWhite}></div>
              <div style={mockLineWhiteSmall}></div>
              <div style={mockBlock}></div>
              <div style={mockBlock}></div>
              <div style={barList}>
                <span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div style={cvContent}>
              <h2 style={mockName}>ALEXANDER BERG</h2>
              <p style={mockRole}>MECHANICAL ENGINEER</p>
              <div style={mockHr}></div>

              {["PROFIL", "ARBETSLIVSERFARENHET", "UTBILDNING", "PROJEKT"].map((item) => (
                <div key={item} style={mockSection}>
                  <h3>{item}</h3>
                  <p></p>
                  <p style={{ width: "82%" }}></p>
                  <p style={{ width: "62%" }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="templates" style={section}>
        <h2 style={sectionTitle}>{t.chooseTemplates}</h2>
        <p style={sectionSub}>{t.chooseTemplatesSub}</p>

        <div style={templateGrid}>
  {[
    {
      slug: "modern",
      name: t.modern,
      label: "Populär",
      color: "#0f2742",
      description: "Modern och professionell CV-mall som passar de flesta jobb.",
    },
    {
      slug: "classic",
      name: t.classic,
      label: "",
      color: "#2f5d50",
      description: "Tydlig och enkel CV-mall för traditionella ansökningar.",
    },
    {
      slug: "minimal",
      name: t.minimal,
      label: "",
      color: "#111827",
      description: "Ren och minimalistisk design med fokus på innehållet.",
    },
    {
      slug: "engineering",
      name: t.engineering,
      label: "Ny",
      color: "#2f80ed",
      description: "Teknisk CV-mall för ingenjörer, IT, CAD och projektroller.",
    },
    {
      slug: "modern",
      name: t.healthcare,
      label: "",
      color: "#4f8f7a",
      description: "Lugn och tydlig mall för vård, omsorg och serviceyrken.",
    },
  ].map((template) => (
    <a
      href={`/cv-generator?template=${template.slug}`}
      key={template.name}
      style={{
        ...templateCard,
        textDecoration: "none",
        color: "#111827",
      }}
    >
      {template.label && (
        <span style={cardLabel}>{template.label}</span>
      )}

    <div
  style={{
    height: "170px",
    border: "1px solid #dbeafe",
    borderRadius: "10px",
    overflow: "hidden",
    background: "#ffffff",
    display: "grid",
    gridTemplateColumns: template.slug === "minimal" ? "1fr" : "46px 1fr",
    fontSize: "6px",
    lineHeight: 1.25,
  }}
>
  {template.slug !== "minimal" && (
    <div
      style={{
        background: template.color,
        color: "white",
        padding: "10px 5px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "999px",
          background: "#e2e8f0",
          margin: "0 auto 5px",
        }}
      />
      <strong style={{ fontSize: "5px" }}>KONTAKT</strong>
      <span>070 123 45 67</span>
      <span>alex@mail.com</span>
      <strong style={{ fontSize: "5px", marginTop: "4px" }}>
        KOMPETENS
      </strong>
      <span>Projekt</span>
      <span>Analys</span>
      <span>Teamwork</span>
    </div>
  )}

  <div
    style={{
      padding: template.slug === "minimal" ? "14px" : "12px 10px",
      background:
        template.slug === "engineering"
          ? "linear-gradient(135deg, #ffffff 0%, #ffffff 68%, #eaf3ff 68%)"
          : template.name === t.healthcare
          ? "linear-gradient(135deg, #ffffff 0%, #ffffff 72%, #ecfdf5 72%)"
          : "#ffffff",
      color: "#0f172a",
    }}
  >
    <h3
      style={{
        margin: 0,
        fontSize: template.slug === "minimal" ? "12px" : "10px",
        lineHeight: 1,
        color: template.slug === "minimal" ? "#111827" : template.color,
        letterSpacing: "0.5px",
      }}
    >
      {template.slug === "engineering"
        ? "ALEXANDER BERG"
        : template.name === t.healthcare
        ? "ELIN ANDERSSON"
        : template.slug === "classic"
        ? "ANNA KARLSSON"
        : template.slug === "minimal"
        ? "Sara Lind"
        : "Ditt Namn"}
    </h3>

    <p
      style={{
        margin: "4px 0 9px",
        fontSize: "5.5px",
        fontWeight: 800,
        color: template.slug === "engineering" ? "#2f80ed" : "#334155",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
      }}
    >
      {template.slug === "engineering"
        ? "Mechanical Engineer"
        : template.name === t.healthcare
        ? "Undersköterska"
        : template.slug === "classic"
        ? "Administratör"
        : template.slug === "minimal"
        ? "Frontend utvecklare"
        : "Jobbtitel"}
    </p>

    {[
      [
        "PROFIL",
        template.slug === "engineering"
          ? "Lösningsorienterad ingenjör med erfarenhet av teknisk analys."
          : template.name === t.healthcare
          ? "Trygg och omtänksam vårdpersonal med fokus på människor."
          : "Professionell kandidat med tydlig erfarenhet och stark drivkraft.",
      ],
      [
        "ARBETSLIVSERFARENHET",
        template.slug === "engineering"
          ? "Nordic Engineering AB · CAD, dokumentation och projekt."
          : template.name === t.healthcare
          ? "Äldreboende Solrosen · omsorg, dokumentation och teamarbete."
          : "Företag AB · ansvar, service och resultat i dagligt arbete.",
      ],
      [
        "UTBILDNING",
        template.slug === "engineering"
          ? "Civilingenjör i maskinteknik"
          : template.name === t.healthcare
          ? "Vård- och omsorgsprogrammet"
          : "Relevant utbildning och kurser",
      ],
    ].map(([heading, text]) => (
      <div
        key={heading}
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "5px",
          marginTop: "5px",
        }}
      >
        <strong
          style={{
            display: "block",
            fontSize: "5.5px",
            color: template.slug === "minimal" ? "#111827" : template.color,
            marginBottom: "3px",
          }}
        >
          {heading}
        </strong>
        <p style={{ margin: 0, fontSize: "5px", color: "#475569" }}>
          {text}
        </p>
      </div>
    ))}
  </div>
</div>

      <strong>{template.name}</strong>

      <p
        style={{
          margin: "10px 0 0",
          color: "#64748b",
          fontSize: "13px",
          lineHeight: 1.45,
          fontWeight: 600,
        }}
      >
        {template.description}
      </p>

      <div style={dots}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  ))}
</div>

        <a href="/cv-generator" style={seeAll}>{t.seeAll} →</a>
      </section>

      <section style={features}>
        {[
          ["✨", t.feature1Title, t.feature1Text],
          ["🛡️", t.feature2Title, t.feature2Text],
          ["⬇️", t.feature3Title, t.feature3Text],
          ["🔒", t.feature4Title, t.feature4Text],
        ].map(([icon, title, desc]) => (
          <div style={featureCard} key={title}>
            <div style={featureIcon}>{icon}</div>
            <strong>{title}</strong>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <section style={how}>
        <h2 style={sectionTitle}>{t.howTitle}</h2>

        <div style={steps}>
          {[
            ["1", t.step1Title, t.step1Text],
            ["2", t.step2Title, t.step2Text],
            ["3", t.step3Title, t.step3Text],
          ].map(([number, title, desc]) => (
            <div style={step} key={number}>
              <div style={stepNumber}>{number}</div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="letter" style={letterSection}>
        <div style={letterHeader}>
          <h2>{t.letterTitle}</h2>
          <p>{t.letterSub}</p>
        </div>

        <div style={appGrid}>
          <div style={panel}>
            <label>{t.name}</label>
            <input style={input} value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Ali Ahmed" />

            <label>{t.role}</label>
            <input style={input} value={form.role} onChange={(e) => updateField("role", e.target.value)} placeholder="Frontend utvecklare" />

            <label>{t.experience}</label>
            <textarea style={textarea} value={form.experience} onChange={(e) => updateField("experience", e.target.value)} placeholder="Jag har jobbat med service, lager, programmering..." />

            <label>{t.skills}</label>
            <textarea style={textarea} value={form.skills} onChange={(e) => updateField("skills", e.target.value)} placeholder="React, svenska, engelska, problemlösning..." />

            <label>{t.jobAd}</label>
            <textarea style={textarea} value={form.jobAd} onChange={(e) => updateField("jobAd", e.target.value)} placeholder="Klistra in jobbannonsen här..." />

            <button style={primaryButtonFull} onClick={generateLetter} disabled={loading}>
              {loading ? t.loading : t.generate}
            </button>

            {error && <p style={errorStyle}>{error}</p>}
          </div>

          <div style={panel}>
            <h2>{t.resultTitle}</h2>
            {!letter && <p style={empty}>{t.emptyLetter}</p>}
            {letter && <pre style={letterBox}>{letter}</pre>}

            <div style={buttonRow}>
              <button style={secondaryButton} onClick={copyLetter}>{t.copy}</button>
              <button style={secondaryButton} onClick={printLetter}>{t.print}</button>
            </div>
          </div>
        </div>
      </section>
      

      <section id="pricing" style={bottomCta}>
        <div>
          <h2>{t.bottomTitle}</h2>
          <p>{t.bottomSub}</p>
        </div>
        <a href="/cv-generator" style={bottomButton}>{t.cta} →</a>
      </section>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f7fbff 0%, #ffffff 45%, #f8fafc 100%)",
  color: "#0f172a",
  fontFamily: "Arial, sans-serif",
};

const nav: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",
};

const logo: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: 900,
  color: "#0f172a",
  textDecoration: "none",
  fontSize: "20px",
};

const logoIcon: React.CSSProperties = {
  background: "#2563eb",
  color: "white",
  borderRadius: "10px",
  padding: "8px 9px",
  fontSize: "13px",
};

const navLinks: React.CSSProperties = {
  display: "flex",
  gap: "28px",
  fontSize: "14px",
  fontWeight: 700,
};

const navLink: React.CSSProperties = {
  color: "#0f172a",
  textDecoration: "none",
};

const rightNav: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const langBtn: React.CSSProperties = {
  border: "1px solid #dbeafe",
  background: "white",
  color: "#0f172a",
  borderRadius: "9px",
  padding: "8px 10px",
  cursor: "pointer",
  fontWeight: 800,
  minWidth: "42px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const activeLang: React.CSSProperties = {
  ...langBtn,
  background: "#2563eb",
  color: "white",
  borderColor: "#2563eb",
};

const topCta: React.CSSProperties = {
  background: "#2563eb",
  color: "white",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 800,
  marginLeft: "8px",
};

const hero: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "30px auto 70px",
  padding: "0 28px",
  display: "grid",
  gridTemplateColumns: "1fr 560px",
  gap: "50px",
  alignItems: "center",
};

const heroText: React.CSSProperties = {};

const badge: React.CSSProperties = {
  display: "inline-block",
  background: "#eaf3ff",
  color: "#2563eb",
  padding: "9px 14px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 900,
  marginBottom: "24px",
};

const title: React.CSSProperties = {
  fontSize: "58px",
  lineHeight: 1.05,
  margin: 0,
  letterSpacing: "-2px",
};

const blue: React.CSSProperties = {
  color: "#2563eb",
};

const subtitle: React.CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.65,
  color: "#475569",
  maxWidth: "620px",
  marginTop: "24px",
};

const checkRow: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
  color: "#0f172a",
  fontWeight: 700,
  marginTop: "22px",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "30px",
};

const primaryButton: React.CSSProperties = {
  background: "#2563eb",
  color: "white",
  padding: "18px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
  border: "none",
  cursor: "pointer",
};

const secondaryButton: React.CSSProperties = {
  background: "white",
  color: "#0f172a",
  padding: "16px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid #cbd5e1",
  cursor: "pointer",
};

const rating: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginTop: "32px",
  color: "#64748b",
};

const avatars: React.CSSProperties = {
  fontSize: "24px",
};

const stars: React.CSSProperties = {
  color: "#f59e0b",
  fontWeight: 900,
  letterSpacing: "2px",
};

const muted: React.CSSProperties = {
  color: "#64748b",
};

const heroPreview: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const cvMock: React.CSSProperties = {
  width: "520px",
  minHeight: "650px",
  background: "white",
  borderRadius: "18px",
  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.14)",
  display: "grid",
  gridTemplateColumns: "160px 1fr",
  overflow: "hidden",
  border: "1px solid #e2e8f0",
};

const cvSidebar: React.CSSProperties = {
  background: "#0f2742",
  padding: "24px",
  color: "white",
};

const photo: React.CSSProperties = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "#eaf3ff",
  color: "#2563eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
  fontSize: "32px",
};

const mockLineWhite: React.CSSProperties = {
  height: "8px",
  background: "rgba(255,255,255,0.8)",
  borderRadius: "99px",
  marginBottom: "12px",
};

const mockLineWhiteSmall: React.CSSProperties = {
  height: "6px",
  width: "70%",
  background: "rgba(255,255,255,0.5)",
  borderRadius: "99px",
  marginBottom: "30px",
};

const mockBlock: React.CSSProperties = {
  height: "70px",
  borderTop: "1px solid rgba(255,255,255,0.25)",
  marginTop: "20px",
};

const barList: React.CSSProperties = {
  display: "grid",
  gap: "10px",
  marginTop: "30px",
};

const cvContent: React.CSSProperties = {
  padding: "32px",
};

const mockName: React.CSSProperties = {
  margin: 0,
  color: "#0f2742",
  fontSize: "30px",
  letterSpacing: "1px",
};

const mockRole: React.CSSProperties = {
  margin: "6px 0 14px",
  color: "#2563eb",
  fontWeight: 900,
  fontSize: "13px",
};

const mockHr: React.CSSProperties = {
  height: "1px",
  background: "#cbd5e1",
  marginBottom: "22px",
};

const mockSection: React.CSSProperties = {
  marginBottom: "22px",
};

const section: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "40px 28px",
  textAlign: "center",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "34px",
  margin: "0 0 10px",
};

const sectionSub: React.CSSProperties = {
  color: "#64748b",
  fontSize: "17px",
  marginBottom: "34px",
};

const templateGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(210px, 1fr))",
  gap: "22px",
  alignItems: "stretch",
};

const templateCard: React.CSSProperties = {
  position: "relative",
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "18px",
  padding: "18px",
  textDecoration: "none",
  color: "#0f172a",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
  minHeight: "390px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const cardLabel: React.CSSProperties = {
  position: "absolute",
  top: "-12px",
  left: "18px",
  background: "#2563eb",
  color: "white",
  padding: "5px 10px",
  borderRadius: "99px",
  fontSize: "12px",
  fontWeight: 900,
};

const templatePreview: React.CSSProperties = {
  height: "230px",
  background: "#f8fafc",
  borderRadius: "14px",
  marginBottom: "16px",
  display: "grid",
  gridTemplateColumns: "58px 1fr",
  overflow: "hidden",
  border: "1px solid #dbeafe",
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
};

const tinySidebar: React.CSSProperties = {};

const tinyContent: React.CSSProperties = {
  padding: "22px 14px",
  display: "grid",
  gap: "12px",
};

const dots: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "12px",
};

const seeAll: React.CSSProperties = {
  display: "inline-block",
  marginTop: "28px",
  color: "#2563eb",
  fontWeight: 900,
  textDecoration: "none",
};

const features: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "45px auto",
  padding: "22px",
  background: "#f0f7ff",
  borderRadius: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "18px",
};

const featureCard: React.CSSProperties = {
  background: "white",
  borderRadius: "16px",
  padding: "22px",
  textAlign: "left",
};

const featureIcon: React.CSSProperties = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "#eaf3ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
};

const how: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "40px auto",
  padding: "20px 28px",
  textAlign: "center",
};

const steps: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "22px",
  marginTop: "28px",
};

const step: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "24px",
  textAlign: "left",
  display: "flex",
  gap: "16px",
};

const stepNumber: React.CSSProperties = {
  width: "34px",
  height: "34px",
  background: "#2563eb",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  flexShrink: 0,
};

const letterSection: React.CSSProperties = {
  maxWidth: "1120px",
  margin: "70px auto",
  padding: "0 28px",
};

const letterHeader: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "28px",
};

const appGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
};

const panel: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 15px 35px rgba(15, 23, 42, 0.06)",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "13px",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  margin: "8px 0 16px",
};

const textarea: React.CSSProperties = {
  ...input,
  minHeight: "80px",
};

const primaryButtonFull: React.CSSProperties = {
  ...primaryButton,
  width: "100%",
};

const errorStyle: React.CSSProperties = {
  color: "#dc2626",
  fontWeight: 700,
};

const empty: React.CSSProperties = {
  color: "#64748b",
};

const letterBox: React.CSSProperties = {
  whiteSpace: "pre-wrap",
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  lineHeight: 1.6,
};

const bottomCta: React.CSSProperties = {
  maxWidth: "1120px",
  margin: "70px auto 40px",
  padding: "34px",
  borderRadius: "22px",
  background: "linear-gradient(135deg, #0f2742, #2563eb)",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const bottomButton: React.CSSProperties = {
  background: "white",
  color: "#2563eb",
  padding: "16px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
};