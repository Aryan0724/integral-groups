"use client";

import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Cpu, Globe, Zap } from "lucide-react";

const projects = [
  {
    title: "Autonomous Logistics Node",
    category: "Infrastructure",
    desc: "A modular fulfillment system for rapid-deployment supply chains.",
    icon: Cpu,
    tags: ["Robotics", "AI", "Execution"],
  },
  {
    title: "Global Intelligence Engine",
    category: "Research",
    desc: "Real-time market sentiment and geopolitical risk analysis platform.",
    icon: Globe,
    tags: ["Data", "Analysis", "Insight"],
  },
  {
    title: "Modular Branding OS",
    category: "Creative",
    desc: "Dynamic identity systems that evolve with organizational growth.",
    icon: Zap,
    tags: ["Brand", "Visual", "Systems"],
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-40 pb-32 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">EXECUTION_LOG</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-display text-5xl md:text-8xl font-bold tracking-tighter uppercase text-white leading-[0.85] mb-12"
            >
              Proven<br />
              <span className="text-white/40">Capabilities</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} />
                </div>
                
                <div className="mb-12">
                  <project.icon size={32} className="text-cyan-500 mb-6" />
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold tracking-tight uppercase text-white mb-4">{project.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/20 group-hover:text-cyan-500/60 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
