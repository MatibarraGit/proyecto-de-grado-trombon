import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

import { Playfair_Display, Open_Sans } from 'next/font/google'

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
  title: "El Trombón en el Folclor Colombiano",
  description: "Destacar el aporte al repertorio del folclor colombiano - Un proyecto sobre la riqueza del trombón en los ritmos tradicionales",
  authors: [{ name: "Proyecto de Grado Musical - Web por Matías Ibarra" }],
  openGraph: {
    title: "El Trombón en el Folclor Colombiano",
    description: "Web por Matías Ibarra",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${playfair.className} ${openSans.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
