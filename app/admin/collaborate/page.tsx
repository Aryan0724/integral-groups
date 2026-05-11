"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Handshake, 
  Globe, 
  MessageSquare, 
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const collaborations = [
  { 
    id: 'COL-001', 
    partner: 'Venture_Dynamics', 
    type: 'Strategic Partner', 
    status: 'Active', 
    impact: 'High',
    since: 'Mar 2026',
    color: 'text-cyan-500' 
  },
  { 
    id: 'COL-002', 
    partner: 'AtoZ Prints', 
    type: 'Infrastructure Vendor', 
    status: 'Synced', 
    impact: 'Operational',
    since: 'Jan 2026',
    color: 'text-purple-500' 
  },
  { 
    id: 'COL-003', 
    partner: 'Global_Defense_Systems', 
    type: 'Client Entity', 
    status: 'Awaiting_Dossier', 
    impact: 'Critical',
    since: 'May 2026',
    color: 'text-green-500' 
  }
];

const CollaborateAdmin = () => {
  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Handshake size={12} />
            <span>Collaboration_Nexus // Partner_Ecosystem</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Partner Management</h1>
        </div>
        
        <button className="px-6 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-colors flex items-center space-x-2">
          <Plus size={14} />
          <span>Initiate_Handshake</span>
        </button>
      </div>

      {/* PARTNER LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-6 pb-2 border-b border-white/5 text-[9px] uppercase tracking-widest text-white/20">
          <div className="flex items-center space-x-24">
            <span className="w-24">Partner_ID</span>
            <span className="w-64">Entity_Name</span>
            <span>Classification</span>
          </div>
          <div className="flex items-center space-x-20">
            <span>Sync_Status</span>
            <span className="w-16">Active_Since</span>
          </div>
        </div>

        <div className="space-y-2">
          {collaborations.map((col, i) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between px-6 py-6 bg-black/40 border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-24">
                <div className="w-24">
                  <span className="text-[11px] font-mono text-white/40">{col.id}</span>
                </div>
                <div className="w-64 flex flex-col">
                  <span className="text-sm font-bold tracking-tight uppercase group-hover:text-cyan-500 transition-colors">{col.partner}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className={cn("w-1 h-1 rounded-full bg-cyan-500")} />
                    <span className="text-[9px] text-white/20 uppercase tracking-widest">{col.impact} Priority</span>
                  </div>
                </div>
                <div className="px-3 py-1 border border-white/5 bg-white/[0.02] text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {col.type}
                </div>
              </div>

              <div className="flex items-center space-x-20">
                <div className="flex items-center space-x-2">
                  <span className={cn("text-[10px] uppercase tracking-widest font-bold", 
                    col.status === 'Synced' ? "text-green-500" : "text-cyan-500/80"
                  )}>{col.status}</span>
                </div>
                <div className="w-16 text-right">
                  <span className="text-[10px] text-white/20 font-mono uppercase">{col.since}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CollaborateAdmin;
