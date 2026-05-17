export default function KontaktPage() {
  return (
    <main style={page}>
        <nav style={nav}>
  <a href="/" style={logo}>
    <span style={logoIcon}>CV</span>
    AI Jobbcoach
  </a>

  <div style={navLinks}>
    <a href="/cv-generator" style={navLink}>CV-generator</a>
    <a href="/#letter" style={navLink}>Personligt brev</a>
    <a href="/#templates" style={navLink}>Mallar</a>
    <a href="/#pricing" style={navLink}>Priser</a>
    <a href="/kontakt" style={navLink}>Kontakt</a>
  </div>

  <div style={rightNav}>
    <a href="/cv-generator" style={topCta}>Skapa CV gratis</a>
  </div>
</nav>
      <section style={hero}>
        <div style={heroText}>
          <h1 style={title}>Vi finns här för dig</h1>
          <p style={subtitle}>
            Vi hjälper gärna till om du har frågor om CV-skapandet,
            personligt brev eller behöver teknisk support.
          </p>
        </div>

        <div style={heroImage} />
      </section>

      <section style={content}>
        <div style={left}>
          <h2 style={sectionTitle}>Kontakta oss</h2>

          <div style={textBlock}>
            <h3>Har du frågor eller behöver hjälp?</h3>
            <p>
              Kontakta oss via e-post så återkommer vi så snart vi kan.
              Vi svarar vanligtvis inom 1–2 arbetsdagar.
            </p>

            <h3>E-post</h3>
            <p>
              <a href="mailto:support@ai-jobbcoach.se" style={link}>
                support@ai-jobbcoach.se
              </a>
            </p>

            <h3>Företag</h3>
            <p>
              AI Jobbcoach
              <br />
              Sverige
            </p>
          </div>
        </div>

        <div style={formBox}>
          <h2 style={formTitle}>Meddelande</h2>
          <p style={formText}>
            Använd formuläret för att kontakta oss. Vi svarar oftast inom två
            arbetsdagar.
          </p>

          <form style={form}>
            <label style={label}>Namn</label>
            <input style={input} placeholder="Ange ditt namn" />

            <label style={label}>E-post</label>
            <input style={input} type="email" placeholder="Ange din e-postadress" />

            <label style={label}>Ämne</label>
            <select style={input} defaultValue="">
              <option value="" disabled>
                Välj...
              </option>
              <option>CV-generator</option>
              <option>Personligt brev</option>
              <option>Teknisk support</option>
              <option>Annat</option>
            </select>

            <label style={label}>Meddelande</label>
            <textarea style={textarea} placeholder="Ange ditt meddelande" />

            <button type="submit" style={button}>
              Skicka
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#ffffff",
  color: "#0f172a",
  fontFamily: "Arial, sans-serif",
};

const hero: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "260px",
};

const heroText: React.CSSProperties = {
  background: "#1f5a92",
  color: "white",
  padding: "70px 64px",
};

const title: React.CSSProperties = {
  fontSize: "46px",
  lineHeight: 1.1,
  margin: 0,
  fontWeight: 900,
};

const subtitle: React.CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.6,
  maxWidth: "620px",
  marginTop: "24px",
};

const heroImage: React.CSSProperties = {
  background:
    "linear-gradient(135deg, #dbeafe 0%, #93c5fd 45%, #1e3a8a 100%)",
};

const content: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "72px 32px",
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "80px",
  alignItems: "start",
};

const left: React.CSSProperties = {};

const sectionTitle: React.CSSProperties = {
  fontSize: "30px",
  fontWeight: 900,
  marginBottom: "32px",
};

const textBlock: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.7,
};

const link: React.CSSProperties = {
  color: "#2563eb",
  fontWeight: 800,
};

const formBox: React.CSSProperties = {
  border: "1px solid #cbd5e1",
  padding: "32px",
  background: "white",
};

const formTitle: React.CSSProperties = {
  fontSize: "26px",
  fontWeight: 900,
  marginBottom: "16px",
};

const formText: React.CSSProperties = {
  lineHeight: 1.6,
  marginBottom: "28px",
};

const form: React.CSSProperties = {
  display: "grid",
  gap: "12px",
};

const label: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 800,
};

const input: React.CSSProperties = {
  width: "100%",
  border: "1px solid #94a3b8",
  padding: "13px 14px",
  fontSize: "15px",
  marginBottom: "10px",
};

const textarea: React.CSSProperties = {
  ...input,
  height: "150px",
  resize: "vertical",
};

const button: React.CSSProperties = {
  marginTop: "18px",
  width: "100%",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "16px",
  fontSize: "16px",
  fontWeight: 900,
  cursor: "pointer",
};
const nav: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",
  background: "white",
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
};

const topCta: React.CSSProperties = {
  background: "#2563eb",
  color: "white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 900,
};