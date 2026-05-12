"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">

      {/* Background Video - Cinematic Industrial/Tech */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-cityscape-with-digital-grids-and-data-27461-large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Integral Infrastructure"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-xs font-mono text-white/50 uppercase tracking-[0.5em] mb-8">Integral Group Holdings</span>
          <h1 className="text-6xl md:text-[7rem] font-display font-medium leading-[0.9] text-white max-w-6xl tracking-tighter uppercase mb-12">
            AI-Powered <br /> Automation for <br /> Every Decision
          </h1>
          <div className="h-px bg-white/20 w-32 mb-12" />
          <p className="text-white/60 text-lg md:text-xl font-display max-w-2xl leading-relaxed uppercase tracking-wide">
            A startup venture building the digital infrastructure, media systems, and innovation platforms of the next industrial era.
          </p>
        </motion.div>
      </div>

      {/* Bottom Product Ticker */}
      <div className="absolute bottom-12 left-0 right-0 z-20 hidden lg:block overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 border-t border-white/10 pt-8">
            {["AI Dept", "Web Dev", "SaaS", "Media", "Marketing", "Sales", "R&D", "Collab"].map((tag, i) => (
              <span 
                key={tag}
                className={cn(
                  "px-6 py-2 text-[10px] font-mono uppercase tracking-[0.2em] border transition-all cursor-pointer whitespace-nowrap",
                  i === 0 ? "bg-white text-black border-white" : "border-white/10 text-white/40 hover:border-white/30"
                )}
              >
                {tag}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-4">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Sys_Status: Operational</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
