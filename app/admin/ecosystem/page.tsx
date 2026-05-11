"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Layers, 
  Zap, 
  Settings, 
  Eye, 
  Plus,
  Network,
  Cpu,
  Globe,
  MoreVertical,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const departments = [
  { id: 'labs', name: 'Integral Labs', status: 'ACTIVE', type: 'Engineering & R&D', nodeCount: 12, health: 98, color: 'text-cyan-500' },
  { id: 'media', name: 'Integral Media', status: 'ACTIVE', type: 'Visuals & Narrative', nodeCount: 8, health: 100, color: 'text-purple-500' },
  { id: 'products', name: 'Products & Innovation', status: 'ACTIVE', type: 'Scalable Execution', nodeCount: 14, health: 95, color: 'text-green-500' },
  { id: 'intelligence', name: 'Intelligence Layer', status: 'STANDBY', type: 'Research & Strategy', nodeCount: 0, health: 0, color: 'text-white/20' },
];

const EcosystemControl = () => {
  const [activeTab, setActiveTab] = useState('structure');

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Network size={12} />
            <span>Infrastructure_Management // Ecosystem_Nodes</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Ecosystem Control</h1>
        </div>
        
        <div className="flex items-center space-x-2 p-1 bg-white/[0.03] border border-white/5 rounded-lg">
          {['structure', 'nodes', 'security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 text-[9px] uppercase tracking-widest transition-all",
                activeTab === tab ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* VISUAL MAP SECTION (Atmospheric) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[400px] border border-white/5 bg-black/40 overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        
        {/* Animated Pathways */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path 
            d="M 200 200 L 800 200 L 800 600" 
            stroke="cyan" 
            strokeWidth="0.5" 
            fill="none"
            animate={{ strokeDashoffset: [0, 1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            strokeDasharray="10"
          />
        </svg>

        <div className="relative z-10 flex items-center justify-center space-x-24">
          {departments.slice(0, 3).map((dept, i) => (
            <motion.div 
              key={dept.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={cn(
                "w-20 h-20 border border-white/10 bg-black flex items-center justify-center mb-4 relative transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
                dept.color
              )}>
                <Layers size={24} />
                {/* Tactical Ring */}
                <div className="absolute inset-[-10px] border border-white/[0.03] rounded-full group-hover:border-cyan-500/10 transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 group-hover:text-white transition-colors">{dept.name}</span>
              <span className="text-[8px] uppercase tracking-widest text-white/20 mt-1">{dept.status}</span>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-8 left-10 flex items-center space-x-6 text-[9px] uppercase tracking-widest text-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Active_Links: 12</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
            <span>Node_Health: 98.4%</span>
          </div>
        </div>
      </motion.div>

      {/* DEPARTMENT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {departments.map((dept, i) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="group relative p-8 border border-white/5 bg-black/40 hover:border-white/10 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <div className={cn("text-[10px] uppercase tracking-[0.3em] font-bold", dept.color)}>{dept.name}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/30">{dept.type}</div>
              </div>
              <button className="p-2 text-white/10 hover:text-white transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="space-y-1">
                <div className="text-xl font-light tracking-tight">{dept.nodeCount}</div>
                <div className="text-[8px] uppercase tracking-widest text-white/20 font-mono">Total_Nodes</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-light tracking-tight">{dept.health}%</div>
                <div className="text-[8px] uppercase tracking-widest text-white/20 font-mono">Uptime_Pulse</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-light tracking-tight">{dept.status}</div>
                <div className="text-[8px] uppercase tracking-widest text-white/20 font-mono">State</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-6 border-t border-white/5">
              <button className="flex-1 py-3 bg-white/[0.03] border border-white/5 text-[9px] uppercase tracking-[0.2em] text-white/60 hover:bg-white hover:text-black transition-all font-bold">
                Configure_Module
              </button>
              <button className="px-4 py-3 border border-white/5 text-white/30 hover:text-cyan-500 transition-colors">
                <Settings size={14} />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Future Expansion Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border border-dashed border-white/5 bg-transparent p-8 flex flex-col items-center justify-center group cursor-pointer hover:border-cyan-500/20 transition-all"
        >
          <div className="w-12 h-12 border border-dashed border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-500/50 transition-colors">
            <Plus size={20} className="text-white/20 group-hover:text-cyan-500" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 group-hover:text-white transition-colors">Initialize_New_Sector</span>
        </motion.div>
      </div>

    </div>
  );
};

export default EcosystemControl;
