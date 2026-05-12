import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono, Geist } from "next/font/google";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Integral Group | Engineering Intelligent Systems",
  description: "Integral Group builds AI-driven infrastructure, intelligent automation systems, digital ecosystems, and future-ready technology platforms.",
  keywords: ["AI automation", "intelligent infrastructure", "systems engineering", "robotics", "future technology"],
  authors: [{ name: "Integral Group" }],
  openGraph: {
    title: "Integral Group | Engineering Intelligent Systems",
    description: "The Operating Interface of Integral Group.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0a",
};

import { Navigation } from "@/components/shared/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${geist.variable}`} suppressHydrationWarning>
      <body className="bg-white text-black font-sans antialiased selection:bg-primary/30" suppressHydrationWarning>
        <div className="scanline-overlay opacity-5" />
        <Navigation />
        <SmoothScroll>
          <main className="relative z-0">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>


  );
}


