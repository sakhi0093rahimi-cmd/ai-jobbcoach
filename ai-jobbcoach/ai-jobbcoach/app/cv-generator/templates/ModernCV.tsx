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

export default function ModernCV({ form, cvLanguage = "Svenska" }: Props) {
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
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SIDEBAR */}
      <aside
       style={{
  background: "#1f2937",
  color: "white",
  padding: "45px 28px",
  boxSizing: "border-box",
  minHeight: "1123px",
}}
      >
        <div
          style={{
            width: "115px",
            height: "115px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #5eead4",
            background: "#374151",
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
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

       <SidebarSection title="Kontakt">
  {form.email && <SidebarText>{form.email}</SidebarText>}
  {form.phone && <SidebarText>{form.phone}</SidebarText>}
  {form.address && <SidebarText>{form.address}</SidebarText>}
  {location && <SidebarText>{location}</SidebarText>}

  {form.drivingLicense && (
    <SidebarText>Körkort: {form.drivingLicense}</SidebarText>
  )}

  {form.linkedin && <SidebarText>{form.linkedin}</SidebarText>}
  {form.website && <SidebarText>{form.website}</SidebarText>}
</SidebarSection>

        {form.skills && (
          <SidebarSection title="Färdigheter">
            <SidebarList text={form.skills} />
          </SidebarSection>
        )}

        {form.languages && (
          <SidebarSection title="Språk">
            <SidebarList text={form.languages} />
          </SidebarSection>
        )}

        {form.hobbies && (
          <SidebarSection title="Intressen">
            <SidebarList text={form.hobbies} />
          </SidebarSection>
        )}
      </aside>

      {/* RIGHT CONTENT */}
      <main
        style={{
          padding: "60px 68px",
          boxSizing: "border-box",
        }}
      >
        <header
          style={{
           background: "#5eead4",
padding: "30px 34px",
borderRadius: "0",
marginBottom: "42px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#111827",
              fontWeight: 900,
            }}
          >
            {form.name || "Ditt namn"}
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "16px",
              color: "#1f2937",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {form.role || "Jobbtitel"}
          </p>
        </header>

        {form.profile && (
          <ContentSection title="Profil">
            <Paragraph text={form.profile} />
          </ContentSection>
        )}

        <ContentSection title="Arbetslivserfarenhet">
          <Paragraph text={form.experience || "Din erfarenhet visas här"} />
        </ContentSection>

        <ContentSection title="Utbildning">
          <Paragraph text={form.education || "Din utbildning visas här"} />
        </ContentSection>

        {!form.skills && (
          <ContentSection title="Färdigheter">
            <Paragraph text="Dina färdigheter visas här" />
          </ContentSection>
        )}

        {!form.languages && form.languages && (
          <ContentSection title="Språk">
            <Paragraph text={form.languages} />
          </ContentSection>
        )}
      </main>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "28px",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          margin: "0 0 10px",
          color: "#111827",
          fontWeight: 800,
          textTransform: "uppercase",
          borderBottom: "2px solid #5eead4",
          paddingBottom: "6px",
        }}
      >
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
        lineHeight: 1.55,
        fontSize: "15.5px",
        color: "#374151",
      }}
    >
      {text}
    </p>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "28px",
      }}
    >
      <h3
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          margin: "0 0 12px",
          color: "#5eead4",
          borderBottom: "1px solid #5eead4",
          paddingBottom: "6px",
        }}
      >
        {title}
      </h3>

      {children}
    </section>
  );
}

function SidebarText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontSize: "13px",
        lineHeight: 1.4,
        wordBreak: "break-word",
        color: "#e5e7eb",
      }}
    >
      {children}
    </p>
  );
}

function SidebarList({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "7px",
      }}
    >
      {text
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: "13px",
              color: "#e5e7eb",
              lineHeight: 1.35,
            }}
          >
            • {item}
          </div>
        ))}
    </div>
  );
}