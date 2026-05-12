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
  metadataBase: new URL('https://integralgroups.in'),
  title: {
    default: "Integral Group | AI Infrastructure & Intelligent Systems",
    template: "%s | Integral Group"
  },
  description: "Integral Group builds AI-driven infrastructure, intelligent automation systems, research platforms, media ecosystems, and future-ready digital technologies.",
  keywords: ["AI infrastructure", "automation systems", "intelligent workflows", "digital ecosystems", "systems engineering", "future technologies", "AI workflows", "automation infrastructure"],
  authors: [{ name: "Integral Group" }],
  creator: "Integral Group",
  publisher: "Integral Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Integral Group | AI Infrastructure & Intelligent Systems",
    description: "Integral Group builds AI-driven infrastructure, intelligent automation systems, research platforms, media ecosystems, and future-ready digital technologies.",
    url: 'https://integralgroups.in',
    siteName: 'Integral Group',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Integral Group Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integral Group | AI Infrastructure & Intelligent Systems',
    description: 'Integral Group builds AI-driven infrastructure, intelligent automation systems, and future-ready digital technologies.',
    creator: '@integralgroups',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Integral Group",
              "url": "https://integralgroups.in",
              "logo": "https://integralgroups.in/logo.png",
              "sameAs": [
                "https://twitter.com/integralgroups",
                "https://github.com/integral"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Integral Group",
              "url": "https://integralgroups.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://integralgroups.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>


  );
}


