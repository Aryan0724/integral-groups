"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Activity, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

import { useContent } from "@/lib/useContent";

export function ActiveSystems() {
  const { content } = useContent(
    [
      "home.systems.logistics.title", 
      "home.systems.logistics.desc",
      "home.systems.vision.title",
      "home.systems.vision.desc",
      "home.systems.infra.title",
      "home.systems.infra.desc"
    ],
    {
      "home.systems.logistics.title": "Autonomous Logistics Engine",
      "home.systems.logistics.desc": "Multi-agent reinforcement learning system for complex warehouse automation and routing optimization.",
      "home.systems.vision.title": "Sentinel Vision API",
      "home.systems.vision.desc": "Industrial-grade computer vision system for real-time defect detection and spatial intelligence.",
      "home.systems.infra.title": "Nexus Infrastructure",
      "home.systems.infra.desc": "Distributed edge computing mesh for low-latency AI inference in industrial environments."
    }
  );

  const systems = [
    {
      id: "01",
      title: content["home.systems.logistics.title"],
      description: content["home.systems.logistics.desc"],
      status: "Operational",
      metrics: { efficiency: "+42%", latency: "12ms" },
      tech: ["Python", "TensorFlow", "ROS2"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      phase: "Phase 04",
    },
    {
      id: "02",
      title: content["home.systems.vision.title"],
      description: content["home.systems.vision.desc"],
      status: "Production",
      metrics: { accuracy: "99.8%", uptime: "99.99%" },
      tech: ["CUDA", "C++", "PyTorch"],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
      phase: "Phase 03",
    },
    {
      id: "03",
      title: content["home.systems.infra.title"],
      description: content["home.systems.infra.desc"],
      status: "Testing",
      metrics: { nodes: "124", throughput: "1.2TB/s" },
      tech: ["Rust", "Kubernetes", "gRPC"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      phase: "Phase 02",
    },
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-cyan-500" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">Execution_Reality // DEPLOYED_NODES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">Built Through Execution</h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed uppercase tracking-wider">
            We don't just architect; we deploy. Our systems are currently operating across diverse industrial and digital sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, i) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/5 group hover:border-cyan-500/30 transition-all duration-700 overflow-hidden bg-white/[0.02] backdrop-blur-sm"
            >
              {/* Image Overlay */}
              <div className="relative h-56 overflow-hidden border-b border-white/5">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-[9px] font-mono font-bold uppercase tracking-widest">
                  {system.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">Node_{system.id}</span>
                  <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">{system.phase}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-cyan-500 transition-colors flex items-center justify-between tracking-tighter uppercase">
                  {system.title}
                  <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-cyan-500 transition-all" />
                </h3>
                <p className="text-sm text-white/40 mb-8 leading-relaxed uppercase tracking-tight line-clamp-2">
                  {system.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 mb-8">
                  {Object.entries(system.metrics).map(([key, value]) => (
                    <div key={key} className="flex flex-col p-4 bg-black/40">
                      <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">{key}</span>
                      <span className="text-sm font-mono text-cyan-500/80 font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {system.tech.map((t) => (
                    <span key={t} className="text-[8px] font-mono px-2 py-1 bg-white/5 text-white/30 border border-white/5 rounded-sm uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/systems"
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-cyan-500 transition-all"
          >
            <div className="w-12 h-[1px] bg-white/10 group-hover:bg-cyan-500/40 transition-all" />
            Access Full Systems Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

