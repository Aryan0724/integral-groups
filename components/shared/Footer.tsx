"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";


const GithubIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const timestamp = new Date().toISOString().split('T')[0];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Architecting the multi-sector infrastructure of the next generation. 
              Engineering precision at the intersection of intelligence and industrial scale.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors"><GithubIcon size={18} /></a>
              <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors"><LinkedinIcon size={18} /></a>
              <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-display text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { label: "Integral Labs", href: "/ecosystem/labs" },
                { label: "Integral Media", href: "/ecosystem/media" },
                { label: "Products & Innovation", href: "/ecosystem/products-innovation" },
                { label: "Ecosystem Map", href: "/ecosystem" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center group">
                    <span>{item.label}</span>
                    <ExternalLink size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-display text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8">System</h4>
            <ul className="space-y-4">
              {["Philosophy", "Vision", "Intelligence", "Collaborate", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              © {currentYear} Integral Group. All Rights Reserved.
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 hidden md:block">
              Status: <span className="text-cyan-500/50">Operational</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/10 font-mono">
              Build: v1.0.4-stable
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/10 font-mono">
              TS: {timestamp}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
