"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  OFFERINGS: [
    { name: "Integral Labs", href: "/labs" },
    { name: "Automation Systems", href: "/systems" },
    { name: "Media Network", href: "/media" },
    { name: "Infrastructure", href: "/systems" },
  ],
  "IMPACT STUDIES": [
    { name: "Ecosystem Architecture", href: "/ecosystem" },
    { name: "Digital Infrastructure", href: "/systems" },
    { name: "Innovation Platforms", href: "/labs" },
    { name: "Execution Frameworks", href: "/journal" },
  ],
  CAPABILITIES: [
    { name: "AI + Automation", href: "/labs" },
    { name: "Systems Engineering", href: "/systems" },
    { name: "Strategic Intelligence", href: "/research" },
    { name: "Scalable Execution", href: "/about" },
  ],
  DOCUMENTS: [
    { name: "Developer Community", href: "https://github.com" },
    { name: "Systems Documentation", href: "/research" },
    { name: "Journal Archive", href: "/journal" },
    { name: "Trust Center", href: "/about" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Copyright & Logo Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-10 flex items-center">
              <Logo isWhite={true} />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold tracking-tight text-white/80">© 2026 Integral Group Holdings Inc.</span>
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-mono">INTEGRAL_SYSTEM_v4.2.0</span>
            </div>
          </div>


          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[12px] font-bold uppercase tracking-widest text-white/40 hover:text-cyan-500 transition-all duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
