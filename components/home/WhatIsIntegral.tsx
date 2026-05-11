"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "labs", label: "Integral Labs", x: 60, y: 15 },
  { id: "automation", label: "Integral Automation", x: 85, y: 40 },
  { id: "media", label: "Integral Media", x: 75, y: 75 },
  { id: "intelligence", label: "Integral Intelligence", x: 25, y: 75 },
  { id: "defense", label: "Integral Defense", x: 15, y: 40 },
];

export const WhatIsIntegral = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative py-24 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-small opacity-10" />
      <div className="absolute inset-0 mask-radial bg-gradient-to-br from-cyan-900/10 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em]">SYSTEM_OVERVIEW</span>
            </div>
            <h2 className="text-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              What Is <br /> Integral?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 font-light max-w-lg">
              Integral Group is a modular execution ecosystem designed to build and scale systems 
              across technology, automation, intelligence, media, and advanced industrial sectors.
            </p>
            <div className="space-y-6">
              {[
                "Decentralized modular execution",
                "Shared technological infrastructure",
                "Interdisciplinary engineering",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  <span className="text-sm tracking-wide text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column: Animated Ecosystem Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="aspect-square relative border border-white/10 bg-white/[0.01] rounded-full flex items-center justify-center p-8 group"
          >
            {/* Inner Rings */}
            <div className="absolute inset-10 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-24 border border-white/5 rounded-full border-dashed" />
            <div className="absolute inset-40 border border-cyan-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

            {/* Central Node */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              onMouseEnter={() => setActiveNode("core")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={cn(
                "w-24 h-24 rounded-full border border-cyan-500/30 bg-black flex items-center justify-center cursor-pointer transition-all duration-500",
                activeNode === "core" ? "shadow-[0_0_30px_rgba(6,182,212,0.4)] border-cyan-500" : ""
              )}>
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
                  activeNode ? "bg-cyan-500/20" : "bg-white/5"
                )}>
                  <div className="w-2 h-2 bg-cyan-500" />
                </div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[10px] uppercase tracking-widest text-white/60 whitespace-nowrap">
                Integral Group
              </div>
            </div>

            {/* Peripheral Nodes & Connection Lines */}
            {nodes.map((node) => {
              const isHovered = activeNode === node.id || activeNode === "core";
              
              return (
                <div key={node.id}>
                  {/* Connection Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2={`${node.x}%`} 
                      y2={`${node.y}%`} 
                      stroke={isHovered ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.05)"}
                      strokeWidth="1"
                      className="transition-colors duration-500"
                    />
                  </svg>
                  
                  {/* Node */}
                  <div 
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-full border bg-black flex items-center justify-center cursor-pointer transition-all duration-500",
                      isHovered ? "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]" : "border-white/10 hover:border-white/30"
                    )}>
                      <div className={cn(
                        "w-4 h-4 rounded-full transition-colors duration-500",
                        isHovered ? "bg-cyan-500" : "bg-white/20"
                      )} />
                    </div>
                    
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-3 text-[9px] uppercase tracking-widest whitespace-nowrap transition-colors duration-300",
                      isHovered ? "text-cyan-500" : "text-white/40"
                    )}>
                      {node.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
