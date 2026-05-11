"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Cpu, 
  Zap, 
  Globe, 
  Search, 
  Shield, 
  Box,
  ChevronRight,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const departments = [
  { 
    id: 'labs', 
    name: 'Integral Labs', 
    code: 'LAB-01',
    status: 'Operational', 
    focus: 'AI & Autonomous Systems',
    load: 42,
    color: 'text-cyan-500',
    icon: Cpu
  },
  { 
    id: 'media', 
    name: 'Integral Media', 
    code: 'MED-01',
    status: 'Active', 
    focus: 'Strategic Communications',
    load: 28,
    color: 'text-purple-500',
    icon: Globe
  },
  { 
    id: 'infra', 
    name: 'Infrastructure', 
    code: 'INF-01',
    status: 'Nominal', 
    focus: 'Execution Frameworks',
    load: 64,
    color: 'text-green-500',
    icon: Layers
  },
  { 
    id: 'intel', 
    name: 'Intelligence', 
    code: 'INT-01',
    status: 'Encrypted', 
    focus: 'Market & Tech Analysis',
    load: 15,
    color: 'text-blue-500',
    icon: Search
  }
];

const DepartmentsAdmin = () => {
  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Layers size={12} />
            <span>Operational_Hierarchy // Node_Management</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Department Control</h1>
        </div>
        
        <button className="px-6 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-colors flex items-center space-x-2">
          <Plus size={14} />
          <span>Provision_New_Node</span>
        </button>
      </div>

      {/* DEPARTMENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept, i) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 border border-white/5 bg-black/40 hover:bg-white/[0.02] transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-4">
                <div className={cn("p-3 bg-white/[0.02] border border-white/5 rounded-xl", dept.color)}>
                  <dept.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight uppercase group-hover:text-cyan-500 transition-colors">{dept.name}</h2>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{dept.code}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest text-white/40">{dept.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">Operational_Focus</span>
                <p className="text-[11px] text-white/60 uppercase tracking-widest">{dept.focus}</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[8px] uppercase tracking-[0.3em] text-white/20">
                  <span>Resource_Load</span>
                  <span>{dept.load}%</span>
                </div>
                <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${dept.load}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={cn("h-full", dept.color.replace('text', 'bg'))}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((u) => (
                  <div key={u} className="w-6 h-6 rounded-full bg-white/10 border border-black flex items-center justify-center text-[8px] font-bold">
                    U{u}
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full bg-black border border-white/5 flex items-center justify-center text-[8px] text-white/40">
                  +8
                </div>
              </div>
              <button className="text-[9px] uppercase tracking-widest text-white/20 hover:text-cyan-500 transition-colors flex items-center space-x-2">
                <span>View_Metrics</span>
                <ChevronRight size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default DepartmentsAdmin;
