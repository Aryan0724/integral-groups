"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const phases = [
  { id: "01", title: "Digital Infrastructure & Engineering", desc: "Foundational architecture and execution frameworks." },
  { id: "02", title: "Media Systems & Creative Execution", desc: "Cinematic digital identity and visual communication infrastructure." },
  { id: "03", title: "Product Innovation & Experimental Platforms", desc: "Researching and developing scalable intelligent tools." },
  { id: "04", title: "Intelligent Systems & Automation", desc: "Machine intelligence integrated with industrial workflows." },
  { id: "05", title: "Advanced Ecosystem Expansion", desc: "Global scaling of multi-sector hardware and software." },
];

export const RoadmapPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em]">STRATEGY</span>
            <div className="w-8 h-[1px] bg-cyan-500" />
          </div>
          <h2 className="text-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Strategic Expansion
          </h2>
          <p className="text-white/40 max-w-lg text-sm font-light leading-relaxed">
            The long-term timeline for scaling the Integral ecosystem across digital, 
            autonomous, and industrial verticals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
             <motion.div 
               style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
               className="absolute top-0 left-0 w-full h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
             />
          </div>

          <div className="space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={phase.id} className={cn(
                  "relative flex items-center",
                  "md:justify-between"
                )}>
                  {/* Left Side (Empty on mobile, empty/filled depending on index on desktop) */}
                  <div className={cn(
                    "hidden md:block w-[45%]",
                    isEven ? "text-right pr-12" : "order-2 text-left pl-12"
                  )}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                      >
                        <h3 className="text-display text-2xl font-bold mb-2 text-white">{phase.title}</h3>
                        <p className="text-white/40 text-sm">{phase.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10 bg-black">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-4 h-4 rounded-full border border-cyan-500 bg-black z-20 flex items-center justify-center relative group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Right Side (Content on mobile, empty/filled depending on index on desktop) */}
                  <div className={cn(
                    "w-full pl-16 md:pl-0 md:w-[45%]",
                    isEven ? "md:order-2 md:pl-12 text-left" : "md:pr-12 md:text-right"
                  )}>
                    {(!isEven || true) && ( // On mobile always show here, on desktop handled by CSS hiding one
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={cn(isEven ? "md:hidden" : "")}
                      >
                        <div className="text-cyan-500 font-mono text-xs mb-2">PHASE {phase.id}</div>
                        <h3 className="text-display text-2xl font-bold mb-2 text-white">{phase.title}</h3>
                        <p className="text-white/40 text-sm">{phase.desc}</p>
                      </motion.div>
                    )}
                    {/* Re-render the even content for desktop on the correct side */}
                    {isEven && (
                      <div className="hidden md:block">
                        <div className="text-cyan-500 font-mono text-xs mb-2">PHASE {phase.id}</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
