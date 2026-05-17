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

const labels = {
  Svenska: {
    contact: "Kontakt",
    profile: "Profil",
    experience: "Arbetslivserfarenhet",
    education: "Utbildning",
    skills: "Teknisk kompetens",
    tools: "Verktyg / Program",
    languages: "Språk",
    interests: "Intressen",
    projects: "Projekt",
    certifications: "Certifikat",
    other: "Övrigt",
    license: "Körkort",
  },
  Engelska: {
    contact: "Contact",
    profile: "Profile",
    experience: "Work Experience",
    education: "Education",
    skills: "Technical Skills",
    tools: "Tools / Software",
    languages: "Languages",
    interests: "Interests",
    projects: "Projects",
    certifications: "Certifications",
    other: "Other",
    license: "Driving license",
  },
  Tyska: {
    contact: "Kontakt",
    profile: "Profil",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    skills: "Technische Kompetenzen",
    tools: "Tools / Software",
    languages: "Sprachen",
    interests: "Interessen",
    projects: "Projekte",
    certifications: "Zertifikate",
    other: "Sonstiges",
    license: "Führerschein",
  },
  Franska: {
    contact: "Contact",
    profile: "Profil",
    experience: "Expérience professionnelle",
    education: "Formation",
    skills: "Compétences techniques",
    tools: "Outils / Logiciels",
    languages: "Langues",
    interests: "Centres d’intérêt",
    projects: "Projets",
    certifications: "Certifications",
    other: "Autre",
    license: "Permis",
  },
  Spanska: {
    contact: "Contacto",
    profile: "Perfil",
    experience: "Experiencia laboral",
    education: "Formación",
    skills: "Competencias técnicas",
    tools: "Herramientas / Software",
    languages: "Idiomas",
    interests: "Intereses",
    projects: "Proyectos",
    certifications: "Certificados",
    other: "Otros",
    license: "Carnet de conducir",
  },
  Arabiska: {
    contact: "معلومات الاتصال",
    profile: "الملف الشخصي",
    experience: "الخبرة العملية",
    education: "التعليم",
    skills: "المهارات التقنية",
    tools: "الأدوات / البرامج",
    languages: "اللغات",
    interests: "الاهتمامات",
    projects: "المشاريع",
    certifications: "الشهادات",
    other: "معلومات أخرى",
    license: "رخصة القيادة",
  },
  "Persiska/Dari": {
    contact: "اطلاعات تماس",
    profile: "پروفایل",
    experience: "تجربه کاری",
    education: "تحصیلات",
    skills: "مهارت‌های فنی",
    tools: "ابزارها / نرم‌افزارها",
    languages: "زبان‌ها",
    interests: "علایق",
    projects: "پروژه‌ها",
    certifications: "گواهینامه‌ها",
    other: "سایر",
    license: "گواهینامه رانندگی",
  },
} as const;

