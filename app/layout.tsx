import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanaa-el-aydoud.vercel.app"),
  title: "Maître Sanaa El Aydoud | Avocate au Barreau de Casablanca",
  description:
    "Cabinet d'Avocat Maître Sanaa El Aydoud à Casablanca. Consultations juridiques, étude et suivi des dossiers, représentation devant toutes les juridictions marocaines. Contentieux civil, commercial, droit des sociétés, famille, pénal et fiscal.",
  keywords: [
    "Sanaa El Aydoud",
    "Avocat Casablanca",
    "Barreau de Casablanca",
    "Cabinet avocat Maroc",
    "محامية بالدار البيضاء",
    "هيئة المحامين بالدار البيضاء",
    "استشارة قانونية المغرب",
    "Droit des affaires Maroc",
    "Droit civil et commercial",
    "Droit de la famille Maroc",
    "Contentieux fiscal Casablanca",
  ],
  authors: [{ name: "Maître Sanaa El Aydoud" }],
  creator: "Cabinet Sanaa El Aydoud",
  openGraph: {
    title: "Maître Sanaa El Aydoud | Avocate au Barreau de Casablanca",
    description:
      "Cabinet d'avocat au Barreau de Casablanca. Rigueur, discrétion et excellence juridique au service de vos droits et de votre entreprise.",
    type: "website",
    locale: "fr_MA",
    images: [
      {
        url: "/images/sanaa-el-aydoud.jpg",
        width: 1200,
        height: 1600,
        alt: "Maître Sanaa El Aydoud - Avocate au Barreau de Casablanca",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${jakartaSans.variable} ${playfairDisplay.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FCFBF9] text-[#111827] selection:bg-[#9A7B46]/20 selection:text-[#0E1726]">
        {children}
      </body>
    </html>
  );
}
