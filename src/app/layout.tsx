import type { Metadata } from "next";
import { Geist, Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-antiqua",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fermi - The programmable orderbook",
  description: "Fermi is the first DEX that Locks No Capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${inknutAntiqua.variable}`}>
        {children}
      </body>
    </html>
  );
}
