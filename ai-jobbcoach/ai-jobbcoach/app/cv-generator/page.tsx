"use client";

import React, { useState } from "react";
import ModernCV from "./templates/ModernCV";
import ClassicCV from "./templates/ClassicCV";
import MinimalCV from "./templates/MinimalCV";
import EngineeringCV from "./templates/EngineeringCV";

export default function CVGeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [cvLanguage, setCvLanguage] = useState("Svenska");
  const [isGenerating, setIsGenerating] = useState(false);

  const [openSections, setOpenSections] = useState({
    profile: false,
    education: false,
    experience: false,
    skills: false,
    languages: false,
    hobbies: false,
  });

  const [showFields, setShowFields] = useState({
    birthDate: false,
    birthPlace: false,
    drivingLicense: false,
    gender: false,
    nationality: false,
    civilStatus: false,
    website: false,
    linkedin: false,
  });

  const [form, setForm] = useState({
    photo: "",
    uploadedCvName: "",
linkedinImportUrl: "",
    name: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    linkedin: "",
    website: "",
    birthDate: "",
    birthPlace: "",
    drivingLicense: "",
    gender: "",
    nationality: "",
    civilStatus: "",
    profile: "",
    experience: "",
    education: "",
    skills: "",
    languages: "",
    hobbies: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => {
      const updated = {
        ...prev,
        [field]: value,
      };

      updated.name = `${updated.firstName} ${updated.lastName}`.trim();

      return updated;
    });
  };
