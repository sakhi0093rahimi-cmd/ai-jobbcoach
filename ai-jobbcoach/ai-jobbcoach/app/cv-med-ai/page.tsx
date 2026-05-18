export const metadata = {
  title: "Skapa CV med AI gratis – AI CV-generator | AI Jobbcoach",
  description:
    "Skapa CV med AI gratis på några minuter. Använd AI Jobbcoach för att skriva ett professionellt, ATS-vänligt CV med moderna CV-mallar.",
};

export default function CvMedAiPage() {
  return (
    <main style={page}>
      <nav style={nav}>
        <a href="/" style={logo}>
          <span style={logoIcon}>CV</span>
          AI Jobbcoach
        </a>

        <div style={navLinks}>
          <a href="/" style={navLink}>Startsida</a>
          <a href="/cv-generator" style={navLink}>CV-generator</a>
          <a href="/kontakt" style={navLink}>Kontakt</a>
        </div>

        <a href="/cv-generator" style={topCta}>Skapa CV gratis</a>
      </nav>

      <section style={hero}>
        <div>
          <p style={badge}>AI CV-generator</p>
          <h1 style={title}>Skapa CV med AI gratis</h1>
          <p style={subtitle}>
            Med AI Jobbcoach kan du skapa ett professionellt CV med AI på några
            minuter. Välj en modern CV-mall, fyll i dina uppgifter och ladda ner
            ett ATS-vänligt CV som PDF.
          </p>

          <div style={buttons}>
            <a href="/cv-generator" style={primaryButton}>Skapa CV med AI</a>
            <a href="/" style={secondaryButton}>Till startsidan</a>
          </div>
        </div>

        <div style={card}>
          <h2 style={cardTitle}>Vad får du?</h2>
          <ul style={list}>
            <li>AI-förslag för profil, erfarenhet och färdigheter</li>
            <li>Professionella CV-mallar för olika yrken</li>
            <li>ATS-vänlig struktur som fungerar i rekryteringssystem</li>
            <li>Möjlighet att skapa personligt brev med AI</li>
            <li>Ladda ner ditt CV som PDF</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Varför skapa CV med AI?</h2>
        <p style={paragraph}>
          Att skriva CV kan vara svårt, särskilt om du inte vet hur du ska
          beskriva din erfarenhet. En AI CV-generator hjälper dig att formulera
          tydliga texter, välja rätt struktur och skapa ett CV som ser
          professionellt ut.
        </p>
        <p style={paragraph}>
          AI Jobbcoach är byggd för arbetssökande i Sverige som vill skapa CV
          snabbt, enkelt och gratis. Du kan börja direkt utan krångliga steg.
        </p>
      </section>
      <section style={faqSection}>
  <h2 style={sectionTitle}>Vanliga frågor om CV med AI</h2>

  <div style={faqList}>
    <div style={faqItem}>
      <h3>Är AI Jobbcoach gratis?</h3>
      <p>
        Ja, du kan skapa CV med AI gratis och komma igång direkt med våra
        CV-mallar.
      </p>
    </div>

    <div style={faqItem}>
      <h3>Hur skapar jag CV med AI?</h3>
      <p>
        Du fyller i dina uppgifter, väljer en CV-mall och låter AI hjälpa dig
        att formulera tydliga texter för profil, erfarenhet och färdigheter.
      </p>
    </div>

    <div style={faqItem}>
      <h3>Vad betyder ATS-vänligt CV?</h3>
      <p>
        Ett ATS-vänligt CV är strukturerat så att det är lättare för
        rekryteringssystem att läsa innehållet korrekt.
      </p>
    </div>

    <div style={faqItem}>
      <h3>Kan jag ladda ner mitt CV som PDF?</h3>
      <p>
        Ja, du kan skapa ett professionellt CV och ladda ner det som PDF.
      </p>
    </div>
  </div>
</section>

      <section style={gridSection}>
        <div style={infoBox}>
          <h3>CV-mallar</h3>
          <p>
            Välj bland moderna mallar som passar olika branscher och karriärnivåer.
          </p>
        </div>

        <div style={infoBox}>
          <h3>ATS-vänligt CV</h3>
          <p>
            Skapa ett tydligt CV som är lätt att läsa för både arbetsgivare och system.
          </p>
        </div>

        <div style={infoBox}>
          <h3>Personligt brev med AI</h3>
          <p>
            Använd AI för att skapa ett personligt brev som matchar jobbet du söker.
          </p>
        </div>
      </section>

      <section style={bottomCta}>
        <h2>Redo att skapa ditt CV?</h2>
        <p>Kom igång med AI Jobbcoach och skapa ditt CV gratis.</p>
        <a href="/cv-generator" style={primaryButton}>Skapa CV gratis</a>
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
  gap: "24px",
  fontSize: "14px",
  fontWeight: 700,
};

const navLink: React.CSSProperties = {
  color: "#0f172a",
  textDecoration: "none",
};

const topCta: React.CSSProperties = {
  background: "#2563eb",
  color: "white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
};

const hero: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "80px 28px",
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "56px",
  alignItems: "center",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  background: "#dbeafe",
  color: "#2563eb",
  padding: "8px 14px",
  borderRadius: "999px",
  fontWeight: 900,
  marginBottom: "20px",
};

const title: React.CSSProperties = {
  fontSize: "58px",
  lineHeight: 1.05,
  margin: 0,
  fontWeight: 900,
  letterSpacing: "-2px",
};

const subtitle: React.CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.7,
  color: "#475569",
  marginTop: "24px",
};

const buttons: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "32px",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "#2563eb",
  color: "white",
  padding: "16px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
};

const secondaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "white",
  color: "#0f172a",
  padding: "16px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
  border: "1px solid #cbd5e1",
};

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "24px",
  padding: "36px",
  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
};

const cardTitle: React.CSSProperties = {
  fontSize: "28px",
  marginTop: 0,
};

const list: React.CSSProperties = {
  lineHeight: 2,
  color: "#334155",
  fontSize: "16px",
};

const section: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 28px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: 900,
};

const paragraph: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: 1.8,
  color: "#475569",
};

const gridSection: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "40px 28px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
};

const infoBox: React.CSSProperties = {
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "20px",
  padding: "28px",
};

const bottomCta: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "60px auto",
  padding: "42px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #0f2742, #2563eb)",
  color: "white",
};
const faqSection: React.CSSProperties = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "40px 28px",
};

const faqList: React.CSSProperties = {
  display: "grid",
  gap: "18px",
  marginTop: "28px",
};

const faqItem: React.CSSProperties = {
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "18px",
  padding: "24px",
  lineHeight: 1.7,
};