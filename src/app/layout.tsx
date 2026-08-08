import type { Metadata, Viewport } from "next";
import { Outfit, Manrope, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--fonte-titulo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fonte-corpo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--fonte-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COAPI — Cooperativa Agropecuária de Piumhi",
  description: site.descricao,
  keywords: [
    "COAPI",
    "cooperativa agropecuária",
    "Piumhi",
    "ração",
    "produtos veterinários",
    "sal mineral",
    "silos",
    "Minas Gerais",
  ],
  openGraph: {
    title: "COAPI — Cooperativa Agropecuária de Piumhi",
    description: site.descricao,
    locale: "pt_BR",
    type: "website",
    siteName: "COAPI",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2A1E",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${manrope.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
