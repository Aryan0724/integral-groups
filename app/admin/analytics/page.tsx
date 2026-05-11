"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity, 
  Globe, 
  MousePointer2, 
  Clock, 
  ArrowUpRight,
  ChevronRight,
  Layers,
  Zap,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const topStats = [
  { label: 'Network_Throughput', value: '1.2M', delta: '+12.5%', icon: Activity, color: 'text-cyan-500' },
  { label: 'Ecosystem_Retention', value: '84%', delta: '+2.1%', icon: Target, color: 'text-purple-500' },
  { label: 'Engagement_Pulse', value: '4.8s', delta: '-0.3s', icon: Zap, color: 'text-green-500' },
  { label: 'Traffic_Ingress', value: '42K', delta: '+8.4%', icon: Globe, color: 'text-blue-500' },
];

const AnalyticsAdmin = () => {
  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <BarChart3 size={12} />
            <span>Operational_Analytics // Engagement_Pulse</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">System Analytics</h1>
        </div>
        
        <div className="flex items-center space-x-2 p-1 bg-white/[0.03] border border-white/5 rounded-lg">
          {['24H', '7D', '30D', '90D'].map((t) => (
            <button key={t} className={cn(
              "px-6 py-2 text-[9px] uppercase tracking-widest transition-all",
              t === '7D' ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"
            )}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* TOP STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-8 border border-white/5 bg-black/40 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-white/5 group-hover:border-cyan-500/20 transition-colors" />
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2 bg-white/[0.02] rounded-lg", stat.color)}>
                <stat.icon size={18} />
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-green-500/80 font-mono">
                <TrendingUp size={10} />
                <span>{stat.delta}</span>
              </div>
            </div>
            <div className="text-3xl font-light tracking-tight mb-1">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* MAIN ANALYTICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ENGAGEMENT FLOW CHART */}
        <div className="lg:col-span-2 p-10 border border-white/5 bg-black/40 flex flex-col space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity size={16} className="text-cyan-500" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold">Traffic_Topology</h2>
            </div>
            <div className="flex items-center space-x-6 text-[9px] uppercase tracking-widest text-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500/60 rounded-full" />
                <span>Direct_Ingress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500/60 rounded-full" />
                <span>External_Nodes</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] flex items-end gap-3 relative">
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
            {[45, 60, 35, 75, 50, 90, 65, 80, 55, 100, 70, 85, 40, 60, 50].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.05 }}
                className={cn(
                  "flex-1 rounded-t-sm transition-all duration-500 cursor-pointer",
                  i % 3 === 0 ? "bg-purple-500/40 hover:bg-purple-500" : "bg-cyan-500/40 hover:bg-cyan-500"
                )}
              >
                <div className="w-full h-full opacity-20 bg-gradient-to-t from-transparent to-white" />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-end pt-6 border-t border-white/5">
            <div className="flex items-center space-x-12">
              <div className="space-y-1">
                <div className="text-[8px] uppercase tracking-widest text-white/20">Peak_Throughput</div>
                <div className="text-xs font-mono text-cyan-500">14,208_TPS</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] uppercase tracking-widest text-white/20">Avg_Engagement</div>
                <div className="text-xs font-mono text-cyan-500">4M_32S</div>
              </div>
            </div>
            <button className="text-[9px] uppercase tracking-widest text-white/30 hover:text-white transition-colors flex items-center space-x-2">
              <span>Generate_Dossier</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* TOP DEPARTMENTS BY INTERACTION */}
        <div className="p-8 border border-white/5 bg-black/40 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <Layers size={16} className="text-purple-500" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold">Node_Efficiency</h2>
            </div>
          </div>
          <div className="space-y-8 flex-1">
            {[
              { name: 'Integral Labs', val: 92, color: 'bg-cyan-500' },
              { name: 'Integral Media', val: 78, color: 'bg-purple-500' },
              { name: 'Innovation Sector', val: 85, color: 'bg-green-500' },
              { name: 'Intelligence Layer', val: 64, color: 'bg-blue-500' },
            ].map((dept, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">{dept.name}</span>
                  <span className="text-[10px] font-mono text-white/20">{dept.val}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${dept.val}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className={cn("h-full opacity-60", dept.color)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-white/5">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-white/40">
                <Clock size={12} />
                <span>Real-Time Pulse Check</span>
              </div>
              <div className="text-xs font-mono text-green-500 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span>All_Systems_Nominal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsAdmin;
