import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { CommandUI } from "@/components/shared/CommandUI";
import { SystemOverlay } from "@/components/shared/SystemOverlay";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Integral Group | Engineering Multi-Sector Execution",
  description: "A modular multi-sector ecosystem operating across technology, AI, robotics, infrastructure, and defense-oriented innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <body className="bg-black text-white selection:bg-cyan-500/30 font-sans antialiased" suppressHydrationWarning>
        <AmbientBackground />
        <CommandUI />
        <SystemOverlay />
        {children}

      </body>
    </html>
  );
}
