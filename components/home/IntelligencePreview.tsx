"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, FileText, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: "INT-01",
    title: "Future of Autonomous Systems",
    date: "2026.05.10",
    clearance: "LEVEL 1",
    type: "STRATEGIC REPORT"
  },
  {
    id: "INT-02",
    title: "Engineering Intelligent Infrastructure",
    date: "2026.04.22",
    clearance: "LEVEL 2",
    type: "SYSTEMS ANALYSIS"
  },
  {
    id: "INT-03",
    title: "AI Systems and Human Coordination",
    date: "2026.03.15",
    clearance: "LEVEL 1",
    type: "ENGINEERING ESSAY"
  },
  {
    id: "INT-04",
    title: "The Rise of Execution Ecosystems",
    date: "2026.02.08",
    clearance: "PUBLIC",
    type: "FRAMEWORK"
  }
];

export const IntelligencePreview = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em]">RESEARCH</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Integral Intelligence
            </h2>
            <p className="text-white/40 max-w-sm text-sm font-light">
              Classified reports, strategic analysis, and engineering essays on the future of infrastructure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <button className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-white/50 hover:text-cyan-500 transition-colors group">
              <span>Access All Terminal Files</span>
              <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-cyan-500 transition-all duration-300" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <span className="text-cyan-500 font-mono text-[9px] uppercase tracking-widest">[ {article.id} ]</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 font-mono text-[9px]">{article.date}</span>
                </div>
                <div className="text-[8px] font-mono text-white/20 group-hover:text-cyan-500/50 transition-colors uppercase tracking-[0.2em]">
                  {article.clearance === "PUBLIC" ? "ACCESS_GRANTED" : "SECURED_FILE"}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-[1px] bg-cyan-500/50" />
                  <div className="text-[9px] uppercase tracking-widest text-white/30 font-mono">{article.type}</div>
                </div>
                <h3 className="text-display text-xl md:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors tracking-tight leading-tight">
                  {article.title}
                </h3>
              </div>

              <div className="mt-8 flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                  <span>REF: 0x99{index}</span>
                  <span>SIZE: 4.2MB</span>
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-500 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500/30 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan-500/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
