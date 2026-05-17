import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skapa CV gratis med AI | AI Jobbcoach",
  description:
    "Skapa ett professionellt CV gratis online med AI. Välj moderna CV-mallar, fyll i dina uppgifter och ladda ner ditt CV som PDF.",

  keywords: [
    "skapa CV",
    "CV gratis",
    "CV mall",
    "CV generator",
    "AI CV",
    "personligt brev",
    "CV online",
    "CV mall gratis",
    "skriva CV",
    "skapa personligt brev",
  ],

  openGraph: {
    title: "Skapa CV gratis med AI | AI Jobbcoach",
    description:
      "Bygg ett professionellt CV med AI, välj mall och ladda ner som PDF.",
    url: "https://ai-jobbcoach.vercel.app",
    siteName: "AI Jobbcoach",
    locale: "sv_SE",
    type: "website",
  },

  verification: {
    google: "naxgNr8lBoSA67HkMdIhY_x_3WQUaGduqXGhHQOB5mw",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
