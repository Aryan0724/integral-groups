"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const AmbientBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth springs for high-fidelity parallax
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mousePos.x, springConfig);
  const smoothY = useSpring(mousePos.y, springConfig);

  // Parallax transformations - explicitly mapped
  const gridX = useTransform(smoothX, [0, 1], [20, -20]);
  const gridYScroll = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const orbitalRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const orbitalScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Network paths - generated once for stability
  const paths = useMemo(() => [
    "M 100 200 C 400 300, 500 100, 800 250",
    "M 200 800 C 500 600, 700 900, 1100 750",
    "M 1200 100 C 1400 400, 1100 600, 900 800",
    "M 0 500 L 1600 500"
  ], []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      {/* 1. BASE DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.02)_0%,_transparent_80%)]" />

      {/* 2. DYNAMIC GRID SYSTEM (Parallax Verified) */}
      <motion.div 
        style={{ 
          x: gridX, 
          y: gridYScroll,
          opacity: 0.07
        }}
        className="absolute inset-[-20%] bg-grid-small"
      />

      {/* 3. ORBITAL BLUEPRINTS (Depth Perception) */}
      <motion.div 
        style={{ scale: orbitalScale, rotate: orbitalRotate }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            style={{ 
              x: useTransform(smoothX, [0, 1], [30, -30]), 
              y: useTransform(smoothY, [0, 1], [30, -30]) 
            }}
            className="absolute w-[1000px] h-[1000px] border border-white/[0.02] rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
            style={{ 
              x: useTransform(smoothX, [0, 1], [-20, 20]), 
              y: useTransform(smoothY, [0, 1], [-20, 20]) 
            }}
            className="absolute w-[1400px] h-[1400px] border border-dashed border-white/[0.01] rounded-full"
          />
        </div>
      </motion.div>

      {/* 4. SIGNAL FLOW NETWORK (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.1]">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {paths.map((d, i) => (
          <React.Fragment key={i}>
            {/* The static path */}
            <path d={d} stroke="white" strokeWidth="0.5" fill="none" opacity="0.1" />
            
            {/* The signal pulse */}
            <motion.path 
              d={d} 
              stroke="url(#flowGrad)" 
              strokeWidth="1.5" 
              fill="none"
              animate={{ strokeDashoffset: [2000, 0] }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="100, 900"
            />
          </React.Fragment>
        ))}

        {/* Tactical Nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle 
            key={i}
            cx={`${15 + (i * 7)%85}%`}
            cy={`${15 + (i * 13)%85}%`}
            r="1.2"
            fill="rgba(6, 182, 212, 0.4)"
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1]
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* 5. VOLUMETRIC SCAN SWEEP (Atmosphere) */}
      <motion.div 
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[400px] bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent pointer-events-none"
      />

      {/* 6. CURSOR SIGNAL GLOW */}
      <motion.div 
        style={{ 
          x: useTransform(smoothX, [0, 1], ["-10%", "110%"]), 
          y: useTransform(smoothY, [0, 1], ["-10%", "110%"]),
        }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.04)_0%,_transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* 7. SYSTEM SCANLINE (Slow) */}
      <motion.div 
        animate={{ left: ["-100%", "200%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/10 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
      />

      {/* 8. ATMOSPHERIC NOISE */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
