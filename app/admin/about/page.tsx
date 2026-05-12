"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, AlertCircle, CheckCircle2, Info, Users, Image as ImageIcon, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const SECTION_GROUPS = [
  {
    id: "about_hero",
    label: "About Hero",
    keys: ["about.hero.title", "about.hero.subtitle"]
  },
  {
    id: "philosophy",
    label: "Core Philosophy",
    keys: ["about.philosophy.title", "about.philosophy.quote", "about.philosophy.desc"]
  }
];

export default function AboutManager() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [founders, setFounders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const [editingFounder, setEditingFounder] = useState<any | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const contentPromise = supabase.from('site_content').select('*');
    const foundersPromise = supabase.from('founders').select('*').order('order_index');

    const [contentRes, foundersRes] = await Promise.all([contentPromise, foundersPromise]);

    if (!contentRes.error && contentRes.data) {
      const contentMap: Record<string, string> = {};
      contentRes.data.forEach(item => {
        contentMap[item.key] = item.value;
      });
      setContent(contentMap);
    }

    if (!foundersRes.error && foundersRes.data) {
      setFounders(foundersRes.data);
    }

    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    
    // Save content
    const updates = Object.entries(content)
      .filter(([key]) => key.startsWith('about.'))
      .map(([key, value]) => ({ key, value }));

    const { error: contentError } = await supabase
      .from('site_content')
      .upsert(updates, { onConflict: 'key' });

    if (contentError) {
      setStatus({ type: 'error', message: "Failed to save content." });
    } else {
      setStatus({ type: 'success', message: "Changes saved." });
      setTimeout(() => setStatus(null), 3000);
    }
    setSaving(false);
  }

  async function handleFounderSave() {
    if (!editingFounder.name) return;
    const { error } = await supabase
      .from('founders')
      .upsert(editingFounder);
    
    if (!error) {
      setEditingFounder(null);
      fetchData();
    }
  }

  async function deleteFounder(id: string) {
    if (!confirm("Delete this founder?")) return;
    await supabase.from('founders').delete().eq('id', id);
    fetchData();
  }

  const handleChange = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8 pb-20">
      {/* ... (Existing Save Button & Title) ... */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60 mb-2">
            <Info size={11} />
            <span>Management_Console // About_Identity</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">About Section</h1>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          {saving ? <RefreshCw className="animate-spin" size={12} /> : <Save size={12} />}
          Commit_Identity
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {SECTION_GROUPS.map((group) => (
          <div key={group.id} className="border border-white/5 bg-black/40">
            <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01]">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{group.label}</h2>
            </div>
            <div className="p-8 space-y-6">
              {group.keys.map(key => (
                <div key={key} className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">{key}</label>
                  {key.includes('desc') || key.includes('subtitle') || key.includes('quote') ? (
                    <textarea
                      value={content[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      rows={3}
                      className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:border-cyan-500/50 outline-none transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={content[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Founders Management */}
        <div className="border border-white/5 bg-black/40">
          <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Founding Leadership</h2>
            <button 
              onClick={() => setEditingFounder({ name: "", role: "", bio: "", image_url: "", order_index: founders.length })}
              className="text-[9px] uppercase tracking-widest text-cyan-500 font-bold hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Plus size={12} /> Add_Founder
            </button>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {founders.length > 0 ? founders.map(f => (
                <div key={f.id} className="p-4 border border-white/5 bg-white/[0.02] group relative">
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setEditingFounder(f)} className="text-cyan-500/50 hover:text-cyan-500"><Plus size={12} /></button>
                    <button onClick={() => deleteFounder(f.id)} className="text-red-500/50 hover:text-red-500"><Trash2 size={12} /></button>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-tight">{f.name}</div>
                  <div className="text-[9px] text-cyan-500/60 uppercase tracking-widest mb-2">{f.role}</div>
                  <div className="text-[10px] text-white/30 line-clamp-2 uppercase leading-tight">{f.bio}</div>
                </div>
              )) : (
                <div className="col-span-full py-10 text-center border border-dashed border-white/10 text-[10px] uppercase tracking-widest text-white/20">
                  No founders configured in the database.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Founder Modal */}
      {editingFounder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setEditingFounder(null)} />
          <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 p-8 space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-white/5 pb-4">Configure_Founder</h2>
            
            <div className="space-y-4">
              <input 
                placeholder="Name"
                value={editingFounder.name}
                onChange={e => setEditingFounder({...editingFounder, name: e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" 
              />
              <input 
                placeholder="Role"
                value={editingFounder.role}
                onChange={e => setEditingFounder({...editingFounder, role: e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" 
              />
              <textarea 
                placeholder="Bio"
                value={editingFounder.bio}
                onChange={e => setEditingFounder({...editingFounder, bio: e.target.value})}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm outline-none resize-none" 
              />
              <input 
                placeholder="Image URL"
                value={editingFounder.image_url}
                onChange={e => setEditingFounder({...editingFounder, image_url: e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" 
              />
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
              <button onClick={() => setEditingFounder(null)} className="text-[10px] uppercase tracking-widest">Cancel</button>
              <button onClick={handleFounderSave} className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Save_Founder</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