const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    updateField("photo", reader.result as string);
  };

  reader.readAsDataURL(file);
};
const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) return;

  updateField("uploadedCvName", file.name);
  alert(`CV uppladdat: ${file.name}`);
};
const handleGenerateWithAI = async () => {
  try {
    setIsGenerating(true);

    const res = await fetch("/api/generate-cv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Kunde inte skapa CV med AI");
    }

    setForm((prev) => ({
      ...prev,
      profile: data.profile || prev.profile,
      experience: data.experience || prev.experience,
      education: data.education || prev.education,
      skills: data.skills || prev.skills,
      languages: data.languages || prev.languages,
      hobbies: data.hobbies || prev.hobbies,
    }));
  } catch (error) {
    console.error(error);
    alert("Något gick fel när AI skulle skapa CV:t.");
  } finally {
    setIsGenerating(false);
  }
};
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleField = (field: keyof typeof showFields) => {
    setShowFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

   const hasUserContent = Boolean(
  form.photo ||
    form.name ||
    form.firstName ||
    form.lastName ||
    form.role ||
    form.email ||
    form.phone ||
    form.address ||
    form.postalCode ||
    form.city ||
    form.linkedin ||
    form.website ||
    form.profile ||
    form.experience ||
    form.education ||
    form.skills ||
    form.languages ||
    form.hobbies
);

const engineeringDemoForm = {
  ...form,
  photo: "",
  name: "Alexander Berg",
  firstName: "Alexander",
  lastName: "Berg",
  role: "Mechanical Engineer",
  email: "alexander.berg@email.com",
  phone: "+46 70 123 45 67",
  address: "Stockholm, Sverige",
  postalCode: "",
  city: "",
  linkedin: "linkedin.com/in/alexanderberg",
  website: "alexanderberg.se",
  birthDate: "",
  birthPlace: "",
  drivingLicense: "B",
  gender: "",
  nationality: "",
  civilStatus: "",
  profile:
    "Lösningsorienterad ingenjör med erfarenhet av produktutveckling, teknisk analys och processförbättring. Stark analytisk förmåga och vana att arbeta strukturerat i tekniska projekt.",
  experience:
    "Mechanical Engineer – Nordic Engineering AB, Stockholm\n- Utvecklade tekniska lösningar för produktion och kvalitet.\n- Arbetade med CAD, teknisk dokumentation och förbättringsarbete.\n- Samarbetade med tvärfunktionella team för att lösa tekniska problem.",
  education:
    "Civilingenjör i maskinteknik\nKungliga Tekniska högskolan, Stockholm",
  skills:
    "CAD\nSolidWorks\nAutoCAD\nPython\nMATLAB\nProjektledning\nTeknisk dokumentation\nProblemlösning\nKvalitetsarbete",
  languages: "Svenska\nEngelska\nTyska",
  hobbies: "Teknik och innovation\nTräning\nResor",
};

const defaultDemoForm = {
  ...form,
  name: "Ditt namn",
  firstName: "",
  lastName: "",
  role: "Jobbtitel",
  email: "",
  phone: "",
  address: "",
  postalCode: "",
  city: "",
  linkedin: "",
  website: "",
  birthDate: "",
  birthPlace: "",
  drivingLicense: "",
  gender: "",
  nationality: "",
  civilStatus: "",
  profile: "",
  experience: "Din erfarenhet visas här",
  education: "Din utbildning visas här",
  skills: "Dina färdigheter visas här",
  languages: "",
  hobbies: "",
};

const previewForm = hasUserContent
  ? {
      ...form,
      name:
        form.name ||
        `${form.firstName || ""} ${form.lastName || ""}`.trim() ||
        "Ditt namn",
    }
  : selectedTemplate === "engineering"
  ? engineeringDemoForm
  : defaultDemoForm;
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      {/* TOP BAR */}
      <header
        style={{
          height: "70px",
          background: "#18181b",
          color: "white",
          display: "grid",
          gridTemplateColumns: "180px 1fr 320px",
          alignItems: "center",
          padding: "0 18px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <button
          style={{
            width: "90px",
            height: "44px",
            background: "transparent",
            color: "white",
            border: "1px solid #3f3f46",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ← CV:n
        </button>

        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          CV utan titel ☁
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <button style={topIconButton}>↶</button>
          <button style={topIconButton}>↷</button>
          <button style={topIconButton}>SV</button>
          <button
  onClick={() => window.print()}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 16px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Ladda ned
</button>
        </div>
      </header>

      {/* WORKSPACE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "760px minmax(640px, 1fr) 230px",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {/* LEFT EDITOR */}
        <section
          style={{
            background: "white",
            borderRight: "1px solid #e5e7eb",
            overflowY: "auto",
            maxHeight: "calc(100vh - 70px)",
          }}
        >
          <div
            style={{
              width: "680px",
              margin: "0 auto",
              padding: "28px 0 50px",
            }}
          >
            {/* Upload buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "34px",
              }}
            >
              <label style={uploadButtonStyle}>
  <span style={{ fontSize: "22px" }}>⇧</span>
  <span>Ladda upp befintligt CV</span>
  <input
    type="file"
    accept=".pdf,.doc,.docx,.txt"
    onChange={handleCvUpload}
    style={{ display: "none" }}
  />

</label>

<button
  type="button"
  style={uploadButtonStyle}
  onClick={() => {
    const url = prompt("Klistra in din LinkedIn-profillänk:");
    if (url) {
      updateField("linkedinImportUrl", url);
      updateField("linkedin", url);
    }
  }}
>
  <span style={{ fontSize: "24px", fontWeight: "bold" }}>in</span>
  <span>Importera LinkedIn-profil</span>
</button>
{form.uploadedCvName && (
  <p style={{ marginTop: "10px", color: "#4b5563", fontSize: "13px" }}>
    Uppladdat CV: {form.uploadedCvName}
  </p>
)}

{form.linkedinImportUrl && (
  <p style={{ marginTop: "6px", color: "#4b5563", fontSize: "13px" }}>
    LinkedIn importerad: {form.linkedinImportUrl}
  </p>
)}
            </div>

            {/* Personuppgifter */}
            <div style={sectionTitleRow}>
              <h2 style={mainSectionTitle}>Personuppgifter</h2>

              <div style={{ display: "flex", gap: "8px" }}>
                <button style={smallSquareButton}>⋮</button>
                <button style={smallSquareButton}>⌃</button>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr 1fr",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              <div>
                <Label>Foto</Label>
               <label
  style={{
    height: "130px",
    background: "#f3f4f6",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    fontSize: "28px",
    cursor: "pointer",
    overflow: "hidden",
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
    "📷"
  )}

  <input
    type="file"
    accept="image/*"
    onChange={handlePhotoUpload}
    style={{ display: "none" }}
  />
</label>
              </div>

              <div>
                <Label>Förnamn</Label>
                <Input
                  value={form.firstName}
                  onChange={(value) => updateField("firstName", value)}
                />
              </div>

              <div>
                <Label>Efternamn</Label>
                <Input
                  value={form.lastName}
                  onChange={(value) => updateField("lastName", value)}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 160px",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <div>
                <Label>Önskad tjänst</Label>
                <Input
                  value={form.role}
                  onChange={(value) => updateField("role", value)}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: "8px",
                  paddingBottom: "10px",
                  fontSize: "13px",
                  color: "#374151",
                }}
              >
                <span
                  style={{
                    width: "34px",
                    height: "18px",
                    borderRadius: "999px",
                    background: "#9ca3af",
                    display: "inline-block",
                    position: "relative",
                  }}
                />
                Använd som rubrik
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <div>
                <Label>E-postadress</Label>
                <Input
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                />
              </div>

              <div>
                <Label>Telefonnummer</Label>
                <Input
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                />
              </div>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Label>Adress</Label>
              <Input
                value={form.address}
                onChange={(value) => updateField("address", value)}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <div>
                <Label>Postnummer</Label>
                <Input
                  value={form.postalCode}
                  onChange={(value) => updateField("postalCode", value)}
                />
              </div>

              <div>
                <Label>Ort</Label>
                <Input
                  value={form.city}
                  onChange={(value) => updateField("city", value)}
                />
              </div>
            </div>

            {showFields.birthDate && (
              <ExtraInput
                label="Födelsedatum"
                value={form.birthDate}
                onChange={(value) => updateField("birthDate", value)}
              />
            )}

            {showFields.birthPlace && (
              <ExtraInput
                label="Födelseort"
                value={form.birthPlace}
                onChange={(value) => updateField("birthPlace", value)}
              />
            )}

            {showFields.drivingLicense && (
              <ExtraInput
                label="Körkort"
                value={form.drivingLicense}
                onChange={(value) => updateField("drivingLicense", value)}
              />
            )}

            {showFields.gender && (
              <ExtraInput
                label="Kön"
                value={form.gender}
                onChange={(value) => updateField("gender", value)}
              />
            )}

            {showFields.nationality && (
              <ExtraInput
                label="Nationalitet"
                value={form.nationality}
                onChange={(value) => updateField("nationality", value)}
              />
            )}

            {showFields.civilStatus && (
              <ExtraInput
                label="Civilstånd"
                value={form.civilStatus}
                onChange={(value) => updateField("civilStatus", value)}
              />
            )}

            {showFields.website && (
              <ExtraInput
                label="Webbplats"
                value={form.website}
                onChange={(value) => updateField("website", value)}
              />
            )}

            {showFields.linkedin && (
              <ExtraInput
                label="LinkedIn"
                value={form.linkedin}
                onChange={(value) => updateField("linkedin", value)}
              />
            )}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "28px",
              }}
            >
              <SmallButton onClick={() => toggleField("birthDate")}>
                + Födelsedatum
              </SmallButton>
              <SmallButton onClick={() => toggleField("birthPlace")}>
                + Födelseort
              </SmallButton>
              <SmallButton onClick={() => toggleField("drivingLicense")}>
                + Körkort
              </SmallButton>
              <SmallButton onClick={() => toggleField("gender")}>
                + Kön
              </SmallButton>
              <SmallButton onClick={() => toggleField("nationality")}>
                + Nationalitet
              </SmallButton>
              <SmallButton onClick={() => toggleField("civilStatus")}>
                + Civilstånd
              </SmallButton>
              <SmallButton onClick={() => toggleField("website")}>
                + Webbplats
              </SmallButton>
              <SmallButton onClick={() => toggleField("linkedin")}>
                + LinkedIn
              </SmallButton>
              <SmallButton>+ Anpassat fält</SmallButton>
            </div>

            <div style={{ marginTop: "34px" }}>
              <AccordionSection
                title="Profil"
                open={openSections.profile}
                onToggle={() => toggleSection("profile")}
              >
                <Textarea
                  value={form.profile}
                  placeholder="Skriv en kort professionell profil..."
                  onChange={(value) => updateField("profile", value)}
                />
              </AccordionSection>

              <AccordionSection
                title="Utbildning"
                open={openSections.education}
                onToggle={() => toggleSection("education")}
              >
                <Textarea
                  value={form.education}
                  placeholder="Skriv din utbildning..."
                  onChange={(value) => updateField("education", value)}
                />
              </AccordionSection>

              <AccordionSection
                title="Arbetslivserfarenhet"
                open={openSections.experience}
                onToggle={() => toggleSection("experience")}
              >
                <Textarea
                  value={form.experience}
                  placeholder="Skriv din arbetslivserfarenhet..."
                  onChange={(value) => updateField("experience", value)}
                />
              </AccordionSection>

              <AccordionSection
                title="Färdigheter"
                open={openSections.skills}
                onToggle={() => toggleSection("skills")}
              >
                <Textarea
                  value={form.skills}
                  placeholder="Exempel: Kommunikation, service, ansvar..."
                  onChange={(value) => updateField("skills", value)}
                />
              </AccordionSection>

              <AccordionSection
                title="Språk"
                open={openSections.languages}
                onToggle={() => toggleSection("languages")}
              >
                <Textarea
                  value={form.languages}
                  placeholder="Exempel: Svenska, Engelska, Dari..."
                  onChange={(value) => updateField("languages", value)}
                />
              </AccordionSection>

              <AccordionSection
                title="Hobbys och intressen"
                open={openSections.hobbies}
                onToggle={() => toggleSection("hobbies")}
              >
                <Textarea
                  value={form.hobbies}
                  placeholder="Skriv hobbys och intressen..."
                  onChange={(value) => updateField("hobbies", value)}
                />
              </AccordionSection>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "28px",
              }}
            >
              <SmallButton onClick={() => toggleSection("profile")}>
                + Profil
              </SmallButton>
              <SmallButton onClick={() => alert("Kurser kommer i nästa steg")}>
  + Kurser
