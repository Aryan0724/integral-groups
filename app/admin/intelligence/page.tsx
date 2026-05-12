"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Edit2, Trash2, FileText, Save, X, 
  RefreshCw, AlertCircle, Eye, Globe, Clock
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  status: string;
  published_at: string;
}

export default function IntelligenceManager() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setLoading(true);
    const { data, error } = await (supabase.from('articles') as any)
      .select('*')
      .order('published_at', { ascending: false });

    if (!error && data) {
      setArticles(data);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!editingArticle?.title) return;

    const slug = editingArticle.slug || editingArticle.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const articleToSave = { ...editingArticle, slug };

    let error;
    if (articleToSave.id) {
      ({ error } = await (supabase.from('articles') as any)
        .update(articleToSave as any)
        .eq('id', articleToSave.id));
    } else {
      ({ error } = await (supabase.from('articles') as any)
        .insert([articleToSave] as any));
    }

    if (!error) {
      setEditingArticle(null);
      fetchArticles();
    } else {
      alert("Error saving article: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Permanently archive this report?")) {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);
      
      if (!error) fetchArticles();
    }
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-2">
            <FileText size={11} />
            <span>Infrastructure // Intelligence</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white">Intelligence Reports</h1>
        </div>

        <button
          onClick={() => setEditingArticle({ title: "", content: "", excerpt: "", category: "INTELLIGENCE", status: "PUBLISHED" })}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 transition-all"
        >
          <Plus size={14} />
          Initialize_Transmission
        </button>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-24 bg-white/[0.02] border border-white/5 animate-pulse" />
          ))
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="group p-6 border border-white/5 bg-black/40 hover:bg-white/[0.02] hover:border-cyan-500/20 transition-all flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/5">
                  <FileText size={20} className="text-white/20 group-hover:text-cyan-500 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-[10px] text-cyan-500/60 font-mono uppercase tracking-widest">{article.category}</span>
                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                    <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest">{new Date(article.published_at).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">{article.title}</h3>
                </div>
              </div>

              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all">
                <button onClick={() => setEditingArticle(article)} className="p-2 text-white/40 hover:text-cyan-500 transition-colors">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => handleDelete(article.id)} className="p-2 text-white/40 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10">
             <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
             <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No active transmissions in the log.</div>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {editingArticle && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setEditingArticle(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#050505] border border-white/10 z-[101] flex flex-col">
              <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe size={14} className="text-cyan-500" />
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold">Transmission_Config // {editingArticle.id ? "Edit" : "New"}</h2>
                </div>
                <button onClick={() => setEditingArticle(null)} className="text-white/20 hover:text-white"><X size={18} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Report_Title</label>
                    <input value={editingArticle.title} onChange={e => setEditingArticle({...editingArticle, title: e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-500/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Excerpt_Summary</label>
                    <textarea value={editingArticle.excerpt} onChange={e => setEditingArticle({...editingArticle, excerpt: e.target.value})} rows={3} className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-500/50 resize-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Category</label>
                      <input value={editingArticle.category} onChange={e => setEditingArticle({...editingArticle, category: e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-500/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Status</label>
                      <select value={editingArticle.status} onChange={e => setEditingArticle({...editingArticle, status: e.target.value})} className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-500/50 appearance-none">
                        <option value="PUBLISHED">PUBLISHED</option>
                        <option value="DRAFT">DRAFT</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col h-full">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Intelligence_Payload (Markdown)</label>
                  <textarea value={editingArticle.content} onChange={e => setEditingArticle({...editingArticle, content: e.target.value})} className="flex-1 w-full bg-white/[0.01] border border-white/10 p-8 text-white/80 font-mono text-sm outline-none focus:border-cyan-500/30 resize-none" placeholder="# Start typing..." />
                </div>
              </div>

              <div className="p-8 border-t border-white/5 flex justify-end gap-6">
                <button onClick={() => setEditingArticle(null)} className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white">Abort_Transmission</button>
                <button onClick={handleSave} className="px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cyan-500 transition-all">Initialize_Stream</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
