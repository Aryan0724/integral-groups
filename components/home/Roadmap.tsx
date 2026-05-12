"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContent } from "@/lib/useContent";

export function Roadmap() {
  const { content } = useContent(
    [
      "home.roadmap.p1.title", "home.roadmap.p1.items",
      "home.roadmap.p2.title", "home.roadmap.p2.items",
      "home.roadmap.p3.title", "home.roadmap.p3.items",
      "home.roadmap.p4.title", "home.roadmap.p4.items",
      "home.roadmap.p5.title", "home.roadmap.p5.items"
    ],
    {
      "home.roadmap.p1.title": "Digital Infrastructure & Systems",
      "home.roadmap.p1.items": "Core AI architecture design,Distributed node deployment,Industrial API framework,Strategic intelligence network",
      "home.roadmap.p2.title": "AI Automation Ecosystems",
      "home.roadmap.p2.items": "Autonomous workflow deployment,Predictive analytics mesh,Multi-agent system integration,Scale-ready infra hardening",
      "home.roadmap.p3.title": "Research & Intelligence Platforms",
      "home.roadmap.p3.items": "Real-time intelligence dashboard,Advanced robotics simulations,Systemic risk analysis engine,Public-facing research archive",
      "home.roadmap.p4.title": "Autonomous Systems & Robotics",
      "home.roadmap.p4.items": "Hardware-software integration,Edge-AI vision processing,Collaborative robotics testbed,System-wide autonomy layer",
      "home.roadmap.p5.title": "Industrial Technology Expansion",
      "home.roadmap.p5.items": "Full-scale autonomous factory OS,Planetary intelligence network,Multi-sector system synthesis,Post-industrial infrastructure"
    }
  );

  const phases = [
    {
      phase: "Phase 01",
      title: content["home.roadmap.p1.title"],
      status: "Completed",
      items: content["home.roadmap.p1.items"].split(','),
    },
    {
      phase: "Phase 02",
      title: content["home.roadmap.p2.title"],
      status: "Active",
      items: content["home.roadmap.p2.items"].split(','),
    },
    {
      phase: "Phase 03",
      title: content["home.roadmap.p3.title"],
      status: "Planning",
      items: content["home.roadmap.p3.items"].split(','),
    },
    {
      phase: "Phase 04",
      title: content["home.roadmap.p4.title"],
      status: "Development",
      items: content["home.roadmap.p4.items"].split(','),
    },
    {
      phase: "Phase 05",
      title: content["home.roadmap.p5.title"],
      status: "Vision",
      items: content["home.roadmap.p5.items"].split(','),
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Strategic Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-6 block">Strategic_Trajectory // EVOLUTION_LOG</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-white tracking-tighter leading-none">System Evolution <br /> Roadmap</h2>
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
                  <div className={`p-8 border border-white/10 bg-white/5 group hover:bg-white/10 transition-all ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      <span className="text-xs font-mono text-cyan-500 uppercase">{phase.phase}</span>
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span className={`text-[10px] font-mono uppercase ${
                        phase.status === "Completed" ? "text-emerald-500" : 
                        phase.status === "Active" ? "text-amber-500" : "text-white/40"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-cyan-500 transition-colors uppercase text-white">
                      {phase.title}
                    </h3>
                    <ul className={`space-y-3 ${
                      i % 2 === 0 ? "lg:items-end" : "lg:items-start"
                    } flex flex-col`}>
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-white/50 uppercase tracking-widest text-[10px]">
                          {i % 2 !== 0 && <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />}
                          {item}
                          {i % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-black border border-white/10 items-center justify-center relative z-20">
                  {phase.status === "Completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <Circle className={cn("w-6 h-6", phase.status === "Active" ? "text-cyan-500 animate-pulse" : "text-white/20")} />
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
