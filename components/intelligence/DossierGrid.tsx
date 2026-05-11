"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, FileText, ArrowUpRight, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "SYSTEMS ANALYSIS", "STRATEGIC REPORT", "ENGINEERING ESSAY", "FRAMEWORK"];

const ARTICLES = [
  {
    id: "INT-01",
    title: "Future Infrastructure Systems",
    date: "2026.05.10",
    clearance: "LEVEL 1",
    type: "STRATEGIC REPORT",
    summary: "An analysis of how autonomous robotics will integrate with existing industrial supply chains over the next decade."
  },
  {
    id: "INT-02",
    title: "Engineering Modern Digital Ecosystems",
    date: "2026.04.22",
    clearance: "LEVEL 2",
    type: "SYSTEMS ANALYSIS",
    summary: "Breaking down the core components required to build self-healing data networks and physical infrastructure."
  },
  {
    id: "INT-03",
    title: "AI and Execution Architecture",
    date: "2026.03.15",
    clearance: "LEVEL 1",
    type: "ENGINEERING ESSAY",
    summary: "Philosophical and practical frameworks for humans operating alongside multi-agent AI ecosystems."
  },
  {
    id: "INT-04",
    title: "The Rise of Intelligent Platforms",
    date: "2026.02.08",
    clearance: "PUBLIC",
    type: "FRAMEWORK",
    summary: "Why traditional corporate structures are being replaced by modular, engineering-first execution networks."
  }
];

export const DossierGrid = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter(article => {
    const matchesCategory = activeCategory === "ALL" || article.type === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pb-32 relative z-10 container mx-auto px-6">
      
      {/* Terminal Filters & Search */}
      <div className="mb-12 border border-white/10 bg-white/[0.01] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2 md:border-none md:pb-0 flex-1 md:max-w-xs relative">
          <Search size={14} className="text-cyan-500 absolute left-2" />
          <input 
            type="text" 
            placeholder="QUERY INTELLIGENCE DATABASE..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-xs font-mono text-white/80 w-full pl-8"
          />
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <Filter size={14} className="text-white/30 hidden md:block" />
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-[10px] uppercase tracking-widest font-mono whitespace-nowrap transition-colors",
                activeCategory === category ? "text-cyan-500" : "text-white/40 hover:text-white"
              )}
            >
              [{category}]
            </button>
          ))}
        </div>

      </div>

      {/* Results Meta */}
      <div className="flex justify-between items-center mb-6 text-[10px] uppercase tracking-widest text-white/30 font-mono">
        <span>FOUND: {filteredArticles.length} RECORDS</span>
        <span>STATUS: SECURE_CONNECTION</span>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredArticles.map((article) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={article.id}
              className="group relative border border-white/10 bg-black hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col h-[280px]"
            >
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] z-0" />
              
              {/* Header */}
              <div className="bg-white/[0.02] border-b border-white/5 p-4 flex justify-between items-center relative z-10">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-500 font-mono text-[10px] bg-cyan-500/10 px-2 py-0.5">{article.id}</span>
                  <span className="text-white/40 font-mono text-[10px]">{article.date}</span>
                </div>
                {article.clearance !== "PUBLIC" ? (
                  <div className="flex items-center space-x-1 text-red-500/80">
                    <Lock size={10} />
                    <span className="text-[8px] font-mono tracking-widest">{article.clearance}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1 text-white/30">
                    <FileText size={10} />
                    <span className="text-[8px] font-mono tracking-widest">PUBLIC</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">
                  &gt; {article.type}
                </div>
                <h3 className="text-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-4 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-white/40 text-xs font-light line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Footer Hover Element */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center z-20">
                <span className="text-[10px] text-cyan-500 tracking-widest uppercase">Access File</span>
                <ArrowUpRight size={14} className="text-cyan-500" />
              </div>
              
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan-500 transition-colors" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
