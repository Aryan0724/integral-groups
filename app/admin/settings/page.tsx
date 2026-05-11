"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Shield, 
  Lock, 
  Globe, 
  Cpu, 
  Palette, 
  Bell, 
  Key,
  ChevronRight,
  Monitor,
  Zap,
  Save,
  RefreshCw,
  Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

const settingGroups = [
  { id: 'general', name: 'General Infrastructure', icon: Globe, description: 'Ecosystem branding, SEO, and global metadata configuration.' },
  { id: 'security', name: 'Security Protocols', icon: Shield, description: 'Authentication layers, role clearances, and access logs.' },
  { id: 'interface', name: 'Interface Dynamics', icon: Palette, description: 'Theme parameters, animation systems, and visual engine.' },
  { id: 'system', name: 'System Integration', icon: Cpu, description: 'API deployments, external linkages, and database sync.' },
];

const SettingsAdmin = () => {
  const [activeGroup, setActiveGroup] = useState('general');

  return (
    <div className="space-y-10 pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Settings size={12} />
            <span>Operational_Configuration // System_Parameters</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Global Settings</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-white transition-all flex items-center space-x-2">
            <RefreshCw size={14} />
            <span>Reset_Defaults</span>
          </button>
          <button className="px-8 py-2.5 bg-cyan-500 text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Save size={14} />
            <span>Update_Infrastructure</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SETTING GROUPS SELECTOR */}
        <div className="space-y-2">
          {settingGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={cn(
                "w-full flex items-start space-x-4 p-5 border transition-all duration-300 text-left relative overflow-hidden group",
                activeGroup === group.id 
                  ? "bg-white/[0.05] border-white/20 text-white" 
                  : "bg-black/40 border-white/5 text-white/40 hover:border-white/10"
              )}
            >
              <group.icon size={18} className={cn(
                "shrink-0 mt-1 transition-colors duration-300",
                activeGroup === group.id ? "text-cyan-500" : "text-white/20"
              )} />
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-widest font-bold">{group.name}</div>
                <div className="text-[8px] uppercase tracking-widest text-white/20 leading-relaxed">{group.description}</div>
              </div>
              
              {activeGroup === group.id && (
                <motion.div 
                  layoutId="groupActive"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* SETTINGS FORM */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-black/40 border border-white/5 p-10 space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-grid opacity-[0.02] pointer-events-none" />
            
            <div className="space-y-10 max-w-2xl">
              {/* SECTION: BRANDING */}
              {activeGroup === 'general' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-1">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold">Ecosystem Identity</h2>
                    <p className="text-[9px] uppercase tracking-widest text-white/20">Manage global branding and narrative metadata.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Primary_Entity_Name</label>
                      <input 
                        type="text" 
                        defaultValue="Integral Group"
                        className="w-full bg-white/[0.03] border border-white/5 p-4 text-xs font-bold tracking-[0.2em] uppercase focus:border-cyan-500/30 focus:bg-white/[0.05] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Global_Descriptor</label>
                      <input 
                        type="text" 
                        defaultValue="Engineering Multi-Sector Execution"
                        className="w-full bg-white/[0.03] border border-white/5 p-4 text-xs font-bold tracking-[0.2em] uppercase focus:border-cyan-500/30 focus:bg-white/[0.05] outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Deployment_Node</label>
                        <div className="flex items-center space-x-2 bg-white/[0.03] border border-white/5 p-4 text-xs font-mono text-white/40">
                          <Terminal size={12} className="text-cyan-500" />
                          <span>integral.group.main_v4</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Infrastructure_Version</label>
                        <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 p-4 text-xs font-mono text-white/40">
                          <span>4.0.1_STABLE</span>
                          <span className="text-green-500/40 text-[8px]">UP_TO_DATE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SECTION: SECURITY */}
              {activeGroup === 'security' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-1">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold">Security Protocols</h2>
                    <p className="text-[9px] uppercase tracking-widest text-white/20">Manage authentication layers and clearance protocols.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-white/5 rounded-lg text-white/20 group-hover:text-cyan-500 transition-colors">
                          <Lock size={16} />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[10px] uppercase tracking-widest font-bold">Two-Factor Authentication</div>
                          <div className="text-[8px] uppercase tracking-widest text-white/20">Require secondary verification for Root access</div>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-cyan-500/20 rounded-full relative p-1 cursor-pointer">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full ml-auto shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-white/5 rounded-lg text-white/20 group-hover:text-cyan-500 transition-colors">
                          <Key size={16} />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[10px] uppercase tracking-widest font-bold">API Access Tokens</div>
                          <div className="text-[8px] uppercase tracking-widest text-white/20">Manage secure keys for external system linkages</div>
                        </div>
                      </div>
                      <button className="px-4 py-2 border border-white/10 text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-all font-bold">
                        Configure
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SECTION: INTERFACE */}
              {activeGroup === 'interface' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-1">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold">Interface Dynamics</h2>
                    <p className="text-[9px] uppercase tracking-widest text-white/20">Tune the visual engine and motion parameters.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Animation_Velocity</label>
                      <div className="space-y-4">
                        <div className="flex justify-between text-[9px] text-white/20 uppercase tracking-widest font-mono">
                          <span>Subconscious</span>
                          <span>Tactical</span>
                          <span>Kinetic</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full relative">
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                          <div className="h-full w-1/2 bg-cyan-500/20 rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 border border-white/5 bg-white/[0.01] space-y-4">
                        <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-white/40">
                          <Monitor size={12} />
                          <span>Motion Blur Layer</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest font-bold">Enabled</span>
                          <div className="w-8 h-4 bg-cyan-500/20 rounded-full relative p-0.5">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full ml-auto" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 border border-white/5 bg-white/[0.01] space-y-4">
                        <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-white/40">
                          <Zap size={12} />
                          <span>Haptic Feedback</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-white/20">Disabled</span>
                          <div className="w-8 h-4 bg-white/5 rounded-full relative p-0.5">
                            <div className="w-3 h-3 bg-white/10 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SettingsAdmin;
