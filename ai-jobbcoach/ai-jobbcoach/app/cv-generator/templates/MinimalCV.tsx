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
};
const accent = "#14b8a6";
const dark = "#111827";
const muted = "#6b7280";
const light = "#f8fafc";
const border = "#e5e7eb";

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
        color: dark,
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        padding: "36px 44px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "250px",
          height: "250px",
          background: accent,
          opacity: 0.12,
          borderRadius: "0 0 0 160px",
        }}
      />

      <header
        style={{
          display: "grid",
         gridTemplateColumns: "120px 1fr",
          gap: "24px",
          alignItems: "center",
          marginBottom: "42px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "135px",
            height: "135px",
            borderRadius: "28px",
            overflow: "hidden",
            background: light,
            border: `4px solid ${accent}`,
            boxShadow: "0 18px 38px rgba(15, 23, 42, 0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

        <div>
          <div
            style={{
              width: "80px",
              height: "7px",
              background: accent,
              borderRadius: "999px",
              marginBottom: "18px",
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 900,
              color: dark,
            }}
          >
            {form.name || "Ditt namn"}
          </h1>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "17px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: accent,
              fontWeight: 800,
            }}
          >
            {form.role || "Jobbtitel"}
          </p>
        </div>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "215px 1fr",
          gap: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <aside
          style={{
            background: light,
            border: `1px solid ${border}`,
            borderRadius: "26px",
            padding: "20px 18px",
            boxShadow: "0 14px 34px rgba(15, 23, 42, 0.07)",
            alignSelf: "start",
          }}
        >
          <SidebarSection title="Kontakt">
            {form.phone && <ContactLine label="Tel" value={form.phone} />}
            {form.email && <ContactLine label="Mail" value={form.email} />}
            {form.address && <ContactLine label="Adress" value={form.address} />}
            {location && <ContactLine label="Ort" value={location} />}
            {form.drivingLicense && (
              <ContactLine label="Körkort" value={form.drivingLicense} />
            )}
            {form.linkedin && (
              <ContactLine label="LinkedIn" value={form.linkedin} />
            )}
            {form.website && <ContactLine label="Webb" value={form.website} />}
          </SidebarSection>

          {form.skills && (
            <SidebarSection title="Styrkor">
              <ChipList text={form.skills} />
            </SidebarSection>
          )}

          {form.languages && (
            <SidebarSection title="Språk">
              <ChipList text={form.languages} />
            </SidebarSection>
          )}

          {form.hobbies && (
            <SidebarSection title="Intressen">
              <ChipList text={form.hobbies} />
            </SidebarSection>
          )}
        </aside>

        <main>
          {form.profile && (
            <PremiumSection title="Profil">
              <Paragraph text={form.profile} />
            </PremiumSection>
          )}

          <PremiumSection title="Arbetslivserfarenhet">
            <Paragraph text={form.experience || "Din erfarenhet visas här"} />
          </PremiumSection>

          <PremiumSection title="Utbildning">
            <Paragraph text={form.education || "Din utbildning visas här"} />
          </PremiumSection>
        </main>
      </div>
    </div>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: "18px" }}>
      <h3
        style={{
          margin: "0 0 14px",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: dark,
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: accent,
            display: "inline-block",
          }}
        />
        {title}
      </h3>
      {children}
    </section>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        marginBottom: "4px",
paddingBottom: "4px",
        borderBottom: `1px solid ${border}`,
        wordBreak: "break-word",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "1.3px",
          color: muted,
          fontWeight: 800,
          marginBottom: "3px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "10px",
          lineHeight: 1.35,
          color: dark,
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ChipList({ text }: { text: string }) {
  const items = text
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            background: "white",
            border: `1px solid ${border}`,
            borderLeft: `4px solid ${accent}`,
            borderRadius: "999px",
            padding: "3px 5px",
            fontSize: "8.5px",
            lineHeight: 1.2,
            fontWeight: 700,
            color: dark,
            boxShadow: "0 4px 12px rgba(15, 23, 42, 0.05)",
          }}
        >
          {item.replace(/^[-•]\s*/, "")}
        </span>
      ))}
    </div>
  );
}

function PremiumSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "34px",
        paddingBottom: "24px",
        borderBottom: `1px solid ${border}`,
      }}
    >
      <h2
        style={{
          margin: "0 0 14px",
          fontSize: "24px",
          lineHeight: 1.1,
          textTransform: "uppercase",
          color: dark,
          letterSpacing: "0.5px",
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            width: "34px",
            height: "6px",
            background: accent,
            borderRadius: "999px",
            display: "inline-block",
          }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p
      style={{
        margin: 0,
        whiteSpace: "pre-line",
        lineHeight: 1.65,
        fontSize: "15px",
        color: "#374151",
      }}
    >
      {text}
    </p>
  );
}