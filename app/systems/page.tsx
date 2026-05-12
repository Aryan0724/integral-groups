"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
import { Activity, Server, ArrowRight, BarChart3, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const systems = [
  {
    id: "SYS-001",
    name: "Autonomous Logistics Engine",
    description: "Distributed multi-agent system for supply chain optimization and autonomous vehicle coordination.",
    uptime: "99.998%",
    latency: "14ms",
    status: "Operational",
  },
  {
    id: "SYS-002",
    name: "Sentinel Vision Network",
    description: "Industrial computer vision mesh for real-time anomaly detection in manufacturing facilities.",
    uptime: "99.95%",
    latency: "22ms",
    status: "Monitoring",
  },
  {
    id: "SYS-003",
    name: "Nexus Edge Mesh",
    description: "Decentralized edge computing infrastructure for low-latency AI inference at the network edge.",
    uptime: "99.99%",
    latency: "8ms",
    status: "Active",
  },
];

export default function SystemsPage() {
  const [metrics, setMetrics] = useState({ cpu: 42, ram: 68 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 20) + 30,
        ram: Math.floor(Math.random() * 10) + 60,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <h1 className="text-[12rem] font-display font-bold leading-none tracking-tighter mb-8">
              Systems
            </h1>
            <p className="text-2xl text-black/60 leading-relaxed">
              Real-time operational monitoring of our deployed infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {systems.map((system, i) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="py-16 border-b border-black/5 last:border-b-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-4">
                    <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest block mb-4">{system.id}</span>
                    <h2 className="text-4xl font-display font-medium tracking-tight mb-4">{system.name}</h2>
                    <p className="text-black/60 text-sm leading-relaxed max-w-md">
                      {system.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-[10px] font-mono text-black/30 uppercase block mb-1">Uptime</span>
                      <span className="text-2xl font-display font-bold text-emerald-600">{system.uptime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-black/30 uppercase block mb-1">Latency</span>
                      <span className="text-2xl font-display font-bold text-black">{system.latency}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col lg:items-end">
                    <Link href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                      Open Console <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
