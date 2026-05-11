"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Users,
  FileText,
  PlayCircle,
  TrendingUp,
  ArrowUpRight,
  Layers,
  Cpu,
  Globe,
  Radio,
  Terminal,
  Plus,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Intelligence Reports", value: "12", delta: "+2", icon: FileText, color: "text-cyan-500", bgColor: "bg-cyan-500/60", progress: 85 },
  { label: "Ecosystem Nodes", value: "34", delta: "+5", icon: Database, color: "text-blue-500", bgColor: "bg-blue-500/60", progress: 92 },
  { label: "Pipeline Dossiers", value: "142", delta: "+18", icon: Users, color: "text-purple-500", bgColor: "bg-purple-500/60", progress: 64 },
  { label: "System Uptime", value: "99.9%", delta: "Nominal", icon: Activity, color: "text-green-500", bgColor: "bg-green-500/60", progress: 100 },
];

const activity = [
  { id: 1, title: "INT-092: Autonomous Systems Report", status: "Published", time: "12m ago", user: "Admin_Root" },
  { id: 2, title: "New Application: Senior Systems Engineer", status: "Pending Review", time: "45m ago", user: "System" },
  { id: 3, title: "Node Update: Integral Labs Expansion", status: "Active", time: "2h ago", user: "Admin_Root" },
  { id: 4, title: "Transmission: Vision 2026 Upload", status: "Syncing", time: "5h ago", user: "Admin_Root" },
];

const NODES = [
  { name: "Labs", angle: 0, color: "text-cyan-500", borderColor: "border-cyan-500/30" },
  { name: "Media", angle: 120, color: "text-purple-500", borderColor: "border-purple-500/30" },
  { name: "Inno", angle: 240, color: "text-green-500", borderColor: "border-green-500/30" },
];

// Isolated node component to safely use client state
function ConnectedNode({ node, dist }: { node: typeof NODES[0]; dist: number }) {
  const x = Math.cos((node.angle * Math.PI) / 180) * dist;
  const y = Math.sin((node.angle * Math.PI) / 180) * dist;

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
    >
      <div className={cn("w-8 h-8 border bg-black/80 flex items-center justify-center mb-1", node.borderColor, node.color)}>
        <Layers size={12} />
      </div>
      <span className="text-[7px] uppercase tracking-widest text-white/40">{node.name}</span>
    </div>
  );
}

