"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Edit2, Trash2, Globe, Image as ImageIcon, 
  ExternalLink, Layers, Save, X, RefreshCw, AlertCircle,
  Download, Film, Video, PlayCircle, HardDrive
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Asset {
  id: string;
  name: string;
  type: string;
  url: string;
  size: string;
  dimensions: string;
  created_at: string;
}

export default function MediaManager() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: "", url: "", type: "image", size: "0 MB", dimensions: "N/A" });

  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    setLoading(true);
    const { data, error } = await supabase
      .from('media_assets')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setAssets(data);
    }
    setLoading(false);
  }

  async function handleAdd() {
    if (!newAsset.name || !newAsset.url) return;
    setUploading(true);
    const { error } = await supabase.from('media_assets').insert([newAsset]);
    if (!error) {
      setNewAsset({ name: "", url: "", type: "image", size: "0 MB", dimensions: "N/A" });
      fetchAssets();
    }
    setUploading(false);
  }

  async function handleDelete(id: string) {
    if (confirm("Permanently purge this asset?")) {
      await supabase.from('media_assets').delete().eq('id', id);
      fetchAssets();
    }
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-2">
            <Film size={11} />
            <span>Infrastructure // Media_Storage</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white">Media Library</h1>
        </div>

        <button 
          onClick={() => (document.getElementById('upload-form') as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          <Plus size={14} />
          Register_New_Asset
        </button>
      </div>

      {/* Upload Form */}
      <div id="upload-form" className="p-8 border border-white/5 bg-black/40 space-y-6">
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 border-b border-white/5 pb-4">Initialize_Stream</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Asset Name</label>
            <input value={newAsset.name} onChange={e => setNewAsset({...newAsset, name: e.target.value})} placeholder="Cinematic_Master_01" className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Source URL</label>
            <input value={newAsset.url} onChange={e => setNewAsset({...newAsset, url: e.target.value})} placeholder="https://..." className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Type</label>
            <select value={newAsset.type} onChange={e => setNewAsset({...newAsset, type: e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none appearance-none">
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
            </select>
          </div>
        </div>
        <button onClick={handleAdd} className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
          Register_Asset
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading ? (
          Array(10).fill(0).map((_, i) => <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 animate-pulse" />)
        ) : assets.map((asset) => (
          <div key={asset.id} className="group relative aspect-square border border-white/5 bg-black overflow-hidden hover:border-cyan-500/30 transition-all">
            <img src={asset.url} alt={asset.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <div className="text-[9px] uppercase tracking-widest font-bold truncate text-white mb-1">{asset.name}</div>
              <div className="flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-widest text-white/40">{asset.type}</span>
                <button onClick={() => handleDelete(asset.id)} className="p-1 hover:text-red-500 transition-colors">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
