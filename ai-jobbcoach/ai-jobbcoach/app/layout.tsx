import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Jobbcoach Sverige – Skapa CV med AI gratis",
  description:
    "Skapa ett professionellt CV med AI på några minuter. Välj moderna CV-mallar, fyll i dina uppgifter och ladda ner ett ATS-vänligt CV gratis.",
  keywords: [
    "CV med AI",
    "skapa CV med AI",
    "AI CV generator",
    "CV generator gratis",
    "skapa CV gratis",
    "CV mallar",
    "ATS-vänligt CV",
    "personligt brev med AI",
  ],
  openGraph: {
    title: "Skapa CV med AI gratis | AI Jobbcoach",
    description:
      "Bygg ett professionellt CV med AI, välj mall och ladda ner som PDF.",
    url: "https://ai-jobbcoach.vercel.app",
    siteName: "AI Jobbcoach",
    locale: "sv_SE",
    type: "website",
  },
  verification: {
    google: "naxgnR18oSA67HKHdIhY_x_3WQuAGduqXGHhQOB5mw",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}
