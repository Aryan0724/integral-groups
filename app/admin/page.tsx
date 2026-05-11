"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Database, 
  Users, 
  ShieldAlert, 
  FileText, 
  PlayCircle, 
  TrendingUp, 
  ArrowUpRight,
  Layers,
  Cpu,
  Globe,
  Radio,
  Clock,
  Terminal,
  Plus,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Intelligence Reports", value: "12", delta: "+2", icon: FileText, color: "text-cyan-500", progress: 85 },
  { label: "Ecosystem Nodes", value: "34", delta: "+5", icon: Database, color: "text-blue-500", progress: 92 },
  { label: "Pipeline Dossiers", value: "142", delta: "+18", icon: Users, color: "text-purple-500", progress: 64 },
  { label: "System Uptime", value: "99.9", delta: "Nominal", icon: Activity, color: "text-green-500", progress: 100 },
];

const activity = [
  { id: 1, type: 'INTELLIGENCE', title: "INT-092: Autonomous Systems Report", status: 'Published', time: '12m ago', user: 'Admin_Root' },
  { id: 2, type: 'PIPELINE', title: "New Application: Senior Systems Engineer", status: 'Pending Review', time: '45m ago', user: 'System' },
  { id: 3, type: 'ECOSYSTEM', title: "Node Update: Integral Labs Expansion", status: 'Active', time: '2h ago', user: 'Admin_Root' },
  { id: 4, type: 'MEDIA', title: "Transmission: Vision 2026 Upload", status: 'Syncing', time: '5h ago', user: 'Admin_Root' },
];

const ConnectedNode = ({ node, i }: { node: any, i: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [dist, setDist] = React.useState(120);
  
  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setDist(window.innerWidth < 640 ? 80 : 120);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      animate={{ 
        x: [Math.cos(node.angle * Math.PI / 180) * dist, Math.cos(node.angle * Math.PI / 180) * (dist + 10), Math.cos(node.angle * Math.PI / 180) * dist],
        y: [Math.sin(node.angle * Math.PI / 180) * dist, Math.sin(node.angle * Math.PI / 180) * (dist + 10), Math.sin(node.angle * Math.PI / 180) * dist]
      }}
      transition={{ 
        duration: 4, 
        delay: i, 
        repeat: Infinity,
        ease: "linear" 
      }}
      className="absolute flex flex-col items-center"
    >
      <div className={cn("w-8 h-8 lg:w-10 lg:h-10 border border-white/10 bg-black/80 flex items-center justify-center mb-2", node.color)}>
        <Layers size={14} />
      </div>
      <span className="text-[7px] lg:text-[8px] uppercase tracking-widest text-white/40">{node.name}</span>
    </motion.div>
  );
};

