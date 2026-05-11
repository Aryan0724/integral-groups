"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export const FinalCta = () => {
  return (
    <section className="py-48 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/15 via-black to-black" />
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      {/* Corner markers */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/10" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/10" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-white/10" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-white/10" />

      {/* Scanning line */}
      <motion.div 
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-2 text-cyan-500/60 mb-12 font-mono text-[10px] tracking-[0.4em] uppercase">
            <Terminal size={12} />
            <span>PIPELINE_OPEN</span>
            <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-display text-5xl md:text-8xl lg:text-[110px] font-bold tracking-tighter uppercase text-white leading-[0.85] mb-10">
            Join The<br />
            <span className="text-white/40">Ecosystem</span>
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-16 font-light max-w-xl mx-auto">
            We are assembling engineers, creators, strategists, and builders focused on long-term infrastructure execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collaborate"
              className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Collaborate <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/ecosystem"
              className="w-full sm:w-auto px-10 py-4 border border-white/10 hover:border-white/30 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 text-center"
            >
              Explore Ecosystem
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
