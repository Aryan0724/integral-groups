"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, Globe, Shield, Terminal, Share2, Info } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SettingsManager() {
  const [content, setContent] = useState<Record<string, string>>({
    "site.name": "Integral Group",
    "site.tagline": "Engineering Intelligent Systems",
    "site.footer.copyright": "© 2026 Integral Group. All Rights Reserved.",
    "site.social.github": "https://github.com/integral",
    "site.social.twitter": "https://twitter.com/integral",
    "site.social.linkedin": "https://linkedin.com/company/integral"
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    const { data } = await supabase
      .from('site_content')
      .select('*')
      .or('key.ilike.site.%');

    if (data) {
      const map = { ...content };
      data.forEach(item => {
        map[item.key] = item.value;
      });
      setContent(map);
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    const updates = Object.entries(content).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from('site_content').upsert(updates, { onConflict: 'key' });
    if (!error) setTimeout(() => setSaving(false), 500);
    else { alert(error.message); setSaving(false); }
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-2">
            <Terminal size={11} />
            <span>Infrastructure // Global_Config</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white">System Settings</h1>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          {saving ? <RefreshCw className="animate-spin" size={12} /> : <Save size={12} />}
          Apply_Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branding */}
        <div className="p-8 border border-white/5 bg-black/40 space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield size={14} className="text-cyan-500" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Core Branding</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Site Name</label>
              <input value={content["site.name"]} onChange={e => setContent({...content, "site.name": e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Global Tagline</label>
              <input value={content["site.tagline"]} onChange={e => setContent({...content, "site.tagline": e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none" />
            </div>
          </div>
        </div>

        {/* Social Graph */}
        <div className="p-8 border border-white/5 bg-black/40 space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Share2 size={14} className="text-purple-500" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Social Infrastructure</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">GitHub URL</label>
              <input value={content["site.social.github"]} onChange={e => setContent({...content, "site.social.github": e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none font-mono" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Twitter URL</label>
              <input value={content["site.social.twitter"]} onChange={e => setContent({...content, "site.social.twitter": e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none font-mono" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border border-white/5 bg-black/40 space-y-6 md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <Info size={14} className="text-blue-500" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Footer Configuration</h2>
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Copyright Notice</label>
            <input value={content["site.footer.copyright"]} onChange={e => setContent({...content, "site.footer.copyright": e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