export default function EngineeringCV({
  form,
  cvLanguage = "Svenska",
}: Props) {
  const t = labels[cvLanguage as keyof typeof labels] || labels.Svenska;

  const location =
    form.postalCode || form.city
      ? `${form.postalCode || ""} ${form.city || ""}`.trim()
      : form.address;

  const contactItems = [
    form.phone,
    form.email,
    form.address,
    location !== form.address ? location : "",
    form.linkedin,
    form.website,
    form.drivingLicense ? `${t.license}: ${form.drivingLicense}` : "",
  ].filter(Boolean);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        background: "white",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDEBAR */}
      <aside
        style={{
          background: "linear-gradient(180deg, #08233d 0%, #0f2742 100%)",
          color: "white",
          padding: "34px 26px",
          boxSizing: "border-box",
          minHeight: "1123px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "138px",
            height: "138px",
            borderRadius: "22px",
            overflow: "hidden",
            border: "3px solid white",
            background: "#12385d",
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            boxShadow: "0 16px 35px rgba(0,0,0,0.25)",
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

        <SidebarSection title={t.contact}>
          {contactItems.map((item, index) => (
            <SidebarText key={index}>{item}</SidebarText>
          ))}
        </SidebarSection>

        {form.skills && (
          <SidebarSection title={t.skills}>
            <SkillBars text={form.skills} />
          </SidebarSection>
        )}

        {form.languages && (
          <SidebarSection title={t.languages}>
            <DotList text={form.languages} />
          </SidebarSection>
        )}

        {form.hobbies && (
          <SidebarSection title={t.interests}>
            <DotList text={form.hobbies} />
          </SidebarSection>
        )}

        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "26px",
            right: "26px",
            height: "1px",
            background: "rgba(255,255,255,0.2)",
          }}
        />
      </aside>

      {/* RIGHT CONTENT */}
      <main
        style={{
          padding: "42px 46px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "210px",
            height: "150px",
            background: "#eaf3ff",
            borderBottomLeftRadius: "120px",
          }}
        />

        <header
          style={{
            position: "relative",
            marginBottom: "36px",
            borderBottom: "2px solid #d8e2ee",
            paddingBottom: "18px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "44px",
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#0f2742",
              fontWeight: 900,
            }}
          >
            {form.name || "Ditt namn"}
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#2f80ed",
              fontWeight: 800,
            }}
          >
            {form.role || "Ingenjör"}
          </p>

          <div
            style={{
              width: "58px",
              height: "5px",
              background: "#2f80ed",
              borderRadius: "99px",
              marginTop: "14px",
            }}
          />
        </header>

        {form.profile && (
          <MainSection icon="●" title={t.profile}>
            <Paragraph text={form.profile} />
          </MainSection>
        )}

        <MainSection icon="◆" title={t.experience}>
          <Paragraph text={form.experience || "Din erfarenhet visas här"} />
        </MainSection>

        <MainSection icon="■" title={t.education}>
          <Paragraph text={form.education || "Din utbildning visas här"} />
        </MainSection>

        {form.skills && (
          <MainSection icon="▲" title={t.projects}>
            <ProjectPreview text={form.skills} />
          </MainSection>
        )}

        {(form.drivingLicense || form.birthDate || form.nationality) && (
          <MainSection icon="★" title={t.other}>
            {form.drivingLicense && (
              <Paragraph text={`${t.license}: ${form.drivingLicense}`} />
            )}
            {form.birthDate && <Paragraph text={form.birthDate} />}
            {form.nationality && <Paragraph text={form.nationality} />}
          </MainSection>
        )}
      </main>
    </div>
  );
}

function MainSection({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: "28px",
        borderBottom: "1px solid #d8e2ee",
        paddingBottom: "22px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "34px 1fr",
          gap: "12px",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "#eaf3ff",
            color: "#2f80ed",
            border: "2px solid #2f80ed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 900,
          }}
        >
          {icon}
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: "21px",
            textTransform: "uppercase",
            color: "#0f2742",
            fontWeight: 900,
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h2>
      </div>

      <div style={{ paddingLeft: "46px" }}>{children}</div>
    </section>
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
    <section style={{ marginBottom: "28px" }}>
      <h3
        style={{
          margin: "0 0 13px",
          fontSize: "16px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "white",
          fontWeight: 900,
          borderBottom: "1px solid rgba(255,255,255,0.55)",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h3>

      <div>{children}</div>
    </section>
  );
}

function SidebarText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 10px",
        fontSize: "13px",
        lineHeight: 1.35,
        color: "rgba(255,255,255,0.92)",
        wordBreak: "break-word",
      }}
    >
      {children}
    </p>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p
      style={{
        margin: 0,
        whiteSpace: "pre-line",
        fontSize: "14px",
        lineHeight: 1.55,
        color: "#243244",
      }}
    >
      {text}
    </p>
  );
}

function DotList({ text }: { text: string }) {
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
            display: "grid",
            gridTemplateColumns: "10px 1fr",
            gap: "8px",
            alignItems: "start",
            color: "rgba(255,255,255,0.92)",
            fontSize: "13px",
            lineHeight: 1.3,
          }}
        >
          <span style={{ color: "#2f80ed", fontWeight: 900 }}>•</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SkillBars({ text }: { text: string }) {
  const items = text
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 9);

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 70px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.95)",
                fontSize: "13px",
                lineHeight: 1.2,
              }}
            >
              {item}
            </span>

            <span
              style={{
                height: "6px",
                borderRadius: "99px",
                background: "rgba(255,255,255,0.35)",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "100%",
                  width: `${90 - (index % 4) * 10}%`,
                  background: "#2f80ed",
                  borderRadius: "99px",
                }}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectPreview({ text }: { text: string }) {
  const items = text
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#f5f9ff",
            border: "1px solid #d8e2ee",
            borderRadius: "10px",
            padding: "10px 12px",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#0f2742",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            {item}
          </strong>
          <span style={{ color: "#4b5563", fontSize: "12px", lineHeight: 1.4 }}>
            Tekniskt projekt, förbättringsarbete eller relevant erfarenhet.
          </span>
        </div>
      ))}
    </div>
  );
}