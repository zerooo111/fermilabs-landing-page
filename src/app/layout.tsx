import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