</SmallButton>

<SmallButton onClick={() => alert("Praktik kommer i nästa steg")}>
  + Praktik
</SmallButton>

<SmallButton onClick={() => alert("Fritidsaktiviteter kommer i nästa steg")}>
  + Fritidsaktiviteter
</SmallButton>

<SmallButton onClick={() => alert("Referenser kommer i nästa steg")}>
  + Referenser
</SmallButton>

<SmallButton onClick={() => alert("Egenskaper kommer i nästa steg")}>
  + Egenskaper
</SmallButton>

<SmallButton onClick={() => alert("Certifikat kommer i nästa steg")}>
  + Certifikat
</SmallButton>

<SmallButton onClick={() => alert("Prestationer kommer i nästa steg")}>
  + Prestationer
</SmallButton>

<SmallButton onClick={() => alert("Signatur kommer i nästa steg")}>
  + Signatur
</SmallButton>

<SmallButton onClick={() => alert("Sidfot kommer i nästa steg")}>
  + Sidfot
</SmallButton>
            </div>

           <button
  onClick={handleGenerateWithAI}
  disabled={isGenerating}
  style={{
    width: "100%",
    marginTop: "28px",
    background: "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontWeight: "bold",
    cursor: isGenerating ? "not-allowed" : "pointer",
    opacity: isGenerating ? 0.7 : 1,
  }}
