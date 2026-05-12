"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, Cpu, Zap, Globe, Search, Shield, Box,
  ChevronRight, Plus, Save, X, Edit2, Trash2, Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export default function DepartmentsAdmin() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingDept, setEditingDept] = useState<any | null>(null);

  useEffect(() => {
    fetchDepts();
  }, []);

  async function fetchDepts() {
    setLoading(true);
    const { data, error } = await (supabase.from('departments') as any)
      .select('*')
      .order('name');
    
    if (!error && data) {
      setDepartments(data);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!editingDept?.name) return;

    const { error } = await (supabase.from('departments') as any)
      .upsert(editingDept as any);

    if (!error) {
      setEditingDept(null);
      fetchDepts();
    } else {
      alert("Error saving department: " + error.message);
    }
  }

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu": return Cpu;
      case "Globe": return Globe;
      case "Layers": return Layers;
      case "Search": return Search;
      default: return Box;
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-4">
            <Layers size={12} />
            <span>Operational_Hierarchy // Node_Management</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Department Control</h1>
        </div>
        
        <button 
          onClick={() => setEditingDept({ name: "", slug: "", mission: "", metadata: { icon: "Cpu", title: "", image: "" } })}
          className="px-6 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cyan-500 transition-colors flex items-center space-x-2"
        >
          <Plus size={14} />
          <span>Provision_New_Node</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center text-white/20 font-mono text-xs uppercase tracking-widest">Scanning_Ecosystem...</div>
        ) : departments.map((dept, i) => {
          const metadata = dept.metadata || {};
          const Icon = getIcon(metadata.icon);
          
          return (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 border border-white/5 bg-black/40 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-cyan-500">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight uppercase group-hover:text-cyan-500 transition-colors">{dept.name}</h2>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{dept.slug}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditingDept(dept)} className="p-2 text-white/20 hover:text-white transition-colors">
                    <Edit2 size={14} />
                  </button>
                </div>
              </div>

              <div className="space-y-1 mb-8">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">Mission_Directive</span>
                <p className="text-[11px] text-white/60 uppercase tracking-widest line-clamp-2">{dept.mission}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="text-[8px] text-white/10 font-mono">NODE_{dept.id.substring(0, 8)}</div>
                <button className="text-[9px] uppercase tracking-widest text-white/20 hover:text-cyan-500 transition-colors flex items-center space-x-2">
                  <span>View_Metrics</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingDept && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setEditingDept(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#0a0a0a] border border-white/10 z-[101] p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">Configure_Node</h2>
                <button onClick={() => setEditingDept(null)}><X size={16} /></button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Dept Name</label>
                  <input type="text" value={editingDept.name} onChange={(e) => setEditingDept({...editingDept, name: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Slug</label>
                  <input type="text" value={editingDept.slug} onChange={(e) => setEditingDept({...editingDept, slug: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Mission Statement</label>
                <textarea value={editingDept.mission} onChange={(e) => setEditingDept({...editingDept, mission: e.target.value})} rows={3} className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm outline-none resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Display Title (Meta)</label>
                  <input type="text" value={editingDept.metadata?.title || ""} onChange={(e) => setEditingDept({...editingDept, metadata: {...editingDept.metadata, title: e.target.value}})} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 font-mono">Icon</label>
                  <select value={editingDept.metadata?.icon || "Cpu"} onChange={(e) => setEditingDept({...editingDept, metadata: {...editingDept.metadata, icon: e.target.value}})} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none appearance-none">
                    <option value="Cpu">Cpu</option>
                    <option value="Globe">Globe</option>
                    <option value="Layers">Layers</option>
                    <option value="Search">Search</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-4 border-t border-white/5">
                <button onClick={() => setEditingDept(null)} className="px-6 py-2 text-[10px] uppercase tracking-widest">Cancel</button>
                <button onClick={handleSave} className="px-8 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Save size={12} /> Sync_Node</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

