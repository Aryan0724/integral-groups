"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const AmbientBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Smoother springs for premium feel
  const springConfig = { damping: 50, stiffness: 80, mass: 1.5 };
  const smoothX = useSpring(mousePos.x, springConfig);
  const smoothY = useSpring(mousePos.y, springConfig);

  // Parallax transformations
  const gridX = useTransform(smoothX, [0, 1], [30, -30]);
  const gridYScroll = useTransform(scrollYProgress, [0, 1], [0, -250]);
  
  const orbitalRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const paths = useMemo(() => [
    "M 100 200 C 400 300, 500 100, 800 250",
    "M 200 800 C 500 600, 700 900, 1100 750",
    "M 1200 100 C 1400 400, 1100 600, 900 800",
    "M 0 500 L 1600 500"
  ], []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      {/* 1. BASE DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.03)_0%,_transparent_85%)]" />

      {/* 2. DYNAMIC GRID SYSTEM */}
      <motion.div 
        style={{ 
          x: gridX, 
          y: gridYScroll,
          opacity: 0.08
        }}
        className="absolute inset-[-25%] bg-grid-small"
      />

      {/* 3. ORBITAL BLUEPRINTS - Simplified on Mobile */}
      {!isMobile && (
        <motion.div 
          style={{ rotate: orbitalRotate }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
              style={{ 
                x: useTransform(smoothX, [0, 1], [50, -50]), 
                y: useTransform(smoothY, [0, 1], [50, -50]) 
              }}
              className="absolute w-[1200px] h-[1200px] border border-white/[0.02] rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
              style={{ 
                x: useTransform(smoothX, [0, 1], [-40, 40]), 
                y: useTransform(smoothY, [0, 1], [-40, 40]) 
              }}
              className="absolute w-[1600px] h-[1600px] border border-dashed border-white/[0.01] rounded-full"
            />
          </div>
        </motion.div>
      )}

      {/* 4. SIGNAL FLOW NETWORK */}
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
            <path d={d} stroke="white" strokeWidth="0.5" fill="none" opacity="0.05" />
            <motion.path 
              d={d} 
              stroke="url(#flowGrad)" 
              strokeWidth="1.5" 
              fill="none"
              animate={{ strokeDashoffset: [2000, 0] }}
              transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="100, 900"
            />
          </React.Fragment>
        ))}
      </svg>

      {/* 5. VOLUMETRIC SCAN SWEEP */}
      <motion.div 
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent"
      />

      {/* 6. CURSOR SIGNAL GLOW - Hidden on Mobile */}
      {!isMobile && (
        <motion.div 
          style={{ 
            x: useTransform(smoothX, [0, 1], ["-15%", "115%"]), 
            y: useTransform(smoothY, [0, 1], ["-15%", "115%"]),
          }}
          className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_70%)] blur-3xl"
        />
      )}

      {/* 7. SYSTEM SCANLINE */}
      <motion.div 
        animate={{ left: ["-100%", "200%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/5 shadow-[0_0_40px_rgba(6,182,212,0.05)]"
      />

      {/* 8. NOISE OVERLAY - Disabled on mobile for performance */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      )}
    </div>
  );
};

