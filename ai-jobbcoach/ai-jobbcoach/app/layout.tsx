import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Jobbcoach Sverige",
  description: "Skapa CV och personligt brev med AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
