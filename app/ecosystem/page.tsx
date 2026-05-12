"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { FlaskConical, Globe, Zap, Database, Shield, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    id: "labs",
    name: "Integral Labs",
    icon: FlaskConical,
    description: "Advanced AI systems, robotics concepts, intelligent automation, and experimental technologies. Our R&D hub for the next decade of infrastructure.",
    role: "Foundational R&D",
    outputs: ["AI Models", "Robotics Prototypes", "Automation Frameworks"],
    tech: ["Neural Networks", "ROS2", "Quantum Computing Concepts"],
    href: "/labs",
  },
  {
    id: "media",
    name: "Integral Media",
    icon: Globe,
    description: "Strategic storytelling, digital influence systems, and cinematic media infrastructure. Shaping the narrative of the future industrial era.",
    role: "Strategic Influence",
    outputs: ["Intelligence Narratives", "Digital Presence", "Brand Strategy"],
    tech: ["Generative Media", "OSINT Data", "Real-time Rendering"],
    href: "/media",
  },
  {
    id: "automation",
    name: "Automation Systems",
    icon: Zap,
    description: "AI workflows, automation infrastructure, and scalable systems engineering for industrial-scale deployment.",
    role: "Operational Scaling",
    outputs: ["Workflow Engines", "Industrial APIs", "Process Automation"],
    tech: ["Go", "Kubernetes", "Event-driven Architecture"],
    href: "/systems",
  },
  {
    id: "research",
    name: "Research & Intelligence",
    icon: Database,
    description: "In-depth reports, technology analysis, and strategic intelligence for future systems and industrial trends.",
    role: "Strategic Analysis",
    outputs: ["PDF Intelligence Reports", "Market Analysis", "Risk Assessment"],
    tech: ["Data Science", "Economic Modeling", "OSINT"],
    href: "/research",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: Shield,
    description: "Secure digital platforms, distributed backend systems, and scalable operational architecture for critical applications.",
    role: "Core Stability",
    outputs: ["Secure Cloud Mesh", "Authentication Layers", "Data Pipelines"],
    tech: ["Rust", "Zero Trust", "Edge Computing"],
    href: "/systems",
  },
];

export default function EcosystemPage() {
  return (
    <div className="relative">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Organizational Structure</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Ecosystem Architecture</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Integral Group operates as a modular ecosystem of specialized divisions, each engineering critical layers of the future industrial technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {divisions.map((division, i) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="tactical-border bg-white/5 overflow-hidden group flex flex-col lg:flex-row"
              >
                {/* Icon & Brand */}
                <div className="w-full lg:w-72 p-10 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col items-center justify-center text-center">
                  <division.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-tight">{division.name}</h2>
                  <span className="text-[10px] font-mono text-text-muted uppercase mt-2 tracking-[0.2em]">{division.role}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-10 flex flex-col">
                  <p className="text-lg text-off-white mb-8 leading-relaxed">
                    {division.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-wider">Primary Outputs</h4>
                      <ul className="space-y-2">
                        {division.outputs.map((output) => (
                          <li key={output} className="text-sm text-text-secondary flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-primary uppercase mb-4 tracking-wider">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {division.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/10 text-text-muted rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5">
                    <Link
                      href={division.href}
                      className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-off-white transition-colors group/btn"
                    >
                      Enter Division <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
