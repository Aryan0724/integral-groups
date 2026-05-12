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
    <footer className="bg-white text-black py-24 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Copyright & Logo Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 flex items-center">
              <Logo />
            </Link>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium tracking-tight">© 2026 Integral Group Holdings Inc.</span>
              <span className="text-[12px] text-black/50 uppercase tracking-widest">Sys_v4.2.0</span>
            </div>
          </div>


          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-medium hover:text-primary transition-colors">
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
