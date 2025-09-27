import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from 'next/font/google'
import "./globals.css";

import { Navigation } from "@/components/Navigation";
import { getDictionary } from "../i18n/dictionary";

interface SidebarProps {
  h2: string;
  h3: string;
  home: string;
  metodology: string;
  history: string;
  cumbia: string;
  currulao: string;
  pasillo: string;
  joropo: string;
  work: string;
  galery: string;
  resume: string;
  resources: string;
  quote: string;
  footer: string;
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "El Trombón en el Folclor Colombiano",
    template: "%s | El Trombón en el Folclor Colombiano",
  },
  description:
    "Destacar el aporte al repertorio del folclor colombiano - Un proyecto sobre la riqueza del trombón en los ritmos tradicionales",
  authors: [{ name: "Proyecto de Grado Musical - Web por Matías Ibarra" }],
  openGraph: {
    title: "El Trombón en el Folclor Colombiano",
    description: "Web por Matías Ibarra",
    type: "website",
    url: "/",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "es" | "en" }>;
}>) {
  const { locale: lang } = await params;
  const dictionary = await getDictionary(lang, 'sidebar') as SidebarProps;
  return (
    <html lang={lang}>
      <body className={`antialiased ${playfair.className} ${openSans.className}`}>
        <Navigation dict={dictionary} />
        {children}
      </body>
    </html>
  );
}
