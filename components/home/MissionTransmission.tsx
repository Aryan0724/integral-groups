"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const MissionTransmission = () => {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    setMounted(true);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  if (!mounted) return <section className="min-h-screen bg-black" />;

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-32 overflow-hidden border-t border-white/5">
      {/* Background Ambience - Specific to Transmission */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-small opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Transmission Metadata Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16 text-center"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-mono">LIVE TRANSMISSION</span>
            </div>
            <h2 className="text-display text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase">
              Mission Briefing
            </h2>
            <div className="text-cyan-500/60 font-mono text-[9px] uppercase tracking-[0.3em]">
              REF: STRATEGIC_VISION_v2.0 // ORIGIN: INTEGRAL_CORE
            </div>
          </motion.div>

          {/* Cinematic Video Player Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={() => isMobile && setIsHovered(!isHovered)}
            className={cn(
              "relative w-full max-w-6xl aspect-video bg-[#050505] border border-white/10 group overflow-hidden transition-all duration-700",
              isPlaying ? "shadow-[0_0_100px_rgba(0,0,0,1)] z-[46]" : "hover:border-white/20",
              isPlaying && !isMobile && "scale-105"
            )}
          >
            {/* The "Video" Layer (Strategic Placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#080808]">
              {/* Background Tactical Grid */}
              <div className="absolute inset-0 bg-grid-small opacity-20" />
              
              {/* Central Blueprint Animation (placeholder for founder) */}
              <motion.div 
                animate={{ 
                  scale: isMobile ? 1 : [1, 1.05, 1],
                  opacity: isMobile ? 0.3 : [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 md:w-96 md:h-96 border border-cyan-500/10 rounded-full flex items-center justify-center"
              >
                {!isMobile && <div className="absolute inset-0 border border-dashed border-cyan-500/5 rounded-full animate-[spin_60s_linear_infinite]" />}
                <div className="w-32 h-32 md:w-64 md:h-64 border border-cyan-500/20 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,1)]" />
                </div>
              </motion.div>

              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-20 flex flex-col items-center"
                  >
                    <div className="mb-8 flex flex-col items-center">
                      <span className="text-[8px] md:text-[10px] text-cyan-500/40 font-mono tracking-[0.5em] mb-2 uppercase">DATA_STREAM: PENDING</span>
                      <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(true);
                      }}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md hover:border-cyan-500/50 hover:scale-110 transition-all duration-700 group/play"
                    >
                      <Play className="text-white/60 ml-1 fill-white/20 group-hover/play:text-cyan-500 group-hover/play:fill-cyan-500 transition-colors" size={isMobile ? 24 : 32} />
                    </button>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-8 md:mt-12 text-center max-w-lg px-6"
                    >
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-mono">MISSION_MANIFESTO_v1.0</span>
                      </div>
                      <h3 className="text-sm md:text-2xl font-light text-white/80 leading-relaxed tracking-wide text-balance">
                        "Engineering the modular infrastructure required to execute at the speed of the future."
                      </h3>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tactical Overlays */}
            {!isMobile && (
              <div className="absolute inset-0 pointer-events-none z-30">
                {/* CRT Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px] opacity-20" />
                
                {/* Corner Metadata */}
                <div className="absolute top-8 left-8 flex flex-col space-y-1 font-mono text-[8px] text-white/30 uppercase tracking-widest">
                  <span>REC_0922</span>
                  <span>ENC: AES_256</span>
                </div>
                <div className="absolute bottom-8 left-8 flex flex-col space-y-1 font-mono text-[8px] text-white/30 uppercase tracking-widest">
                  <span>COORD: 34.05//-118.24</span>
                  <span>STATUS: STREAMING</span>
                </div>
                
                {/* Tactical Brackets */}
                <div className="absolute inset-4 border-x border-white/5" />
                <div className="absolute inset-y-4 inset-x-12 border-x border-white/5" />
              </div>
            )}

            {/* Player Controls (Visible on Hover or Play) */}
            <AnimatePresence>
              {(isHovered || isPlaying) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex items-center justify-between z-40 bg-gradient-to-t from-black to-transparent"
                >
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }} className="text-white/60 hover:text-white transition-colors">
                      {isPlaying ? <Pause size={isMobile ? 16 : 20} /> : <Play size={isMobile ? 16 : 20} />}
                    </button>
                    <div className="h-1 w-24 md:w-48 bg-white/10 rounded-full overflow-hidden relative">
                      <motion.div 
                        animate={isPlaying ? { width: "100%" } : { width: "0%" }}
                        transition={{ duration: 60, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                      />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-mono text-white/40">01:42 / 03:00</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }} className="text-white/60 hover:text-white transition-colors">
                      {isMuted ? <VolumeX size={isMobile ? 16 : 20} /> : <Volume2 size={isMobile ? 16 : 20} />}
                    </button>
                    {!isMobile && (
                      <button className="text-white/60 hover:text-white transition-colors">
                        <Maximize2 size={18} />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Transmission Mode Overlay (When Playing) */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "fixed inset-0 bg-black/80 z-[45] pointer-events-none",
                  !isMobile && "backdrop-blur-md"
                )} 
              />
            )}
          </AnimatePresence>

          {/* Closing Summary */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center max-w-2xl"
          >
            <p className="text-white/40 text-xs md:text-base font-light leading-relaxed italic px-6">
              "Integral is not a company. It is an engineering response to a fragmented world."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
