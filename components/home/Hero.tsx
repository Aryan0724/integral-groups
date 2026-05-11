"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../shared/Logo";


export const Hero = () => {
  const [initStage, setInitStage] = useState(0);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  useEffect(() => {
    const timer1 = setTimeout(() => setInitStage(1), 500); // Grid appears
    const timer2 = setTimeout(() => setInitStage(2), 1500); // Logo/Text reveal
    const timer3 = setTimeout(() => setInitStage(3), 2500); // Interface lines
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Layer: Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: initStage >= 1 ? 0.3 : 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-grid mask-radial"
      />
      
      {/* Background Layer: Small Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: initStage >= 1 ? 0.5 : 0 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-grid-small mask-radial"
      />

      {/* Cinematic Background Elements */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Subtle scanning line */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        />
        
        {/* Abstract orbital lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full" />
      </motion.div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* System Status Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: initStage >= 2 ? 1 : 0, y: initStage >= 2 ? 0 : 20 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/40"
          >
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
              <span>System Status [ Active ]</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 border-l border-white/10 pl-8">
              <span>Departments [ 03 Online ]</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 border-l border-white/10 pl-8">
              <span>Ecosystem State [ Expanding ]</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: initStage >= 2 ? 1 : 0, y: initStage >= 2 ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Engineering <br />
            <span className="text-white/40">The Systems Behind</span> <br />
            <span className="relative">
              The Future
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: initStage >= 3 ? "100%" : 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 h-[2px] bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: initStage >= 2 ? 0.6 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Integral Group is a modular ecosystem building digital infrastructure, media systems, innovation platforms, and scalable execution architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: initStage >= 3 ? 1 : 0, y: initStage >= 3 ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 w-full md:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Explore Ecosystem <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 border border-white/10 hover:border-white/30 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 w-full md:w-auto">
              View Departments
            </button>

            <button className="px-8 py-4 border border-transparent hover:border-white/10 text-white/60 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 w-full md:w-auto">
              Collaborate
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: initStage >= 3 ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-12 left-6 right-6 h-[1px] bg-white/10 origin-left hidden md:block"
      />
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: initStage >= 3 ? 1 : 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
