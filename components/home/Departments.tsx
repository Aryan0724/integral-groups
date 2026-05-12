"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Code, Layers, Globe, BarChart3, Users, FlaskConical } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function Departments() {
  const [depts, setDepts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDepts() {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('name');

      if (!error && data && data.length > 0) {
        setDepts(data);
      } else {
        // Fallback to static data if error or empty
        setDepts([
          {
            id: "0.1",
            name: "AI Dept",
            metadata: { 
              icon: "Cpu", 
              title: "Autonomous Intelligence Systems",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
            },
            mission: "Developing proprietary LLMs and multi-agent systems for industrial automation and decision-making.",
            slug: "ai",
          },
          {
            id: "0.2",
            name: "Web Dev",
            metadata: { 
              icon: "Code", 
              title: "High-Performance Digital Architecture",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
            },
            mission: "Building the interfaces of the future with Next.js, Rust, and distributed systems architecture.",
            slug: "web-dev",
          },
          {
            id: "0.4",
            name: "Media",
            metadata: { 
              icon: "Globe", 
              title: "Strategic Content Networks",
              image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
            },
            mission: "Building digital-first media infrastructure for the next generation of global communication.",
            slug: "media",
          }
        ]);
      }
      setLoading(false);
    }

    fetchDepts();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu": return Cpu;
      case "Code": return Code;
      case "Layers": return Layers;
      case "Globe": return Globe;
      case "BarChart3": return BarChart3;
      case "Users": return Users;
      case "FlaskConical": return FlaskConical;
      default: return Layers;
    }
  };

  if (loading) return <div className="py-24 text-center font-mono text-black/20 uppercase tracking-widest">Accessing_Ecosystem...</div>;

  return (
    <section className="py-32 bg-black text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] mb-6 block">Our Infrastructure // MODULAR_NODES</span>
          <h2 className="text-6xl md:text-[8rem] font-display font-bold tracking-tighter uppercase leading-none text-white">Ecosystem <br /> Architecture</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/5 border-t border-white/5">
          {depts.map((dept, i) => {
            const metadata = (dept.metadata as any) || {};
            const Icon = getIcon(metadata.icon);
            
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black py-32 group hover:bg-white/[0.02] transition-all duration-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                        <Icon className="w-5 h-5 text-cyan-500" />
                      </div>
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">0x{dept.slug.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold leading-none mb-6 uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors">
                      {metadata.title || dept.name}
                    </h3>
                    <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 group-hover:bg-cyan-500 transition-all duration-700" />
                  </div>

                  <div className="lg:col-span-4">
                    <div className="aspect-video overflow-hidden border border-white/5 bg-white/5">
                      <img 
                        src={metadata.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"} 
                        alt={dept.name}
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col lg:items-end">
                    <Link href={`/departments/${dept.slug}`} className="group/link flex flex-col items-end text-right">
                      <h4 className="text-[5rem] md:text-[8rem] font-display font-bold leading-[0.8] tracking-tighter uppercase text-white/10 group-hover:text-white transition-all duration-700">
                        {dept.name}
                      </h4>
                      <p className="max-w-sm text-sm text-white/30 mt-8 leading-relaxed uppercase tracking-wide hidden lg:block group-hover:text-white/60 transition-colors">
                        {dept.mission}
                      </p>
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] mt-12 text-cyan-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Access Department <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

