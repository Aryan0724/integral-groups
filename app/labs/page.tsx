"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
import { Cpu, Bot, Zap, Microscope, Activity, ArrowRight, Layers } from "lucide-react";

const labProjects = [
  {
    title: "Project: Neural Core",
    category: "AI Systems",
    description: "Developing a decentralized transformer architecture for real-time edge processing without cloud dependency.",
    architecture: "Decentralized // Asynchronous",
    tech: ["Custom Silicon", "Rust", "TensorFlow Lite"],
    phase: "Prototyping",
    roadmap: "v0.4.2 Internal Alpha",
  },
  {
    title: "Synapse-01 Interface",
    category: "Autonomous Interfaces",
    description: "Designing the next generation of human-machine interfaces using low-latency neural signal processing.",
    architecture: "Biometric // Feedback-Loop",
    tech: ["EEG Sensors", "C++", "OpenCL"],
    phase: "Research",
    roadmap: "Human trials scheduled Q4 2026",
  },
  {
    title: "Titan Robotics Framework",
    category: "Robotics Concepts",
    description: "A unified software layer for coordinating large-scale autonomous industrial swarms in unstructured environments.",
    architecture: "Swarm Intelligence // Mesh",
    tech: ["ROS2", "Python", "Spatial Computing"],
    phase: "Deployment Alpha",
    roadmap: "Industrial pilot in progress",
  },
  {
    title: "Quantum Ledger System",
    category: "Experimental Infrastructure",
    description: "Building post-quantum cryptographic layers for secure communication in automated industrial networks.",
    architecture: "Post-Quantum // Cryptographic",
    tech: ["QKD", "Rust", "Hyperledger"],
    phase: "Theoretical",
    roadmap: "Whitepaper publication in Q3",
  },
];

export default function LabsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      <main className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <h1 className="text-[12rem] font-display font-bold leading-none tracking-tighter mb-8 uppercase">
              LABS
            </h1>
            <p className="text-2xl text-black/60 leading-relaxed max-w-2xl uppercase tracking-wide">
              The research and development arm of Integral Group. Building the foundational technologies for the next industrial era.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-black/10 border border-black/10">
            {labProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-16 bg-white group hover:bg-[#f9f9f9] transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{project.category}</span>
                    <span className="text-[10px] font-mono text-black/40 uppercase tracking-tighter">{project.phase}</span>
                  </div>
                  
                  <h3 className="text-4xl font-display font-bold mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-black/60 mb-12 text-sm leading-relaxed max-w-md uppercase">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                      <span className="text-[10px] font-mono text-black/40 uppercase block mb-2">Architecture</span>
                      <span className="text-sm font-mono text-black font-bold uppercase">{project.architecture}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-black/40 uppercase block mb-2">Roadmap</span>
                      <span className="text-sm font-mono text-black font-bold uppercase">{project.roadmap}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-black/5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-3 py-1 bg-[#f4f4f4] text-black/60 border border-black/5 rounded-sm uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 p-16 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-matrix opacity-10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-display font-bold mb-6 uppercase tracking-tighter">Join the Labs</h2>
                <p className="text-white/60 max-w-xl mb-10 text-lg leading-relaxed uppercase">
                  We are looking for researchers and engineers to build the core systems of the next decade.
                </p>
                <button className="px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all">
                  Open Research Roles
                </button>
              </div>
              <div className="flex items-center justify-center">
                <Microscope className="w-48 h-48 text-white/5" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
