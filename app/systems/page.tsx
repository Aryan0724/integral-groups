"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { Activity, Server, ArrowRight, AlertCircle, Database } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export default function SystemsPage() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDepartments() {
      const { data } = await supabase
        .from('departments')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setDepartments(data);
      setLoading(false);
    }
    fetchDepartments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-500 font-mono text-[10px] animate-pulse tracking-[0.5em] uppercase">MONITORING_SYSTEM_NODES...</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em] mb-4 block">Core Infrastructure</span>
            <h1 className="text-[8rem] md:text-[12rem] font-display font-bold leading-none tracking-tighter mb-8 uppercase">
              Systems
            </h1>
            <p className="text-2xl text-white/40 leading-relaxed max-w-2xl">
              Real-time operational monitoring of our deployed infrastructure nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {departments.length > 0 ? departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-16 border-b border-white/5 last:border-b-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-4">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-4">NODE_0x{dept.id.substring(0, 4)}</span>
                    <h2 className="text-4xl font-display font-bold tracking-tight mb-4 uppercase group-hover:text-cyan-500 transition-colors">{dept.name}</h2>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md uppercase tracking-wider">
                      {dept.mission}
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-[10px] font-mono text-white/20 uppercase block mb-2 tracking-widest">Uptime</span>
                      <span className="text-2xl font-display font-bold text-emerald-500">99.998%</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/20 uppercase block mb-2 tracking-widest">Latency</span>
                      <span className="text-2xl font-display font-bold text-cyan-500">14MS</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col lg:items-end">
                    <Link href={`/systems/${dept.slug}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-cyan-500 transition-colors">
                      Open Console <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="py-20 text-center border border-dashed border-white/10 bg-white/[0.01]">
                 <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
                 <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No active systems detected in the mesh.</div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