>
  {isGenerating ? "Skapar CV..." : "Skapa CV med AI"}
</button>
          </div>
        </section>

        {/* PREVIEW */}
        <section
          style={{
            background: "#eef1f5",
            padding: "34px 28px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 70px)",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "22px" }}>
            <TemplateButton
              active={selectedTemplate === "modern"}
              onClick={() => setSelectedTemplate("modern")}
            >
              Modern
            </TemplateButton>

            <TemplateButton
              active={selectedTemplate === "classic"}
              onClick={() => setSelectedTemplate("classic")}
            >
              Classic
            </TemplateButton>

            <TemplateButton
              active={selectedTemplate === "minimal"}
              onClick={() => setSelectedTemplate("minimal")}
            >
              Minimal
            </TemplateButton>
            <TemplateButton
  active={selectedTemplate === "engineering"}
  onClick={() => setSelectedTemplate("engineering")}
>
  Engineering
</TemplateButton>
          </div>

          <div
            id="cv-preview"
            className="cv-print-area"
            style={{
              width: "794px",
minHeight: "1123px",
              margin: "0 auto",
              background: "white",
              boxShadow: "0 10px 35px rgba(0,0,0,0.16)",
            }}
          >
            {selectedTemplate === "modern" && (
  <ModernCV form={previewForm} cvLanguage={cvLanguage} />
)}

