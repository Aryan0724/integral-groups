"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function WorkPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('portfolios')
        .select('*')
        .order('order_index', { ascending: true });
      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-500 font-mono text-[10px] animate-pulse tracking-[0.5em] uppercase">SYNCING_ECOSYSTEM_DATA...</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em] mb-4 block">Deployment Portfolio</span>
            <h1 className="text-[8rem] md:text-[12rem] font-display font-bold leading-none tracking-tighter mb-8 uppercase">
              Work
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed max-w-2xl">
              Engineering the operating interface for the next industrial era.
            </p>
          </div>

          <div className="space-y-1">
            {projects.length > 0 ? projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-24 border-b border-white/5 last:border-b-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold uppercase tracking-tight leading-tight mb-8 text-white/80 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">NODE_v{i + 1}.0</span>
                  </div>
                  
                  <div className="lg:col-span-4">
                    <div className="aspect-video overflow-hidden border border-white/10 bg-white/5">
                      <img 
                        src={project.image_url || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col lg:items-end">
                    <h4 className="text-[6rem] md:text-[10rem] font-display font-bold leading-none tracking-tighter text-white group-hover:text-cyan-500 transition-all duration-500">
                      {project.category.substring(0, 4).toUpperCase()}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-cyan-500">
                      Inspect Platform <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="py-20 text-center border border-dashed border-white/10 bg-white/[0.01]">
                 <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
                 <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No active projects found in the registry.</div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
