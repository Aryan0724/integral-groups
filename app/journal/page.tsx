"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { BookOpen, ArrowUpRight, Share2, MessageSquare, AlertCircle } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function JournalPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });
      if (data) setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-500 font-mono text-[10px] animate-pulse tracking-[0.5em] uppercase">SYNCING_INTELLIGENCE_STREAM...</div>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em] mb-4 block">Systems Documentation</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase tracking-tighter">Integral Journal</h1>
            <p className="text-xl text-white/40 leading-relaxed max-w-2xl">
              Engineering notes, technical essays, and development logs from the front lines of future systems construction.
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
              <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No active transmissions in the log. Check back soon.</div>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-24 group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px] overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={articles[0].image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"}
                      alt={articles[0].title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{articles[0].category}</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{new Date(articles[0].published_at).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold hover:text-cyan-500 transition-colors cursor-pointer leading-tight uppercase">
                      {articles[0].title}
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed line-clamp-3">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <Link
                        href={`/journal/${articles[0].slug}`}
                        className="px-8 py-3 bg-white text-black text-[10px] font-mono uppercase font-bold hover:bg-cyan-500 transition-all flex items-center gap-2 group/btn tracking-widest"
                      >
                        Read Full Entry <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {articles.slice(1).map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-64 mb-6 overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src={article.image_url || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{article.category}</span>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{new Date(article.published_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4 group-hover:text-cyan-500 transition-colors leading-tight uppercase">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">TRANSMISSION_STABLE</span>
                      <div className="flex items-center gap-4">
                        <button className="text-white/20 hover:text-cyan-500 transition-colors"><Share2 className="w-4 h-4" /></button>
                        <button className="text-white/20 hover:text-cyan-500 transition-colors"><MessageSquare className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Newsletter / Subscription */}
          <div className="mt-24 p-12 border border-white/10 bg-white/[0.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BookOpen className="w-48 h-48 text-cyan-500" />
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight text-white">System Updates</h2>
              <p className="text-white/40 mb-8 leading-relaxed">
                Receive technical updates, research summaries, and engineering breakthroughs directly from our labs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="EMAIL_ADDRESS"
                  className="flex-1 px-6 py-4 bg-black border border-white/10 focus:border-cyan-500/50 outline-none text-[10px] font-mono uppercase tracking-widest text-white"
                />
                <button className="px-8 py-4 bg-white text-black font-bold font-mono text-xs uppercase hover:bg-cyan-500 transition-all tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
