"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export const AmbientBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mouseXRaw = useMotionValue(0.5);
  const mouseYRaw = useMotionValue(0.5);
  const { scrollYProgress } = useScroll();

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(mobile);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        mouseXRaw.set(e.clientX / window.innerWidth);
        mouseYRaw.set(e.clientY / window.innerHeight);
      }
    },
    [mouseXRaw, mouseYRaw]
  );

  useEffect(() => {
    setMounted(true);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [checkMobile, handleMouseMove]);

  const springConfig = { damping: 50, stiffness: 80, mass: 1.5 };
  const smoothX = useSpring(mouseXRaw, springConfig);
  const smoothY = useSpring(mouseYRaw, springConfig);

  // All transforms declared unconditionally (Rules of Hooks)
  const gridX = useTransform(smoothX, [0, 1], [30, -30]);
  const gridYScroll = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const orbitalRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cursorGlowX = useTransform(smoothX, [0, 1], ["-15%", "115%"]);
  const cursorGlowY = useTransform(smoothY, [0, 1], ["-15%", "115%"]);
  const ring1X = useTransform(smoothX, [0, 1], [50, -50]);
  const ring1Y = useTransform(smoothY, [0, 1], [50, -50]);
  const ring2X = useTransform(smoothX, [0, 1], [-40, 40]);
  const ring2Y = useTransform(smoothY, [0, 1], [-40, 40]);

  const paths = useMemo(
    () => [
      "M 100 200 C 400 300, 500 100, 800 250",
      "M 200 800 C 500 600, 700 900, 1100 750",
      "M 1200 100 C 1400 400, 1100 600, 900 800",
      "M 0 500 L 1600 500",
    ],
    []
  );

  // Server + pre-mount: render opaque black to prevent flash
  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-black" />;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      {/* 1. BASE DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.03)_0%,_transparent_85%)]" />

      {/* 2. DYNAMIC GRID */}
      <motion.div
        style={{
          x: gridX,
          y: isMobile ? 0 : gridYScroll,
          opacity: isMobile ? 0.04 : 0.08,
        }}
        className="absolute inset-[-25%] bg-grid-small"
      />

      {/* 3. ORBITAL RINGS — desktop only */}
      {!isMobile && (
        <motion.div style={{ rotate: orbitalRotate }} className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
              style={{ x: ring1X, y: ring1Y }}
              className="absolute w-[1200px] h-[1200px] border border-white/[0.02] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
              style={{ x: ring2X, y: ring2Y }}
              className="absolute w-[1600px] h-[1600px] border border-dashed border-white/[0.01] rounded-full"
            />
          </div>
        </motion.div>
      )}

      {/* 4. SIGNAL FLOW NETWORK */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <React.Fragment key={i}>
            <path d={d} stroke="white" strokeWidth="0.5" fill="none" opacity="0.06" />
            {!isMobile && (
              <motion.path
                d={d}
                stroke="url(#flowGrad)"
                strokeWidth="1.5"
                fill="none"
                animate={{ strokeDashoffset: [2000, 0] }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                strokeDasharray="100, 900"
              />
            )}
          </React.Fragment>
        ))}
      </svg>

      {/* 5. SCAN SWEEP — desktop only */}
      {!isMobile && (
        <motion.div
          animate={{ top: ["-20%", "120%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent"
        />
      )}

      {/* 6. CURSOR GLOW — desktop only */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorGlowX, y: cursorGlowY }}
          className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.04)_0%,_transparent_70%)] blur-3xl"
        />
      )}

      {/* 7. SCANLINE — desktop only */}
      {!isMobile && (
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/5"
        />
      )}

      {/* 8. NOISE — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </div>
  );
};
