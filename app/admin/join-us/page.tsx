"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, AlertCircle, CheckCircle2, UserPlus, FileText, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function JoinUsManager() {
  const [content, setContent] = useState({
    title: "Join the Future of Infrastructure",
    description: "We are always looking for visionary engineers, designers, and strategists to join our ecosystem.",
    perks: ["Remote-first", "High Autonomy", "Cutting-edge Stack"],
    roles: [
      { title: "Senior AI Engineer", location: "Remote / Hybrid", link: "#" },
      { title: "Systems Architect", location: "Remote", link: "#" }
    ]
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    const { data, error } = await supabase
      .from('join_us_config')
      .select('*')
      .limit(1)
      .single();

    if (!error && data) {
      setContent({
        title: data.title,
        description: data.description,
        perks: data.perks || [],
        roles: data.open_roles || []
      });
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    const { error } = await supabase
      .from('join_us_config')
      .upsert({
        id: 'default', // Using a fixed ID for single config
        title: content.title,
        description: content.description,
        perks: content.perks,
        open_roles: content.roles
      } as any);

    if (error) {
      setStatus({ type: 'error', message: "Failed to save." });
    } else {
      setStatus({ type: 'success', message: "Saved successfully." });
      setTimeout(() => setStatus(null), 3000);
    }
    setSaving(false);
  }

  const addRole = () => {
    setContent(prev => ({
      ...prev,
      roles: [...prev.roles, { title: "New Role", location: "Remote", link: "" }]
    }));
  };

  const removeRole = (index: number) => {
    setContent(prev => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index)
    }));
  };

  const updateRole = (index: number, field: string, value: string) => {
    const newRoles = [...content.roles];
    newRoles[index] = { ...newRoles[index], [field]: value };
    setContent(prev => ({ ...prev, roles: newRoles }));
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60 mb-2">
            <UserPlus size={11} />
            <span>Management_Console // Recruitment</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Join Us Content</h1>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          {saving ? <RefreshCw className="animate-spin" size={12} /> : <Save size={12} />}
          Commit_Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Info */}
        <div className="border border-white/5 bg-black/40 p-8 space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4 border-b border-white/5 pb-4">General Information</h2>
          
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Main Title</label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => setContent({...content, title: e.target.value})}
              className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-cyan-500/50 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Description</label>
            <textarea
              value={content.description}
              onChange={(e) => setContent({...content, description: e.target.value})}
              rows={4}
              className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm focus:border-cyan-500/50 outline-none transition-colors resize-none"
            />
          </div>
        </div>

        {/* Roles Management */}
        <div className="border border-white/5 bg-black/40 p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Open Positions</h2>
            <button onClick={addRole} className="text-cyan-500 hover:text-cyan-400 transition-colors">
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {content.roles.map((role, i) => (
              <div key={i} className="p-4 bg-white/[0.02] border border-white/5 space-y-3 relative group">
                <button 
                  onClick={() => removeRole(i)}
                  className="absolute top-2 right-2 text-white/10 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={12} />
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={role.title}
                    placeholder="Role Title"
                    onChange={(e) => updateRole(i, 'title', e.target.value)}
                    className="bg-transparent border-b border-white/10 py-1 text-[11px] uppercase tracking-widest text-white/80 focus:border-cyan-500 outline-none"
                  />
                  <input
                    type="text"
                    value={role.location}
                    placeholder="Location"
                    onChange={(e) => updateRole(i, 'location', e.target.value)}
                    className="bg-transparent border-b border-white/10 py-1 text-[11px] uppercase tracking-widest text-white/40 focus:border-cyan-500 outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={role.link}
                  placeholder="Application Link"
                  onChange={(e) => updateRole(i, 'link', e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-1 text-[10px] text-white/20 focus:border-cyan-500 outline-none font-mono"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
