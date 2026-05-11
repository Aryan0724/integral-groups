"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlayCircle, 
  Upload, 
  Search, 
  Filter, 
  Grid, 
  List, 
  MoreHorizontal, 
  Maximize2, 
  Download, 
  Trash2, 
  Settings,
  Image as ImageIcon,
  Film,
  Video,
  Music,
  Clock,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";

const assets = [
  { id: 'ASSET-01', name: 'Vision_Manifesto_2026.mp4', type: 'video', size: '142 MB', date: '2h ago', dimensions: '4K', preview: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' },
  { id: 'ASSET-02', name: 'Core_Architecture_Blueprint.png', type: 'image', size: '12 MB', date: '1d ago', dimensions: '8000x4000', preview: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80' },
  { id: 'ASSET-03', name: 'Ecosystem_Engine_Loop.mp4', type: 'video', size: '84 MB', date: '3d ago', dimensions: '1080p', preview: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80' },
  { id: 'ASSET-04', name: 'Intelligence_Dossier_Asset.jpg', type: 'image', size: '4 MB', date: '5d ago', dimensions: '3000x2000', preview: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80' },
];

const MediaAdmin = () => {
  const [view, setView] = useState('grid');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedAsset = assets.find(a => a.id === selectedId);

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Film size={12} />
            <span>Cinematic_Assets // Media_Infrastructure</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Media Management</h1>
        </div>
        
        <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-all flex items-center space-x-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <Upload size={14} />
          <span>Upload_New_Stream</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* MEDIA BROWSER */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* SEARCH & FILTER BAR */}
          <div className="flex items-center justify-between gap-4 p-2 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search Assets..."
                className="w-full bg-transparent border-none py-3 pl-12 pr-6 text-xs uppercase tracking-widest placeholder:text-white/10 focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-1">
              <button onClick={() => setView('grid')} className={cn("p-2 rounded-lg transition-all", view === 'grid' ? "bg-white/10 text-cyan-500" : "text-white/20")}>
                <Grid size={18} />
              </button>
              <button onClick={() => setView('list')} className={cn("p-2 rounded-lg transition-all", view === 'list' ? "bg-white/10 text-cyan-500" : "text-white/20")}>
                <List size={18} />
              </button>
              <div className="w-px h-6 bg-white/5 mx-2" />
              <button className="p-2 text-white/20 hover:text-white transition-colors">
                <Filter size={18} />
              </button>
            </div>
          </div>

          {/* ASSET GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {assets.map((asset, i) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedId(asset.id)}
                className={cn(
                  "group relative aspect-video border transition-all duration-500 cursor-pointer overflow-hidden",
                  selectedId === asset.id ? "border-cyan-500 ring-1 ring-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]" : "border-white/5 hover:border-white/20"
                )}
              >
                <img src={asset.preview} alt={asset.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-60" />
                
                {/* Overlay Metadata */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent pt-12">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold truncate pr-4 text-white/80 group-hover:text-white transition-colors">{asset.name}</span>
                    {asset.type === 'video' ? <PlayCircle size={14} className="text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" /> : <ImageIcon size={14} className="text-white/20" />}
                  </div>
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-white/20">
                    <span>{asset.dimensions}{" // "}{asset.size}</span>
                    <span>{asset.date}</span>
                  </div>
                </div>

                {/* Selection Pulse */}
                {selectedId === asset.id && (
                  <div className="absolute inset-0 border-2 border-cyan-500/30 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ASSET INSPECTOR SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-black/40 border border-white/5 p-8 flex flex-col min-h-[500px]">
            {selectedAsset ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8 h-full flex flex-col"
              >
                <div className="space-y-4">
                  <div className="aspect-video border border-white/10 bg-black relative group overflow-hidden">
                    <img src={selectedAsset.preview} alt="Preview" className="w-full h-full object-cover opacity-60 grayscale" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                      <Maximize2 size={24} className="text-white cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold truncate">{selectedAsset.name}</h3>
                    <div className="text-[9px] uppercase tracking-widest text-white/20">Ref: {selectedAsset.id}</div>
                  </div>
                </div>

                <div className="space-y-4 py-6 border-y border-white/5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-white/20">Resolution</span>
                      <div className="text-[10px] text-white/60 font-mono uppercase">{selectedAsset.dimensions}</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-white/20">Size</span>
                      <div className="text-[10px] text-white/60 font-mono uppercase">{selectedAsset.size}</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-white/20">Type</span>
                      <div className="text-[10px] text-white/60 font-mono uppercase">{selectedAsset.type}</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-widest text-white/20">Created</span>
                      <div className="text-[10px] text-white/60 font-mono uppercase">{selectedAsset.date}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-2">
                  <button className="w-full py-3 bg-white/[0.03] border border-white/5 text-[9px] uppercase tracking-[0.2em] text-white/60 hover:bg-white hover:text-black transition-all font-bold flex items-center justify-center space-x-2">
                    <Download size={14} />
                    <span>Download_Source</span>
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 border border-white/5 text-[9px] uppercase tracking-[0.2em] text-white/40 hover:text-cyan-500 transition-all flex items-center justify-center space-x-2">
                      <Settings size={12} />
                      <span>Edit</span>
                    </button>
                    <button className="py-3 border border-white/5 text-[9px] uppercase tracking-[0.2em] text-red-500/40 hover:text-red-500 transition-all flex items-center justify-center space-x-2">
                      <Trash2 size={12} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="p-6 rounded-full bg-white/[0.02] border border-white/5">
                  <HardDrive size={32} className="text-white/10" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">No_Selection_Active</span>
                  <p className="text-[9px] uppercase tracking-widest text-white/10 leading-relaxed">Select an asset to view its operational metadata</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default MediaAdmin;
