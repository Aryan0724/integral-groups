"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Eye, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const departments = [
  {
    id: "labs",
    title: "Integral Labs",
    description: "Engineering digital systems, AI-integrated platforms, and scalable execution infrastructure.",
    icon: Cpu,
    href: "/ecosystem/labs",
    capabilities: ["AI-integrated platforms", "Intelligent dashboards", "Modern web systems", "Automation infrastructure", "Backend engineering"]
  },
  {
    id: "media",
    title: "Integral Media",
    description: "Media systems focused on storytelling, branding, digital presence, and visual influence.",
    icon: Eye,
    href: "/ecosystem/media",
    capabilities: ["Cinematic storytelling", "Brand systems", "Digital identity", "Content infrastructure"]
  },
  {
    id: "products",
    title: "Dept. of Products & Innovation",
    description: "Researching, designing, and developing scalable products, intelligent tools, and experimental systems.",
    icon: Lightbulb,
    href: "/ecosystem/products-innovation",
    capabilities: ["Experimental systems", "Digital products", "Prototype architecture", "Future-focused concepts"]
  }
];

export const EcosystemOverview = () => {
  return (
    <section className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">ACTIVE_ARCHITECTURE</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-white mb-2">
              The Ecosystem
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed">
              Modular execution units operating independently, yet architected to share 
              a unified technological foundation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border border-white/10 bg-black flex flex-col h-full"
            >
              {/* Header/Title Block */}
              <div className="p-8 border-b border-white/10 bg-white/[0.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-widest">[ {dept.id} ]</span>
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 bg-black">
                  <dept.icon size={16} className="text-cyan-500" />
                </div>
                <h3 className="text-display text-2xl font-bold mb-3 tracking-tight">{dept.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light mb-6 min-h-[60px]">
                  {dept.description}
                </p>
              </div>

              {/* Capabilities Block */}
              <div className="p-8 flex-1 bg-black">
                <div className="text-[9px] uppercase tracking-widest font-mono text-white/30 mb-6">
                  Core Capabilities
                </div>
                <ul className="space-y-4">
                  {dept.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start space-x-3 group/item">
                      <div className="mt-[2px] w-1.5 h-1.5 border border-cyan-500/50 bg-cyan-500/10 group-hover/item:bg-cyan-500 transition-colors" />
                      <span className="text-sm text-white/60 font-light group-hover/item:text-white transition-colors">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer/Link Block */}
              <div className="p-4 border-t border-white/10 bg-white/[0.01]">
                <Link href={dept.href} className="flex items-center justify-between w-full text-xs uppercase tracking-widest text-white/50 hover:text-cyan-500 transition-colors group/btn py-2 px-4 border border-transparent hover:border-cyan-500/30">
                  <span>Explore Module</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Animated borders on hover */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