{selectedTemplate === "classic" && (
  <ClassicCV form={previewForm} cvLanguage={cvLanguage} />
)}

{selectedTemplate === "minimal" && (
  <MinimalCV form={previewForm} cvLanguage={cvLanguage} />
)}
{selectedTemplate === "engineering" && (
  <EngineeringCV form={previewForm} cvLanguage={cvLanguage} />
)}
          </div>
        </section>

        {/* RIGHT SETTINGS */}
        <aside
          style={{
            background: "white",
            borderLeft: "1px solid #e5e7eb",
            padding: "22px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 70px)",
          }}
        >
          <SettingsGroup title="DATUMFORMAT">
            <SettingOption active>maj 2026</SettingOption>
            <SettingOption>2026-05</SettingOption>
          </SettingsGroup>

          <SettingsGroup title="SIDSTORLEK">
            <SettingOption active>A4</SettingOption>
            <SettingOption>Brev</SettingOption>
          </SettingsGroup>

    <SettingsGroup title="SPRÅK">
  {[
    "Svenska",
    "Engelska",
    "Tyska",
    "Franska",
    "Spanska",
    "Arabiska",
    "Persiska/Dari",
  ].map((language) => (
    <SettingOption
      key={language}
      active={cvLanguage === language}
      onClick={() => setCvLanguage(language)}
    >
      {language}
    </SettingOption>
  ))}
</SettingsGroup>
        </aside>
      </div>
    </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label style={labelStyle}>{children}</label>;
}

function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
    />
  );
}

function Textarea({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={textareaStyle}
    />
  );
}

function ExtraInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div style={{ marginTop: "16px" }}>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} />
    </div>
  );
}

function AccordionSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "22px 0",
      }}
    >
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#9ca3af",
            fontSize: "22px",
            fontWeight: 800,
          }}
        >
          {title}
        </h3>

        <button style={smallSquareButton}>{open ? "−" : "+"}</button>
      </div>

      {open && <div style={{ marginTop: "18px" }}>{children}</div>}
    </div>
  );
}

function SmallButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "#ffffff",
        color: "#111827",
        border: "1px solid #9ca3af",
        borderRadius: "5px",
        padding: "8px 12px",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "16px",
        minWidth: "fit-content",
        height: "38px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function TemplateButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        background: active ? "#2563eb" : "#cbd5e1",
        color: active ? "white" : "#111827",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function SettingsGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "20px",
        marginBottom: "20px",
      }}
    >
      <h4
        style={{
          margin: "0 0 14px",
          fontSize: "13px",
          color: "#374151",
        }}
      >
        {title}
      </h4>

      <div style={{ display: "grid", gap: "12px" }}>{children}</div>
    </div>
  );
}

function SettingOption({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
    onClick={onClick}
      style={{
        textAlign: "left",
        background: "transparent",
        border: "none",
        color: active ? "#111827" : "#6b7280",
        fontWeight: active ? "bold" : "normal",
        cursor: "pointer",
        padding: "2px 0",
      }}
    >
      {active ? "✓ " : ""}
      {children}
    </button>
  );
}

const topIconButton: React.CSSProperties = {
  background: "#27272a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "9px 12px",
  cursor: "pointer",
  fontWeight: "bold",
};

const uploadButtonStyle: React.CSSProperties = {
  height: "82px",
  background: "white",
  border: "none",
  borderRight: "1px solid #e5e7eb",
  cursor: "pointer",
  color: "#4b5563",
  fontSize: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "8px",
  color: "#374151",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "48px",
  border: "none",
  outline: "none",
  background: "#f3f4f6",
  borderRadius: "4px",
  padding: "0 12px",
  boxSizing: "border-box",
  fontSize: "15px",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "110px",
  border: "none",
  outline: "none",
  background: "#f3f4f6",
  borderRadius: "4px",
  padding: "14px",
  boxSizing: "border-box",
  fontSize: "15px",
  fontFamily: "inherit",
  resize: "vertical",
};

const sectionTitleRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const mainSectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: "22px",
  fontWeight: 800,
};

const smallSquareButton: React.CSSProperties = {
  width: "34px",
  height: "34px",
  border: "1px solid #9ca3af",
  background: "white",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "20px",
};