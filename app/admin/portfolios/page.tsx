"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Edit2, Trash2, Globe, Image as ImageIcon, 
  ExternalLink, Layers, Save, X, RefreshCw, AlertCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  category: string;
  link_url: string;
  is_featured: boolean;
}

export default function PortfolioManager() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    const { data, error } = await (supabase.from('portfolios') as any)
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setItems(data);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!editingItem?.title) return;

    const slug = editingItem.slug || editingItem.title.toLowerCase().replace(/ /g, '-');
    const itemToSave = { ...editingItem, slug };

    let error;
    if (itemToSave.id) {
      ({ error } = await (supabase.from('portfolios') as any)
        .update(itemToSave as any)
        .eq('id', itemToSave.id));
    } else {
      ({ error } = await (supabase.from('portfolios') as any)
        .insert([itemToSave] as any));
    }

    if (!error) {
      setEditingItem(null);
      fetchItems();
    } else {
      alert("Error saving item: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this project?")) {
      const { error } = await supabase
        .from('portfolios')
        .delete()
        .eq('id', id);
      
      if (!error) fetchItems();
    }
  }

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60 mb-2">
            <Layers size={11} />
            <span>Infrastructure // Portfolio</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Project Portfolios</h1>
        </div>

        <button
          onClick={() => setEditingItem({ title: "", description: "", category: "SaaS", image_url: "", link_url: "" })}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          <Plus size={14} />
          Initialize_Project
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/20 group-focus-within:text-cyan-500 transition-colors">
          <Search size={16} />
        </div>
        <input
          type="text"
          placeholder="Filter ecosystems by name or sector..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-black/40 border border-white/5 py-4 pl-12 pr-4 text-[11px] uppercase tracking-widest text-white/60 focus:border-cyan-500/30 focus:outline-none transition-all font-mono"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="h-[200px] bg-white/[0.02] border border-white/5 animate-pulse" />
          ))
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="group border border-white/5 bg-black/40 hover:border-cyan-500/20 transition-all flex flex-col h-full"
            >
              <div className="relative h-40 overflow-hidden bg-white/5">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10">
                    <ImageIcon size={32} />
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setEditingItem(item)}
                    className="p-2 bg-black/80 border border-white/10 text-white/40 hover:text-cyan-500 transition-colors"
                  >
                    <Edit2 size={12} />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-black/80 border border-white/10 text-white/40 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[9px] uppercase tracking-widest text-cyan-500/60 font-mono mb-2">{item.category}</div>
                <h3 className="text-sm font-bold uppercase tracking-tight mb-2 text-white/80">{item.title}</h3>
                <p className="text-[10px] text-white/30 line-clamp-2 leading-relaxed mb-6 uppercase tracking-wider">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[8px] text-white/10 font-mono">NODE_{item.id.substring(0, 8)}</span>
                  {item.link_url && (
                    <a href={item.link_url} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border border-dashed border-white/10">
             <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
             <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No matching projects found in the database.</div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl z-[101] overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Globe size={14} className="text-cyan-500" />
                  <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">
                    {editingItem.id ? "Edit_Project" : "Initialize_New_Project"}
                  </h2>
                </div>
                <button onClick={() => setEditingItem(null)} className="text-white/30 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Title</label>
                    <input
                      type="text"
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Category</label>
                    <select
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors appearance-none"
                    >
                      <option value="SaaS">SaaS</option>
                      <option value="AI / ML">AI / ML</option>
                      <option value="Media">Media</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Venture">Venture</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Image URL</label>
                  <input
                    type="text"
                    value={editingItem.image_url}
                    placeholder="https://images.unsplash.com/..."
                    onChange={(e) => setEditingItem({...editingItem, image_url: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">External Link</label>
                  <input
                    type="text"
                    value={editingItem.link_url}
                    placeholder="https://..."
                    onChange={(e) => setEditingItem({...editingItem, link_url: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Brief Description</label>
                  <textarea
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    rows={3}
                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:border-cyan-500/50 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end gap-4">
                  <button
                    onClick={() => setEditingItem(null)}
                    className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
                  >
                    Abort_Process
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-8 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
                  >
                    <Save size={12} />
                    Push_to_Ecosystem
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
