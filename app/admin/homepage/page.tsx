"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Settings, 
  Eye, 
  Save, 
  Plus, 
  Image as ImageIcon, 
  Type, 
  MousePointer2, 
  Layers,
  ChevronRight,
  Maximize2,
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: 'hero', name: 'Hero Section', status: 'Live', lastEdit: '2h ago' },
  { id: 'ecosystem', name: 'Ecosystem Map', status: 'Live', lastEdit: '1d ago' },
  { id: 'intelligence', name: 'Intelligence Feed', status: 'Live', lastEdit: '5h ago' },
  { id: 'roadmap', name: 'Roadmap Phases', status: 'Draft', lastEdit: '10m ago' },
  { id: 'transmission', name: 'Mission Transmission', status: 'Live', lastEdit: '3d ago' },
];

const HomepageAdmin = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [viewport, setViewport] = useState('desktop');

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Layout size={12} />
            <span>Narrative_Control // Frontend_Deployment</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Homepage Control</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-white transition-all flex items-center space-x-2">
            <Eye size={14} />
            <span>Live_Preview</span>
          </button>
          <button className="px-8 py-2.5 bg-cyan-500 text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Save size={14} />
            <span>Deploy_Changes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SECTION SELECTOR SIDEBAR */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2 mb-2 text-[9px] uppercase tracking-[0.3em] text-white/20">
            <span>Modular_Blocks</span>
            <Plus size={12} className="cursor-pointer hover:text-cyan-500" />
          </div>
          <div className="space-y-1.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center justify-between p-4 border transition-all duration-300 group text-left",
                  activeSection === section.id 
                    ? "bg-white/[0.05] border-white/20 text-white" 
                    : "bg-black/40 border-white/5 text-white/40 hover:border-white/10"
                )}
              >
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest font-bold mb-1">{section.name}</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/20">{section.lastEdit}</span>
                </div>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  section.status === 'Live' ? "bg-green-500/60 shadow-[0_0_5px_rgba(34,197,94,0.5)]" : "bg-white/10"
                )} />
              </button>
            ))}
          </div>
        </div>

        {/* EDITOR AREA */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* PREVIEW VIEWPORT CONTROL */}
          <div className="bg-black/60 border border-white/5 p-3 flex items-center justify-between rounded-xl">
            <div className="flex items-center space-x-1">
              {[
                { id: 'desktop', icon: Monitor },
                { id: 'tablet', icon: Tablet },
                { id: 'mobile', icon: Smartphone },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setViewport(v.id)}
                  className={cn(
                    "p-2 rounded-lg transition-all",
                    viewport === v.id ? "bg-white/10 text-cyan-500" : "text-white/20 hover:text-white/40"
                  )}
                >
                  <v.icon size={16} />
                </button>
              ))}
            </div>
            <div className="text-[9px] uppercase tracking-widest text-white/20 font-mono">
              Viewport: {viewport}_Mode // 100%_Scale
            </div>
            <button className="p-2 text-white/20 hover:text-white transition-colors">
              <RefreshCw size={14} />
            </button>
          </div>

          {/* DYNAMIC EDITOR FIELDS */}
          <div className="bg-black/40 border border-white/5 p-10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-grid opacity-[0.02] pointer-events-none" />
            
            <div className="space-y-6 max-w-2xl">
              {/* Field Group: Narrative */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-white/20 mb-2">
                  <Type size={14} />
                  <span className="text-[9px] uppercase tracking-[0.3em]">Operational_Copy</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Hero_Primary_Title</label>
                    <input 
                      type="text" 
                      defaultValue="Engineering Multi-Sector Execution"
                      className="w-full bg-white/[0.03] border border-white/5 p-4 text-xl font-bold tracking-tight uppercase focus:border-cyan-500/30 focus:bg-white/[0.05] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Hero_Subtitle_Manifesto</label>
                    <textarea 
                      defaultValue="A unified digital ecosystem dedicated to building high-throughput infrastructure and modular systems."
                      className="w-full bg-white/[0.03] border border-white/5 p-4 text-sm text-white/60 leading-relaxed focus:border-cyan-500/30 focus:bg-white/[0.05] outline-none transition-all h-24 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field Group: CTA */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-2 text-white/20 mb-2">
                  <MousePointer2 size={14} />
                  <span className="text-[9px] uppercase tracking-[0.3em]">Command_Actions</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Primary_CTA_Label</label>
                    <input 
                      type="text" 
                      defaultValue="Explore_Ecosystem"
                      className="w-full bg-white/[0.03] border border-white/5 p-3 text-[10px] uppercase tracking-[0.2em] font-bold focus:border-cyan-500/30 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-widest text-white/30 ml-2">Secondary_CTA_Label</label>
                    <input 
                      type="text" 
                      defaultValue="Initiate_Briefing"
                      className="w-full bg-white/[0.03] border border-white/5 p-3 text-[10px] uppercase tracking-[0.2em] font-bold focus:border-cyan-500/30 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Field Group: Visuals */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-2 text-white/20 mb-2">
                  <ImageIcon size={14} />
                  <span className="text-[9px] uppercase tracking-[0.3em]">Atmospheric_Layer</span>
                </div>
                <div className="p-6 border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center justify-center hover:bg-white/[0.03] hover:border-cyan-500/30 transition-all cursor-pointer group">
                  <div className="p-3 rounded-full bg-white/5 mb-3 group-hover:text-cyan-500 transition-colors">
                    <RefreshCw size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-white transition-colors">Sync_New_Visual_Asset</span>
                  <span className="text-[8px] text-white/10 uppercase tracking-widest mt-1">Recommended: 4K_RAW_SOURCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomepageAdmin;
