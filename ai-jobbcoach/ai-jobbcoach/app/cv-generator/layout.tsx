import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV-generator gratis | Skapa professionellt CV med AI",
  description:
    "Skapa ett professionellt CV gratis online med AI. Välj mellan moderna CV-mallar, fyll i dina uppgifter och ladda ner ditt CV som PDF.",

  keywords: [
    "CV generator",
    "skapa CV",
    "CV gratis",
    "CV mall",
    "CV online",
    "AI CV",
    "ladda ner CV PDF",
    "CV mall gratis",
    "skapa CV med AI",
  ],

  openGraph: {
    title: "CV-generator gratis | AI Jobbcoach",
    description:
      "Välj CV-mall, fyll i dina uppgifter och ladda ner ett professionellt CV som PDF.",
    url: "https://ai-jobbcoach.vercel.app/cv-generator",
    siteName: "AI Jobbcoach",
    locale: "sv_SE",
    type: "website",
  },
};

export default function CVGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}