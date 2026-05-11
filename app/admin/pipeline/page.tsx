"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronRight, 
  Mail, 
  Clock, 
  Tag, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  MoreVertical,
  Cpu,
  Layers,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  { id: 'eng', name: 'Engineering', icon: Cpu, color: 'text-cyan-500' },
  { id: 'creative', name: 'Creative', icon: Zap, color: 'text-purple-500' },
  { id: 'strategy', name: 'Strategy', icon: Layers, color: 'text-green-500' },
  { id: 'research', name: 'Research', icon: Search, color: 'text-blue-500' },
];

const applicants = [
  { id: 'APP-001', name: 'Merton, Alex', track: 'Engineering', status: 'In Review', date: '2h ago', level: 'Senior', ref: 'INT-4A2' },
  { id: 'APP-002', name: 'Sharma, Priya', track: 'Research', status: 'Received', date: '5h ago', level: 'Lead', ref: 'INT-9B1' },
  { id: 'APP-003', name: 'Kim, Darius', track: 'Creative', status: 'Approved', date: '1d ago', level: 'Principal', ref: 'INT-1C4' },
  { id: 'APP-004', name: 'Laurent, Mia', track: 'Strategy', status: 'Declined', date: '2d ago', level: 'Director', ref: 'INT-2D8' },
];

const PipelineAdmin = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <UserCheck size={12} />
            <span>Infrastructure_Pipeline // Talent_Logistics</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Application Management</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono">Pipeline_Status</span>
            <span className="text-[10px] text-cyan-500/80 uppercase tracking-widest font-mono">142_Records_Active</span>
          </div>
          <button className="px-6 py-2.5 bg-white/[0.03] border border-white/10 text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all">
            Export_Archive
          </button>
        </div>
      </div>

      {/* TRACK OVERVIEW GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((track, i) => (
          <motion.div 
            key={track.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 bg-black/40 border border-white/5 hover:border-white/10 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 bg-white/[0.02] rounded-lg", track.color)}>
                <track.icon size={16} />
              </div>
              <span className="text-[10px] font-mono text-white/10 group-hover:text-cyan-500/40 transition-colors">0{i+1}</span>
            </div>
            <div className="text-2xl font-light tracking-tight mb-1">34</div>
            <div className="text-[9px] uppercase tracking-widest text-white/30">{track.name} Track</div>
          </motion.div>
        ))}
      </div>

      {/* PIPELINE LOG */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-6 pb-2 border-b border-white/5 text-[9px] uppercase tracking-widest text-white/20">
          <div className="flex items-center space-x-24">
            <span className="w-24">Reference_ID</span>
            <span className="w-64">Applicant_Entity</span>
            <span>Discipline_Track</span>
          </div>
          <div className="flex items-center space-x-20">
            <span>Operational_Status</span>
            <span className="w-16">Timestamp</span>
          </div>
        </div>

        <div className="space-y-2">
          {applicants.map((app, i) => (
            <div key={app.id} className="group flex flex-col">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                className={cn(
                  "flex items-center justify-between px-6 py-5 bg-black/40 border border-white/5 hover:bg-white/[0.02] hover:border-white/10 cursor-pointer transition-all duration-300",
                  expandedId === app.id ? "bg-white/[0.03] border-cyan-500/20" : ""
                )}
              >
                <div className="flex items-center space-x-24">
                  <div className="w-24 flex items-center space-x-3">
                    <div className={cn("w-1 h-1 rounded-full", 
                      app.status === 'Approved' ? "bg-green-500" : 
                      app.status === 'Declined' ? "bg-red-500" : 
                      "bg-cyan-500 animate-pulse"
                    )} />
                    <span className="text-[11px] font-mono text-white/40">{app.id}</span>
                  </div>
                  <div className="w-64 flex flex-col">
                    <span className="text-sm font-bold tracking-tight uppercase group-hover:text-cyan-500 transition-colors">{app.name}</span>
                    <span className="text-[9px] text-white/20 uppercase tracking-widest">{app.level} Role</span>
                  </div>
                  <div className={cn("px-3 py-1 border border-white/5 bg-white/[0.02] text-[9px] uppercase tracking-[0.2em]", 
                    tracks.find(t => t.name === app.track)?.color || "text-white/40"
                  )}>
                    {app.track}
                  </div>
                </div>

                <div className="flex items-center space-x-20">
                  <div className="flex items-center space-x-2">
                    <span className={cn("text-[10px] uppercase tracking-widest font-bold", 
                      app.status === 'Approved' ? "text-green-500" : 
                      app.status === 'Declined' ? "text-red-500/60" : 
                      "text-cyan-500/80"
                    )}>{app.status}</span>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-[10px] text-white/20 font-mono uppercase">{app.date}</span>
                  </div>
                </div>
              </motion.div>

              {/* EXPANDED CONTENT */}
              <AnimatePresence>
                {expandedId === app.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white/[0.01] border-x border-white/5"
                  >
                    <div className="p-10 border-b border-white/5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-3">
                          <span className="text-[9px] uppercase tracking-widest text-white/20">Operational_Manifesto</span>
                          <p className="text-sm text-white/60 leading-relaxed max-w-2xl font-light italic">
                            "Systems architect with 6 years in distributed infrastructure. Interested in contributing to the modular execution layer at Integral Labs. Focused on autonomous coordination systems and high-throughput data pipes."
                          </p>
                        </div>
                        <div className="flex items-center space-x-8 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-white/20 mb-1">Contact_Entity</span>
                            <span className="text-xs text-white/80 font-mono">alex.merton@sys_node.ext</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-white/20 mb-1">System_Ref</span>
                            <span className="text-xs text-white/80 font-mono">#{app.ref}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-4">
                          <span className="text-[9px] uppercase tracking-widest text-white/20">Review_Protocols</span>
                          <div className="space-y-2">
                            <button className="w-full py-3 bg-white text-black text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-cyan-500 transition-colors flex items-center justify-center space-x-2">
                              <CheckCircle2 size={12} />
                              <span>Authorize_Dossier</span>
                            </button>
                            <button className="w-full py-3 bg-white/[0.03] border border-white/10 text-white/60 text-[9px] uppercase tracking-[0.3em] hover:bg-white/[0.05] transition-colors flex items-center justify-center space-x-2">
                              <AlertCircle size={12} />
                              <span>Request_Diagnostic</span>
                            </button>
                            <button className="w-full py-3 text-red-500/40 hover:text-red-500 text-[9px] uppercase tracking-[0.3em] transition-colors flex items-center justify-center space-x-2">
                              <XCircle size={12} />
                              <span>Terminate_Process</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PipelineAdmin;
