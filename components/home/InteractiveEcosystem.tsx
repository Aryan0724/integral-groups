"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "../shared/Logo";


const nodes = [
  { 
    id: "labs", 
    label: "Integral Labs", 
    x: 20, 
    y: 30,
    desc: "Engineering digital systems, AI-integrated platforms, and scalable execution infrastructure.",
    color: "cyan",
    status: "active"
  },
  { 
    id: "media", 
    label: "Integral Media", 
    x: 80, 
    y: 30,
    desc: "Media systems focused on storytelling, branding, digital presence, and visual influence.",
    color: "cyan",
    status: "active"
  },
  { 
    id: "products", 
    label: "Dept. of Products & Innovation", 
    x: 50, 
    y: 80,
    desc: "Researching, designing, and developing scalable products, intelligent tools, and experimental systems.",
    color: "cyan",
    status: "active"
  },
  { 
    id: "automation", 
    label: "Automation", 
    x: 15, 
    y: 65,
    desc: "Future Node: Autonomous industrial workflows and robotics coordination systems.",
    color: "gray",
    status: "future"
  },
  { 
    id: "intelligence", 
    label: "Intelligence", 
    x: 85, 
    y: 65,
    desc: "Future Node: Strategic research, technical analysis, and multi-sector intelligence gathering.",
    color: "gray",
    status: "future"
  },
  { 
    id: "defense", 
    label: "Defense", 
    x: 50, 
    y: 15,
    desc: "Future Node: Developing next-generation protective infrastructure and strategic systems.",
    color: "gray",
    status: "future"
  }
];

export const InteractiveEcosystem = () => {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-black" />;

  return (
    <section 
      className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-32 border-t border-white/5"
      ref={containerRef}
    >
      {/* Dynamic Background */}
      <motion.div 
        animate={{
          opacity: activeNode ? 0.3 : 0.1,
          scale: activeNode ? 1.05 : 1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-grid-small pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center justify-between">
        
        {/* Massive Mission Architecture Text Section */}
        <div className="w-full xl:w-1/2 mb-24 xl:mb-0 relative z-20">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-mono">MISSION ARCHITECTURE</span>
          </div>
          <h2 className="text-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-12 text-white">
            Modern systems are fragmented.
          </h2>
          <p className="text-xl md:text-3xl text-white/50 font-light leading-snug max-w-2xl text-balance">
            Integral exists to engineer modular execution infrastructure across technology, media, and future-focused innovation.
          </p>
        </div>

        {/* Main Container for the Map */}
        <div className="relative w-full xl:w-1/2 aspect-square max-w-[600px]">
        
        {/* Orbital Rings - Simplified for Mobile */}
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] md:w-[50%] md:h-[80%] border border-white/5 rounded-[100%]",
          !isMobile && "animate-[spin_60s_linear_infinite]"
        )} />
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[70%] md:h-[110%] border border-white/5 border-dashed rounded-[100%]",
          !isMobile && "animate-[spin_90s_linear_infinite_reverse]"
        )} />

        {/* Connection Lines to Central Node */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {nodes.map((node) => {
            const isHovered = activeNode === node.id || activeNode === "core";
            const isDimmed = activeNode && !isHovered;
            const isFuture = node.status === "future";

            return (
              <motion.line 
                key={`line-${node.id}`}
                x1="50%" 
                y1="50%" 
                x2={`${node.x}%`} 
                y2={`${node.y}%`} 
                stroke={isHovered ? "rgba(6, 182, 212, 0.6)" : isFuture ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.05)"}
                strokeWidth={isHovered ? 2 : 1}
                animate={{
                  opacity: isDimmed ? 0.1 : 1,
                  strokeDasharray: isHovered || isFuture ? "5, 5" : "0, 0"
                }}
                transition={{ duration: 0.5 }}
                className={cn("transition-colors duration-500", !isMobile && isHovered && "animate-[dash_20s_linear_infinite]")}
              />
            );
          })}
        </svg>

        {/* Central Node: INTEGRAL GROUP */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center cursor-crosshair"
          onMouseEnter={() => !isMobile && setActiveNode("core")}
          onMouseLeave={() => !isMobile && setActiveNode(null)}
          onClick={() => isMobile && setActiveNode(activeNode === "core" ? null : "core")}
          animate={{
            scale: activeNode === "core" ? 1.1 : 1,
            opacity: activeNode && activeNode !== "core" ? 0.5 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          <div className={cn(
            "w-24 h-24 md:w-48 md:h-48 rounded-full border bg-black/80 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700 relative",
            activeNode === "core" ? "border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]" : "border-white/20 hover:border-white/50"
          )}>
            <div className="absolute inset-2 border border-white/5 rounded-full" />
            <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mb-2 md:mb-4 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <span className="text-display font-bold text-[8px] md:text-sm tracking-[0.3em] uppercase text-center text-white/90">
              Integral <br /> Group
            </span>
          </div>
        </motion.div>

        {/* Peripheral Nodes */}
        {nodes.map((node) => {
          const isHovered = activeNode === node.id;
          const isDimmed = activeNode && activeNode !== node.id && activeNode !== "core";
          const isFuture = node.status === "future";

          return (
            <motion.div 
              key={node.id}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => !isMobile && setActiveNode(node.id)}
              onMouseLeave={() => !isMobile && setActiveNode(null)}
              onClick={() => isMobile && setActiveNode(activeNode === node.id ? null : node.id)}
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isDimmed ? 0.3 : isFuture ? 0.4 : 1
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative group cursor-crosshair">
                <div className={cn(
                  "w-12 h-12 md:w-20 md:h-20 rounded-full border bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 z-10 relative",
                  isHovered ? "border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]" : 
                  isFuture ? "border-white/5 border-dashed" : "border-white/10"
                )}>
                  <div className={cn(
                    "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500",
                    isHovered ? "bg-cyan-500 scale-150" : 
                    isFuture ? "bg-white/10" : "bg-white/30"
                  )} />
                </div>
                
                {/* Node Label */}
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[8px] md:text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-500 flex flex-col items-center",
                  isHovered ? "text-cyan-500" : "text-white/50"
                )}>
                  <div className="flex flex-col items-center">
                    <span>{node.label}</span>
                    {isFuture && (
                      <span className="text-[6px] md:text-[7px] text-white/20 tracking-[0.2em] mt-1">[ FUTURE EXPANSION ]</span>
                    )}
                  </div>
                  
                  {/* Expanded Description on Hover/Click */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-[7px] md:text-[9px] text-white/60 text-center max-w-[120px] md:max-w-[150px] normal-case tracking-normal leading-relaxed"
                      >
                        {node.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
