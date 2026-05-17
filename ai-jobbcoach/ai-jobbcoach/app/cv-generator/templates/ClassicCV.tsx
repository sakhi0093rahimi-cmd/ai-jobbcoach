import type { ReactNode } from "react";

type Props = {
  form: {
    photo?: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    postalCode?: string;
    city?: string;
    linkedin: string;
    website?: string;
    birthDate?: string;
    birthPlace?: string;
    drivingLicense?: string;
    gender?: string;
    nationality?: string;
    civilStatus?: string;
    profile: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    hobbies?: string;
    };
  cvLanguage?: string;
};;

export default function ClassicCV({ form, cvLanguage = "Svenska" }: Props) {
  const location =
    form.postalCode || form.city
      ? `${form.postalCode || ""} ${form.city || ""}`.trim()
      : "";

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        background: "white",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "285px 1fr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "95px",
          background: "#16a3b8",
          zIndex: 0,
        }}
      />

      {/* LEFT SIDEBAR */}
      <aside
        style={{
          background: "#083744",
          color: "white",
          padding: "46px 28px",
          boxSizing: "border-box",
          minHeight: "1123px",
          zIndex: 1,
        }}
      >
        <div
          style={{
          width: "135px",
           height: "135px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 34px",
            background: "white",
            border: "5px solid #16a3b8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#083744",
            fontSize: "42px",
          }}
        >
          {form.photo ? (
            <img
              src={form.photo}
              alt="Profilbild"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            "👤"
          )}
        </div>

        <SidebarBox title="Kontakt">
          {form.phone && <ContactLine icon="☎">{form.phone}</ContactLine>}
          {form.email && <ContactLine icon="✉">{form.email}</ContactLine>}
          {form.website && <ContactLine icon="🌐">{form.website}</ContactLine>}
          {form.address && <ContactLine icon="⌂">{form.address}</ContactLine>}
          {location && <ContactLine icon="⌖">{location}</ContactLine>}
          {form.drivingLicense && (
            <ContactLine icon="🚗">Körkort: {form.drivingLicense}</ContactLine>
          )}
          {form.linkedin && <ContactLine icon="in">{form.linkedin}</ContactLine>}
        </SidebarBox>

        {form.skills && (
          <SidebarBox title="Färdigheter">
            <SidebarList text={form.skills} />
          </SidebarBox>
        )}

        {form.languages && (
          <SidebarBox title="Språk">
            <SidebarList text={form.languages} />
          </SidebarBox>
        )}

        {form.hobbies && (
          <SidebarBox title="Intressen">
            <SidebarList text={form.hobbies} />
          </SidebarBox>
        )}
      </aside>

      {/* RIGHT CONTENT */}
      <main
        style={{
          padding: "72px 58px 52px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        <header
          style={{
            background: "#16a3b8",
            padding: "32px 36px",
            margin: "0 0 46px",
            color: "#083744",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "40px",
              lineHeight: 1.1,
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            {form.name || "Ditt namn"}
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "17px",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.4px",
            }}
          >
            {form.role || "Jobbtitel"}
          </p>
        </header>

        {form.profile && (
          <ContentSection icon="👤" title="Profil">
            <Paragraph text={form.profile} />
          </ContentSection>
        )}

        <ContentSection icon="💼" title="Arbetslivserfarenhet">
          <Paragraph text={form.experience || "Din erfarenhet visas här"} />
        </ContentSection>

        <ContentSection icon="🎓" title="Utbildning">
          <Paragraph text={form.education || "Din utbildning visas här"} />
        </ContentSection>
      </main>
    </div>
  );
}

function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: "32px" }}>
      <h2
        style={{
          border: "2px solid #16a3b8",
          color: "white",
          textTransform: "uppercase",
          fontSize: "18px",
          textAlign: "center",
          padding: "8px 10px",
          margin: "0 0 18px",
          letterSpacing: "0.5px",
          fontWeight: 800,
        }}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}

function ContactLine({
  icon,
  children,
}: {
  icon: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: "10px",
        alignItems: "start",
        marginBottom: "12px",
        fontSize: "13px",
        lineHeight: 1.35,
        wordBreak: "break-word",
      }}
    >
      <span
        style={{
          color: "#16a3b8",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

function SidebarList({ text }: { text: string }) {
  const items = text
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div style={{ display: "grid", gap: "8px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            fontSize: "13px",
            lineHeight: 1.35,
            display: "grid",
            gridTemplateColumns: "10px 1fr",
            gap: "6px",
          }}
        >
          <span style={{ color: "#16a3b8" }}>•</span>
          <span>{item.replace(/^[-•]\s*/, "")}</span>
        </div>
      ))}
    </div>
  );
}

function ContentSection({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "42px 1fr",
        gap: "16px",
        marginBottom: "34px",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          border: "3px solid #16a3b8",
          color: "#16a3b8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "17px",
          fontWeight: 800,
          marginTop: "2px",
        }}
      >
        {icon}
      </div>

      <div>
        <h2
          style={{
            margin: "0 0 10px",
            fontSize: "25px",
            textTransform: "uppercase",
            color: "#083744",
            fontWeight: 900,
            borderBottom: "2px solid #16a3b8",
            paddingBottom: "6px",
          }}
        >
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p
      style={{
        margin: 0,
        whiteSpace: "pre-line",
        lineHeight: 1.55,
        fontSize: "15px",
        color: "#374151",
      }}
    >
      {text}
    </p>
  );
}