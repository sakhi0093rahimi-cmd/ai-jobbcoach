export const metadata = {
  title: "Skapa CV gratis online – Gratis CV-generator | AI Jobbcoach",
  description:
    "Skapa CV gratis online med AI Jobbcoach. Välj en modern CV-mall, fyll i dina uppgifter och skapa ett professionellt CV på några minuter.",
};

export default function SkapaCvGratisPage() {
  return (
    <main style={page}>
      <nav style={nav}>
        <a href="/" style={logo}>
          <span style={logoIcon}>CV</span>
          AI Jobbcoach
        </a>

        <div style={navLinks}>
          <a href="/" style={navLink}>Startsida</a>
          <a href="/cv-med-ai" style={navLink}>CV med AI</a>
          <a href="/cv-generator" style={navLink}>CV-generator</a>
          <a href="/kontakt" style={navLink}>Kontakt</a>
        </div>

        <a href="/cv-generator" style={topCta}>Skapa CV gratis</a>
      </nav>

      <section style={hero}>
        <p style={badge}>Gratis CV-generator</p>
        <h1 style={title}>Skapa CV gratis online</h1>
        <p style={subtitle}>
          Skapa ett professionellt CV gratis med AI Jobbcoach. Välj en modern
          CV-mall, fyll i dina uppgifter och bygg ett tydligt CV som du kan
          använda när du söker jobb.
        </p>

        <div style={buttons}>
          <a href="/cv-generator" style={primaryButton}>Skapa CV gratis</a>
          <a href="/cv-med-ai" style={secondaryButton}>Läs om CV med AI</a>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Gratis CV-mallar och AI-hjälp</h2>
        <p style={paragraph}>
          Med AI Jobbcoach kan du snabbt komma igång med ditt CV. Du behöver
          inte börja från ett tomt dokument. Välj en mall, fyll i dina uppgifter
          och få hjälp att formulera professionella texter.
        </p>
        <p style={paragraph}>
          Sidan passar dig som söker jobb, praktik, extrajobb eller vill
          uppdatera ditt CV inför nästa steg i karriären.
        </p>
      </section>

      <section style={gridSection}>
        <div style={infoBox}>
          <h3>Skapa CV snabbt</h3>
          <p>
            Fyll i namn, erfarenhet, utbildning och färdigheter. AI hjälper dig
            att skriva bättre texter.
          </p>
        </div>

        <div style={infoBox}>
          <h3>Moderna CV-mallar</h3>
          <p>
            Välj en professionell CV-mall som passar ditt yrke och din
            ansökan.
          </p>
        </div>

        <div style={infoBox}>
          <h3>ATS-vänligt CV</h3>
          <p>
            Skapa ett tydligt CV som är lättare för arbetsgivare och
            rekryteringssystem att läsa.
          </p>
        </div>
      </section>

      <section style={faqSection}>
        <h2 style={sectionTitle}>Vanliga frågor om att skapa CV gratis</h2>

        <div style={faqList}>
          <div style={faqItem}>
            <h3>Kan jag skapa CV gratis?</h3>
            <p>
              Ja, med AI Jobbcoach kan du skapa CV gratis och komma igång
              direkt online.
            </p>
          </div>

          <div style={faqItem}>
            <h3>Behöver jag installera något?</h3>
            <p>
              Nej, du använder CV-generatorn direkt i webbläsaren.
            </p>
          </div>

          <div style={faqItem}>
            <h3>Kan jag använda en CV-mall?</h3>
            <p>
              Ja, du kan välja bland moderna CV-mallar och skapa ett mer
              professionellt intryck.
            </p>
          </div>

          <div style={faqItem}>
            <h3>Kan AI hjälpa mig skriva CV?</h3>
            <p>
              Ja, AI kan hjälpa dig att formulera profil, erfarenhet och
              färdigheter på ett tydligare sätt.
            </p>
          </div>
        </div>
      </section>

      <section style={bottomCta}>
        <h2>Redo att skapa ditt CV?</h2>
        <p>Kom igång gratis med AI Jobbcoach redan idag.</p>
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
  maxWidth: "980px",
  margin: "0 auto",
  padding: "90px 28px 60px",
  textAlign: "center",
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
  justifyContent: "center",
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

const bottomCta: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "60px auto",
  padding: "42px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #0f2742, #2563eb)",
  color: "white",
};