const DashboardPage = () => {
  return (
    <div className="space-y-10">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4"
          >
            <Terminal size={12} />
            <span>Operational_Command // Mission_Control</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight uppercase"
          >
            System Overview
          </motion.h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono">Last_Sync: 14:32:01</span>
            <span className="text-[10px] text-green-500/60 uppercase tracking-widest font-mono">All_Systems_Stable</span>
          </div>
          <button className="px-6 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-colors">
            Init_Sync
          </button>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 border border-white/5 bg-black/40 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
          >
            {/* Tactical Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-white/5 group-hover:border-cyan-500/20 transition-colors" />
            
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-2 rounded-lg bg-white/5", stat.color)}>
                <stat.icon size={20} />
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-green-500/80 font-mono">
                <TrendingUp size={10} />
                <span>{stat.delta}</span>
              </div>
            </div>
            
            <div className="space-y-1 mb-4">
              <div className="text-3xl font-light tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[8px] uppercase tracking-widest text-white/20">
                <span>Capacity</span>
                <span>{stat.progress}%</span>
              </div>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={cn("h-full", stat.color.replace('text', 'bg').replace('500', '500/60'))}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MID SECTION: ECOSYSTEM VISUALIZATION & ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Ecosystem Architecture (Placeholder for interactive map) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 relative min-h-[350px] lg:h-[450px] border border-white/5 bg-black/40 overflow-hidden group p-4 lg:p-8"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.05]" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-10">
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-cyan-500" />
                <h2 className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold">Ecosystem_Architecture</h2>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[9px] uppercase tracking-widest text-white/20 hidden sm:inline">Visualizer_Active</span>
                <div className="w-20 lg:w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-cyan-500/40"
                  />
                </div>
              </div>
            </div>

            {/* Visualizer Mockup - Scale for Mobile */}
            <div className="flex-1 flex items-center justify-center relative scale-75 sm:scale-100">
              <div className="absolute w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border border-white/5 rounded-full animate-pulse opacity-20" />
              <div className="absolute w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] border border-cyan-500/10 rounded-full animate-spin-slow" />
              
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <span className="text-black font-bold text-xl lg:text-2xl">∫</span>
                </div>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">Integral_Core</span>
              </div>

              {/* Connected Nodes Mockup */}
              {[
                { name: 'Labs', angle: 0, color: 'text-cyan-500' },
                { name: 'Media', angle: 120, color: 'text-purple-500' },
                { name: 'Inno', angle: 240, color: 'text-green-500' },
              ].map((node, i) => (
                <ConnectedNode key={i} node={node} i={i} />
              ))}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-white/5 pt-6 gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-[8px] uppercase tracking-widest text-white/20">Active_Linkages</div>
                <div className="text-[11px] lg:text-[12px] font-mono text-cyan-500">32_STABLE_CHANNELS</div>
              </div>
              <button className="text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-colors border-b border-white/10 pb-1">
                Manage_Architecture →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Operational Log */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="border border-white/5 bg-black/40 p-8 flex flex-col"
        >
          <div className="flex items-center space-x-3 mb-10">
            <Radio size={16} className="text-purple-500" />
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold">Operational_Logs</h2>
          </div>

          <div className="flex-1 space-y-6">
            {activity.map((item, i) => (
              <div key={item.id} className="group relative">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-mono">{item.time}</span>
                  <span className="text-[8px] uppercase tracking-widest text-cyan-500/60 font-mono">{item.user}</span>
                </div>
                <div className="text-[12px] text-white/80 group-hover:text-white transition-colors leading-tight mb-2">
                  {item.title}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[8px] uppercase tracking-widest text-white/30">{item.status}</span>
                </div>
                {i < activity.length - 1 && <div className="mt-6 border-b border-white/5" />}
              </div>
            ))}
          </div>

          <button className="mt-8 w-full py-3 border border-white/5 text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white hover:border-white/20 transition-all">
            View_Full_Audit_Trail
          </button>
        </motion.div>
      </div>

      {/* LOWER SECTION: ANALYTICS PREVIEW & SYSTEM QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Intelligence Pulse */}
        <div className="border border-white/5 bg-black/40 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <FileText size={16} className="text-cyan-500" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold">Intelligence_Pulse</h2>
            </div>
            <div className="p-1.5 border border-white/5 rounded-lg text-white/20 hover:text-white transition-colors cursor-pointer">
              <ArrowUpRight size={14} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-24 flex items-end gap-1.5 mb-6">
              {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors rounded-t-sm"
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-white/20 uppercase tracking-widest">
              <span>Reader_Retention</span>
              <span className="text-cyan-500">82%</span>
            </div>
          </div>
        </div>

        {/* Quick Management Links */}
        <div className="lg:col-span-2 border border-white/5 bg-black/40 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/30 border-b border-white/5 pb-4">Content_Engines</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">Publish_Intelligence</span>
                <Plus size={14} className="text-white/20 group-hover:text-cyan-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">Update_Mission_Brief</span>
                <PlayCircle size={14} className="text-white/20 group-hover:text-cyan-500" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/30 border-b border-white/5 pb-4">Infrastructure_Tools</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">Optimize_SEO_Layer</span>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-cyan-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white">System_Configuration</span>
                <Settings size={14} className="text-white/20 group-hover:text-cyan-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardPage;
