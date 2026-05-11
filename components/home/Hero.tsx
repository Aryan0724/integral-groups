"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../shared/Logo";


export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [initStage, setInitStage] = useState(0);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.02]);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    setMounted(true);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    const timer1 = setTimeout(() => setInitStage(1), 500); // Grid appears
    const timer2 = setTimeout(() => setInitStage(2), 1500); // Logo/Text reveal
    const timer3 = setTimeout(() => setInitStage(3), 2500); // Interface lines
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', checkMobile);
    };
  }, [checkMobile]);

  if (!mounted) return <section className="h-screen bg-black" />;

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Layer: Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: initStage >= 1 ? (isMobile ? 0.15 : 0.3) : 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-grid mask-radial pointer-events-none"
      />
      
      {/* Background Layer: Small Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: initStage >= 1 ? (isMobile ? 0.25 : 0.5) : 0 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-grid-small mask-radial pointer-events-none"
      />

      {/* Cinematic Background Elements */}
      <motion.div 
        style={{ y: isMobile ? 0 : y1, opacity, scale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Subtle scanning line - Simplified on Mobile */}
        {!isMobile && (
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
        )}
        
        {/* Abstract orbital lines - Hidden/Scaled on Mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[1200px] md:h-[1200px] border border-white/5 rounded-full" />
      </motion.div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* System Status Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: initStage >= 2 ? 1 : 0, y: initStage >= 2 ? 0 : 20 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/40"
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
            className="text-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Engineering <br />
            <span className="text-white/40">The Systems Behind</span> <br />
            <span className="relative inline-block">
              The Future
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: initStage >= 3 ? "100%" : 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-[1px] md:h-[2px] bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: initStage >= 2 ? 0.6 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-xl text-white/60 mb-10 md:mb-12 max-w-xl mx-auto font-light leading-relaxed tracking-wide px-4"
          >
            Integral Group is a modular ecosystem building digital infrastructure, media systems, innovation platforms, and scalable execution architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: initStage >= 3 ? 1 : 0, y: initStage >= 3 ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
          >
            <button className="group relative px-8 py-3.5 bg-white text-black font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Explore Ecosystem <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-3.5 border border-white/10 hover:border-white/30 text-white font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto">
              View Departments
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
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
