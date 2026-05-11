import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CommandUI } from "@/components/shared/CommandUI";
import { SystemOverlay } from "@/components/shared/SystemOverlay";
import { CustomCursor } from "@/components/shared/CustomCursor";
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

export const metadata: Metadata = {
  title: "Integral Group | Engineering Multi-Sector Execution",
  description: "A modular multi-sector ecosystem operating across technology, AI, robotics, infrastructure, and defense-oriented innovation.",
  appleWebApp: {
    title: "Integral Group",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <body className="bg-black text-white selection:bg-cyan-500/30 font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <CustomCursor />
        <AmbientBackground />
        <CommandUI />
        <SystemOverlay />
        {children}
      </body>
    </html>
  );
}
