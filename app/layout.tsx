import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./reset.css";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanaka Hirakawa Portfolio",
  description: "ポートフォリオサイト",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          defer
        ></script>
      </head>
      <body className={notoSansJP.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
