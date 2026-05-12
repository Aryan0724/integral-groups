"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    phase: "Phase 01",
    title: "Digital Infrastructure & Systems",
    status: "Completed",
    items: [
      "Core AI architecture design",
      "Distributed node deployment",
      "Industrial API framework",
      "Strategic intelligence network",
    ],
  },
  {
    phase: "Phase 02",
    title: "AI Automation Ecosystems",
    status: "Active",
    items: [
      "Autonomous workflow deployment",
      "Predictive analytics mesh",
      "Multi-agent system integration",
      "Scale-ready infra hardening",
    ],
  },
  {
    phase: "Phase 03",
    title: "Research & Intelligence Platforms",
    status: "Planning",
    items: [
      "Real-time intelligence dashboard",
      "Advanced robotics simulations",
      "Systemic risk analysis engine",
      "Public-facing research archive",
    ],
  },
  {
    phase: "Phase 04",
    title: "Autonomous Systems & Robotics",
    status: "Development",
    items: [
      "Hardware-software integration",
      "Edge-AI vision processing",
      "Collaborative robotics testbed",
      "System-wide autonomy layer",
    ],
  },
  {
    phase: "Phase 05",
    title: "Industrial Technology Expansion",
    status: "Vision",
    items: [
      "Full-scale autonomous factory OS",
      "Planetary intelligence network",
      "Multi-sector system synthesis",
      "Post-industrial infrastructure",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Strategic Trajectory</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">System Evolution Roadmap</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

          <div className="flex flex-col gap-12 relative z-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`p-8 tactical-border bg-white/5 group hover:bg-white/10 transition-all ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      <span className="text-xs font-mono text-primary uppercase">{phase.phase}</span>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className={`text-[10px] font-mono uppercase ${
                        phase.status === "Completed" ? "text-emerald-500" : 
                        phase.status === "Active" ? "text-amber-500" : "text-text-muted"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <ul className={`space-y-3 ${
                      i % 2 === 0 ? "lg:items-end" : "lg:items-start"
                    } flex flex-col`}>
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                          {i % 2 !== 0 && <div className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                          {item}
                          {i % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-matte-black border border-white/10 items-center justify-center relative z-20">
                  {phase.status === "Completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <Circle className={cn("w-6 h-6", phase.status === "Active" ? "text-primary animate-pulse" : "text-white/20")} />
                  )}
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
