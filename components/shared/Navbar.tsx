"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";


const navLinks = [
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "About", href: "/about" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Vision", href: "/vision" },
  { name: "Intelligence", href: "/intelligence" },
  { name: "Design System", href: "/design-system" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
      {/* Background layer to handle opacity without transitioning blur filters */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/90 backdrop-blur-md border-b border-white/10 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )} 
      />
      
      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        <Link href="/" className="relative z-10">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 relative group py-2",
                  isActive ? "text-cyan-500" : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[1px] transition-all duration-300 bg-cyan-500",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            Collaborate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-display font-light tracking-widest hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 border border-white/20 text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              Collaborate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
