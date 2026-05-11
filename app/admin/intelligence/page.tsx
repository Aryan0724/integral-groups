"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Search, 
  Plus, 
  Filter, 
  Eye, 
  Edit2, 
  Trash2, 
  Lock, 
  Globe, 
  ShieldCheck,
  ChevronRight,
  Clock,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

const articles = [
  { id: 'INT-092', title: "Future of Autonomous Systems", clearance: 'LEVEL_4', type: 'Strategic Briefing', status: 'Published', date: '2026.05.10', color: 'text-cyan-500' },
  { id: 'INT-089', title: "Ecosystem Engineering Doctrine", clearance: 'PUBLIC', type: 'Institutional Lore', status: 'Draft', date: '2026.05.08', color: 'text-white/40' },
  { id: 'INT-085', title: "Scalable Infrastructure Architecture", clearance: 'LEVEL_3', type: 'Engineering Report', status: 'Published', date: '2026.05.05', color: 'text-green-500' },
  { id: 'INT-082', title: "Intelligence Layer Protocol", clearance: 'LEVEL_5', type: 'Systems Analysis', status: 'Classified', date: '2026.04.30', color: 'text-red-500' },
];

const IntelligenceAdmin = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <FileText size={12} />
            <span>Classified_Repository // Intelligence_Layer</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Intelligence System</h1>
        </div>
        
        <button className="px-8 py-3 bg-cyan-500 text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center space-x-3">
          <Plus size={14} />
          <span>New_Transmission</span>
        </button>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex items-center space-x-4 bg-white/[0.02] border border-white/5 p-2 rounded-xl">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Filter Dossiers..."
            className="w-full bg-transparent border-none py-3 pl-12 pr-6 text-sm uppercase tracking-widest placeholder:text-white/10 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-1 pr-2">
          {['All', 'Published', 'Classified', 'Draft'].map((f) => (
            <button key={f} className="px-5 py-2 text-[9px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">
              {f}
            </button>
          ))}
          <div className="w-px h-6 bg-white/5 mx-2" />
          <button className="p-2 text-white/20 hover:text-white transition-colors">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* INTELLIGENCE GRID */}
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative bg-black/40 border border-white/5 hover:border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500"
          >
            {/* Status Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-cyan-500/30 transition-colors" />

            <div className="flex items-center space-x-6 flex-1">
              <div className="flex flex-col items-center justify-center space-y-1 shrink-0">
                <span className="text-[9px] text-white/20 font-mono tracking-tighter">{article.id}</span>
                <div className={cn("p-3 bg-white/[0.03] border border-white/5", article.color)}>
                  <FileText size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-cyan-500 transition-colors uppercase">{article.title}</h3>
                  <div className="flex items-center space-x-1.5 px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-[8px] uppercase tracking-widest text-white/30">
                    <Clock size={10} />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">{article.type}</span>
                  <div className="w-1 h-1 bg-white/10 rounded-full" />
                  <div className="flex items-center space-x-2">
                    {article.clearance === 'PUBLIC' ? <Globe size={12} className="text-green-500/60" /> : <ShieldCheck size={12} className="text-red-500/60" />}
                    <span className={cn("text-[9px] uppercase tracking-widest font-mono", 
                      article.clearance === 'PUBLIC' ? "text-green-500/60" : "text-red-500/60"
                    )}>{article.clearance}_ACCESS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-6 pr-6 border-r border-white/5">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] uppercase tracking-widest text-white/20 mb-1">Status</span>
                  <span className={cn("text-[10px] uppercase tracking-widest font-bold", 
                    article.status === 'Published' ? "text-green-500" : "text-yellow-500"
                  )}>{article.status}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2.5 bg-white/5 border border-white/5 text-white/30 hover:text-white hover:border-white/10 transition-all rounded-lg">
                  <Eye size={16} />
                </button>
                <button className="p-2.5 bg-white/5 border border-white/5 text-white/30 hover:text-cyan-500 hover:border-cyan-500/20 transition-all rounded-lg">
                  <Edit2 size={16} />
                </button>
                <button className="p-2.5 text-white/10 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SYSTEM METRICS BOX */}
      <div className="p-8 border border-white/5 bg-black/40 flex items-center justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_70%)]" />
        <div className="relative z-10 flex flex-col space-y-1">
          <span className="text-[9px] text-white/20 uppercase tracking-widest font-mono">Transmission_Status</span>
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-light tracking-widest uppercase">98% Data Integrity</h2>
            <div className="flex items-center space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [8, 16, 8] }}
                  transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                  className="w-1 bg-cyan-500/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
        <button className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center space-x-3">
          <span>Run_Diagnostic</span>
          <ChevronRight size={14} />
        </button>
      </div>

    </div>
  );
};

export default IntelligenceAdmin;
