import type { Metadata } from "next";
import { Share_Tech_Mono, Playfair_Display, Space_Mono } from "next/font/google";

import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tech",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-vintage",
});

export const metadata: Metadata = {
  title: "You're invited 🎉",
  description: "Cumpleaños de Saya — 15 de mayo",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "You're invited 🎉",
    description: "Cumpleaños de Saya — 15 de mayo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${shareTechMono.variable} ${playfairDisplay.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}