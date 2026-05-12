"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Departments", href: "/departments" },
  { name: "Work", href: "/work" },
  { name: "Labs", href: "/labs" },
  { name: "Research", href: "/research" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // We want a consistent floating capsule that stays visible throughout the entire site.
  // Dark mode by default for a premium industrial feel, matching Palantir's dark-on-video and dark-on-white high contrast.
  return (
    <>
      {/* ── FLOATING CAPSULE NAV ── */}
      <div className="fixed top-6 left-0 right-0 z-[9999] flex justify-center px-6 pointer-events-none">
        <nav
          className={cn(
            "w-full max-w-[1200px] h-[64px] flex items-center justify-between px-8 rounded-2xl border bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white pointer-events-auto"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Logo isWhite={true} size="sm" />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-0">
            {/* About Us */}
            <Link
              href="/about"
              className="hidden lg:flex items-center px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              About Us
            </Link>

            {/* Collaborate */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              Collaborate
            </Link>

            {/* Join Us */}
            <Link
              href="/about"
              className="hidden sm:flex items-center px-10 h-10 rounded-xl bg-white text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all shadow-xl"
            >
              Join Us
            </Link>

            {/* Icons */}
            <div className="flex items-center ml-6 divide-x divide-white/10 h-10">
              <button
                className="px-4 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="px-4 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Full-screen Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl flex flex-col pt-40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="container mx-auto px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-12">
               <button onClick={() => setMenuOpen(false)} className="text-white/40 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest">
                 Close <X className="w-5 h-5" />
               </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase text-white/10 hover:text-white transition-colors leading-none py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
