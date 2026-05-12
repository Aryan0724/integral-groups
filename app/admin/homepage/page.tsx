"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, AlertCircle, CheckCircle2, Home, Layout, Terminal } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface ContentItem {
  key: string;
  value: string;
  description: string;
}

const SECTION_GROUPS = [
  {
    id: "hero",
    label: "Hero Section",
    keys: ["home.hero.title", "home.hero.subtitle", "home.hero.video_url"]
  },
  {
    id: "mission",
    label: "Mission Transmission",
    keys: ["home.mission.title", "home.mission.subtitle", "home.mission.quote", "home.mission.status", "home.mission.video_url", "home.mission.active"]
  },
  {
    id: "ticker",
    label: "Global Ticker",
    keys: ["home.ticker.items"]
  },
  {
    id: "roadmap",
    label: "Strategic Roadmap",
    keys: [
      "home.roadmap.p1.title", "home.roadmap.p1.items",
      "home.roadmap.p2.title", "home.roadmap.p2.items",
      "home.roadmap.p3.title", "home.roadmap.p3.items",
      "home.roadmap.p4.title", "home.roadmap.p4.items",
      "home.roadmap.p5.title", "home.roadmap.p5.items"
    ]
  },
  {
    id: "philosophy",
    label: "About & Philosophy",
    keys: ["about.hero.title", "about.hero.subtitle", "about.philosophy.title", "about.philosophy.quote", "about.philosophy.desc"]
  },
  {
    id: "systems",
    label: "Active Systems",
    keys: [
      "home.systems.logistics.title", 
      "home.systems.logistics.desc",
      "home.systems.vision.title",
      "home.systems.vision.desc",
      "home.systems.infra.title",
      "home.systems.infra.desc"
    ]
  }
];

export default function HomepageManager() {
  const [content, setContent] = useState<Record<string, string>>({
    "home.hero.title": "",
    "home.hero.subtitle": "",
    "home.ticker.items": "LOGISTICS_ENGINE // SENTINEL_VISION // NEXUS_INFRA // QUANTUM_EXECUTION",
    "home.roadmap.p1.title": "Digital Infrastructure & Systems",
    "home.roadmap.p1.items": "Core AI architecture design,Distributed node deployment,Industrial API framework,Strategic intelligence network",
    "home.roadmap.p2.title": "AI Automation Ecosystems",
    "home.roadmap.p2.items": "Autonomous workflow deployment,Predictive analytics mesh,Multi-agent system integration,Scale-ready infra hardening",
    "home.roadmap.p3.title": "Research & Intelligence Platforms",
    "home.roadmap.p3.items": "Real-time intelligence dashboard,Advanced robotics simulations,Systemic risk analysis engine,Public-facing research archive",
    "home.roadmap.p4.title": "Autonomous Systems & Robotics",
    "home.roadmap.p4.items": "Hardware-software integration,Edge-AI vision processing,Collaborative robotics testbed,System-wide autonomy layer",
    "home.roadmap.p5.title": "Industrial Technology Expansion",
    "home.roadmap.p5.items": "Full-scale autonomous factory OS,Planetary intelligence network,Multi-sector system synthesis,Post-industrial infrastructure"
  });
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    const { data, error } = await (supabase.from('site_content') as any)
      .select('*');

    if (error) {
      console.error("Error fetching content:", error);
      // Fallback/Mock for demo if supabase not connected
      const mock = {
        'home.hero.title': 'AI-Powered Automation for Every Decision',
        'home.hero.subtitle': 'A startup venture building the digital infrastructure...',
        'home.systems.logistics.title': 'Autonomous Logistics Engine',
        'home.systems.logistics.desc': 'Intelligent routing and supply chain automation...',
        'home.systems.vision.title': 'Sentinel Vision API',
        'home.systems.vision.desc': 'Computer vision and sensory intelligence...',
        'home.systems.infra.title': 'Nexus Infrastructure',
        'home.systems.infra.desc': 'Decentralized cloud and computational layers...'
      };
      setContent(mock);
    } else {
      const contentMap: Record<string, string> = {};
      const descMap: Record<string, string> = {};
      (data as any[]).forEach(item => {
        contentMap[item.key] = item.value;
        descMap[item.key] = item.description || "";
      });
      setContent(contentMap);
      setDescriptions(descMap);
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setStatus(null);

    const updates = Object.entries(content).map(([key, value]) => ({
      key,
      value
    }));

    const { error } = await (supabase.from('site_content') as any)
      .upsert(updates as any, { onConflict: 'key' });

    if (error) {
      console.error("Supabase Save Error:", error);
      setStatus({ type: 'error', message: `Failed to save: ${error.message}` });
    } else {
      setStatus({ type: 'success', message: "Changes saved successfully." });
      setTimeout(() => setStatus(null), 3000);
    }
    setSaving(false);
  }

  const handleChange = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60 mb-2">
            <Home size={11} />
            <span>Management_Console // Homepage</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Homepage Content</h1>
        </div>

        <div className="flex items-center gap-4">
          {status && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest font-bold ${
                status.type === 'success' ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'
              }`}
            >
              {status.type === 'success' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
              {status.message}
            </motion.div>
          )}
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all disabled:opacity-50"
          >
            {saving ? <RefreshCw className="animate-spin" size={12} /> : <Save size={12} />}
            Commit_Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {SECTION_GROUPS.map((group) => (
          <div key={group.id} className="border border-white/5 bg-black/40 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
              <Layout size={14} className="text-cyan-500" />
              <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/70">{group.label}</h2>
            </div>
            
            <div className="p-8 space-y-8">
              {group.keys.map((key) => (
                <div key={key} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">
                      {key.split('.').pop()?.replace(/_/g, ' ')}
                    </label>
                    <span className="text-[8px] text-white/10 font-mono">ID: {key}</span>
                  </div>
                  
                  {key.endsWith('.active') ? (
                    <select
                      value={content[key] || "true"}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-white/80 focus:border-cyan-500/50 outline-none transition-colors cursor-pointer"
                    >
                      <option value="true" className="bg-black text-white">ACTIVE (Visible)</option>
                      <option value="false" className="bg-black text-white">INACTIVE (Hidden)</option>
                    </select>
                  ) : key.includes('subtitle') || key.includes('desc') ? (
                    <textarea
                      value={content[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      rows={3}
                      className="w-full bg-white/[0.02] border border-white/10 p-4 text-sm text-white/80 focus:border-cyan-500/50 outline-none transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={content[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-white/80 focus:border-cyan-500/50 outline-none transition-colors"
                    />
                  )}
                  {descriptions[key] && (
                    <p className="text-[9px] text-white/20 italic">{descriptions[key]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
