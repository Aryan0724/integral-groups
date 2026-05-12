"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Activity, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const systems = [
  {
    id: "01",
    title: "Autonomous Logistics Engine",
    description: "Multi-agent reinforcement learning system for complex warehouse automation and routing optimization.",
    status: "Operational",
    metrics: { efficiency: "+42%", latency: "12ms" },
    tech: ["Python", "TensorFlow", "ROS2"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    phase: "Phase 04",
  },
  {
    id: "02",
    title: "Sentinel Vision API",
    description: "Industrial-grade computer vision system for real-time defect detection and spatial intelligence.",
    status: "Production",
    metrics: { accuracy: "99.8%", uptime: "99.99%" },
    tech: ["CUDA", "C++", "PyTorch"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    phase: "Phase 03",
  },
  {
    id: "03",
    title: "Nexus Infrastructure",
    description: "Distributed edge computing mesh for low-latency AI inference in industrial environments.",
    status: "Testing",
    metrics: { nodes: "124", throughput: "1.2TB/s" },
    tech: ["Rust", "Kubernetes", "gRPC"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    phase: "Phase 02",
  },
];

export function ActiveSystems() {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-black/40 uppercase tracking-widest">Execution Reality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight">Built Through Execution</h2>
          </div>
          <p className="text-black/60 max-w-md text-sm leading-relaxed">
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
              className="border border-black/5 group hover:border-black/20 transition-all duration-500 overflow-hidden bg-[#f9f9f9]"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden border-b border-black/5">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9f9] to-transparent opacity-40" />
                <div className="absolute top-4 right-4 px-2 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase">
                  {system.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-black/30 uppercase tracking-tighter">System ID: {system.id}</span>
                  <span className="text-[10px] font-mono text-primary uppercase">{system.phase}</span>
                </div>
                <h3 className="text-xl font-display font-medium mb-3 group-hover:text-primary transition-colors flex items-center justify-between tracking-tight">
                  {system.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-black/60 mb-6 line-clamp-2">
                  {system.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-white border border-black/5">
                  {Object.entries(system.metrics).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[9px] font-mono text-black/30 uppercase">{key}</span>
                      <span className="text-xs font-mono text-black/80">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {system.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono px-2 py-1 bg-white text-black/40 border border-black/5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/systems"
            className="text-xs font-mono text-black/40 hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
          >
            Access Full Systems Directory <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

