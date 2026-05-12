"use client";

import { motion } from "framer-motion";
import { Hexagon, Cpu, Globe, Zap, Database, Shield, Rocket, FlaskConical } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const divisions = [
  {
    id: "labs",
    name: "Integral Labs",
    icon: FlaskConical,
    description: "Advanced AI systems, robotics concepts, and intelligent automation experiments.",
    focus: "R&D // Prototyping",
    color: "text-blue-400",
  },
  {
    id: "media",
    name: "Integral Media",
    icon: Globe,
    description: "Strategic storytelling and cinematic digital influence systems.",
    focus: "Strategic Intelligence",
    color: "text-emerald-400",
  },
  {
    id: "automation",
    name: "Automation Systems",
    icon: Zap,
    description: "AI workflows and scalable systems engineering for industrial applications.",
    focus: "Scale // Deployment",
    color: "text-amber-400",
  },
  {
    id: "research",
    name: "Research",
    icon: Database,
    description: "In-depth intelligence reports and future system analysis.",
    focus: "Analysis // Insights",
    color: "text-purple-400",
  },
  {
    id: "infra",
    name: "Infrastructure",
    icon: Shield,
    description: "Secure, distributed digital platforms and operational architecture.",
    focus: "Security // Stability",
    color: "text-rose-400",
  },
  {
    id: "ventures",
    name: "Ventures",
    icon: Rocket,
    description: "Strategic investment in early-stage disruptive systems and technologies.",
    focus: "Expansion // Growth",
    color: "text-cyan-400",
  },
];

export function EcosystemArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-infrastructure opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Structural Integrity</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Ecosystem Architecture</h2>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            className="relative z-20 p-10 glass-panel rounded-full border-primary/20 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveNode(null)}
          >
            <Hexagon className="w-20 h-20 text-primary animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-mono text-primary font-bold uppercase tracking-tighter">Core</span>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs font-mono text-off-white uppercase font-bold tracking-widest">Integral Group</span>
            </div>
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full">
            {divisions.map((node, i) => {
              const angle = (i * 360) / divisions.length;
              const radius = 220;
              const x2 = 50 + (radius / 8) * Math.cos((angle * Math.PI) / 180);
              const y2 = 50 + (radius / 6) * Math.sin((angle * Math.PI) / 180);
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 30 * Math.cos((angle * Math.PI) / 180)}%`}
                  y2={`${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`}
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {divisions.map((node, i) => {
            const angle = (i * 360) / divisions.length;
            const x = 50 + 30 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <button
                  onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
                  onMouseEnter={() => setActiveNode(node.id)}
                  className={cn(
                    "p-5 rounded-lg border transition-all duration-300 group relative",
                    activeNode === node.id 
                      ? "bg-white/10 border-primary scale-110 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                      : "bg-white/5 border-white/10 hover:border-white/30"
                  )}
                >
                  <node.icon className={cn("w-6 h-6 transition-colors", activeNode === node.id ? "text-primary" : "text-text-muted group-hover:text-off-white")} />
                  
                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className={cn(
                      "text-[10px] font-mono uppercase tracking-wider transition-colors",
                      activeNode === node.id ? "text-primary" : "text-text-muted"
                    )}>
                      {node.name}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={activeNode ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-80 p-8 glass-panel border-white/10 hidden xl:block"
          >
            {activeNode && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const node = divisions.find(d => d.id === activeNode);
                    if (!node) return null;
                    const Icon = node.icon;
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  <h3 className="text-lg font-display font-bold uppercase">{divisions.find(d => d.id === activeNode)?.name}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {divisions.find(d => d.id === activeNode)?.description}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">Current Focus</span>
                  <span className="text-xs font-mono text-primary uppercase">{divisions.find(d => d.id === activeNode)?.focus}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