export default function DashboardPage() {
  const [dist, setDist] = useState(100);

  const updateDist = useCallback(() => {
    setDist(window.innerWidth < 640 ? 70 : 110);
  }, []);

  useEffect(() => {
    updateDist();
    window.addEventListener("resize", updateDist, { passive: true });
    return () => window.removeEventListener("resize", updateDist);
  }, [updateDist]);

  return (
    <div className="space-y-6 lg:space-y-10 pt-2">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60 mb-3"
          >
            <Terminal size={11} />
            <span>Operational_Command // Mission_Control</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-2xl lg:text-4xl font-bold tracking-tight uppercase"
          >
            System Overview
          </motion.h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono">Last_Sync: Live</span>
            <span className="text-[10px] text-green-500/60 uppercase tracking-widest font-mono">All_Systems_Stable</span>
          </div>
          <button className="px-4 py-2 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-colors">
            Init_Sync
          </button>
        </div>
      </div>

      {/* ── STATS GRID ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group relative p-4 lg:p-6 border border-white/5 bg-black/40 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-b border-l border-white/5 group-hover:border-cyan-500/20 transition-colors" />

            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-1.5 rounded-lg bg-white/5", stat.color)}>
                <stat.icon size={16} />
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-green-500/80 font-mono">
                <TrendingUp size={9} />
                <span>{stat.delta}</span>
              </div>
            </div>

            <div className="space-y-0.5 mb-3">
              <div className="text-xl lg:text-3xl font-light tracking-tight">{stat.value}</div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-white/30 leading-tight">{stat.label}</div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[8px] uppercase tracking-widest text-white/20">
                <span>Capacity</span>
                <span>{stat.progress}%</span>
              </div>
              <div className="h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                  className={cn("h-full", stat.bgColor)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── MID: VISUALIZER + LOGS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">

        {/* Ecosystem Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 relative min-h-[300px] lg:h-[420px] border border-white/5 bg-black/40 overflow-hidden p-4 lg:p-8"
        >
          <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Globe size={14} className="text-cyan-500" />
                <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold">Ecosystem_Architecture</h2>
              </div>
              <div className="w-16 lg:w-24 h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-cyan-500/50"
                />
              </div>
            </div>

            {/* Visualizer */}
            <div className="flex-1 flex items-center justify-center relative">
              {/* Rings */}
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] border border-white/5 rounded-full opacity-30" />
              <div className="absolute w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] border border-cyan-500/10 rounded-full" />

              {/* Core */}
              <div className="relative flex flex-col items-center z-10">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                  <span className="text-black font-bold text-lg lg:text-xl">∫</span>
                </div>
                <span className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/50">Integral_Core</span>
              </div>

              {/* Nodes — positioned relative to center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {NODES.map((node) => (
                  <ConnectedNode key={node.name} node={node} dist={dist} />
                ))}
              </div>
            </div>

            <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-4">
              <div>
                <div className="text-[8px] uppercase tracking-widest text-white/20">Active_Linkages</div>
                <div className="text-[11px] font-mono text-cyan-500">32_STABLE_CHANNELS</div>
              </div>
              <button className="text-[9px] uppercase tracking-widest text-white/30 hover:text-white transition-colors border-b border-white/10 pb-0.5">
                Manage →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Operational Logs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="border border-white/5 bg-black/40 p-5 lg:p-8 flex flex-col"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Radio size={14} className="text-purple-500" />
            <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold">Operational_Logs</h2>
          </div>

          <div className="flex-1 space-y-4">
            {activity.map((item, i) => (
              <div key={item.id} className="group">
                <div className="flex items-start justify-between mb-0.5">
                  <span className="text-[9px] text-white/20 font-mono">{item.time}</span>
                  <span className="text-[8px] text-cyan-500/60 font-mono">{item.user}</span>
                </div>
                <div className="text-[11px] text-white/70 group-hover:text-white transition-colors leading-snug mb-1.5">
                  {item.title}
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1 h-1 bg-green-500 rounded-full" />
                  <span className="text-[8px] uppercase tracking-widest text-white/30">{item.status}</span>
                </div>
                {i < activity.length - 1 && <div className="mt-4 border-b border-white/5" />}
              </div>
            ))}
          </div>

          <button className="mt-6 w-full py-2.5 border border-white/5 text-[9px] uppercase tracking-[0.25em] text-white/30 hover:text-white hover:border-white/15 transition-all">
            View_Full_Audit_Trail
          </button>
        </motion.div>
      </div>

      {/* ── LOWER: ANALYTICS + QUICK ACTIONS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">

        {/* Intelligence Pulse */}
        <div className="border border-white/5 bg-black/40 p-5 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <FileText size={14} className="text-cyan-500" />
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold">Intelligence_Pulse</h2>
            </div>
            <div className="p-1.5 border border-white/5 rounded text-white/20 hover:text-white transition-colors cursor-pointer">
              <ArrowUpRight size={13} />
            </div>
          </div>
          <div>
            <div className="h-20 flex items-end gap-1 mb-4">
              {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  style={{ height: `${h}%`, transformOrigin: "bottom" }}
                  className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors rounded-t-sm"
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-white/20 uppercase tracking-widest">
              <span>Reader_Retention</span>
              <span className="text-cyan-500">82%</span>
            </div>
          </div>
        </div>

        {/* Quick Management */}
        <div className="md:col-span-1 lg:col-span-2 border border-white/5 bg-black/40 p-5 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/30 border-b border-white/5 pb-3">
              Content_Engines
            </h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3.5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white">Publish_Intelligence</span>
                <Plus size={13} className="text-white/20 group-hover:text-cyan-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3.5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white">Update_Mission_Brief</span>
                <PlayCircle size={13} className="text-white/20 group-hover:text-cyan-500" />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/30 border-b border-white/5 pb-3">
              Infrastructure_Tools
            </h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3.5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white">Optimize_SEO_Layer</span>
                <ArrowUpRight size={13} className="text-white/20 group-hover:text-cyan-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3.5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white">System_Configuration</span>
                <Settings size={13} className="text-white/20 group-hover:text-cyan-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
