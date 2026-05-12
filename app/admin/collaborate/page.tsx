"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, AlertCircle, CheckCircle2, Users, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function CollaborateManager() {
  const [content, setContent] = useState<Record<string, string>>({
    "collab.hero.title": "Assemble The Team",
    "collab.hero.subtitle": "We are building engineers, creators, strategists, and system thinkers into a modular execution force.",
    "collab.cta.title": "Send your dossier.",
    "collab.cta.desc": "No formal process. No corporate HR."
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .or('key.ilike.collab.%');

    if (!error && data) {
      const map: Record<string, string> = { ...content };
      (data as any[]).forEach(item => {
        map[item.key] = item.value;
      });
      setContent(map);
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    const updates = Object.entries(content).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from('site_content').upsert(updates as any, { onConflict: 'key' });
    
    if (!error) {
      setTimeout(() => setSaving(false), 500);
    } else {
      alert("Error: " + error.message);
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-2">
            <Users size={11} />
            <span>Management_Console // Collaborations</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Collaborate Page</h1>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          {saving ? <RefreshCw className="animate-spin" size={12} /> : <Save size={12} />}
          Commit_Identity
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="border border-white/5 bg-black/40 p-8 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4 border-b border-white/5 pb-4">Hero Content</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Hero Title</label>
              <input
                type="text"
                value={content["collab.hero.title"]}
                onChange={(e) => setContent({...content, "collab.hero.title": e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Hero Subtitle</label>
              <textarea
                value={content["collab.hero.subtitle"]}
                onChange={(e) => setContent({...content, "collab.hero.subtitle": e.target.value})}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:border-cyan-500/50 outline-none resize-none"
              />
            </div>
          </div>
        </div>

        <div className="border border-white/5 bg-black/40 p-8 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4 border-b border-white/5 pb-4">Call to Action (CTA)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">CTA Title</label>
              <input
                type="text"
                value={content["collab.cta.title"]}
                onChange={(e) => setContent({...content, "collab.cta.title": e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">CTA Description</label>
              <textarea
                value={content["collab.cta.desc"]}
                onChange={(e) => setContent({...content, "collab.cta.desc": e.target.value})}
                rows={3}
                className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:border-cyan-500/50 outline-none resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
