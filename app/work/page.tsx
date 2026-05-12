"use client";

import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "/0.1",
    tag: "AIP",
    title: "AI-Powered Automation for Every Decision",
    description: "Integral Artificial Intelligence Platform (AIP) enables modular ecosystem building with scalable execution architecture.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "/0.2",
    tag: "GOTHAM",
    title: "Achieve AI-driven combat superiority, from space to mud",
    description: "Strategic media systems and digital infrastructure for global operational dominance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "/0.3",
    tag: "FOUNDRY",
    title: "The operating system for the modern enterprise",
    description: "Innovation platforms and digital infrastructure for scalable industrial intelligence.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "/0.4",
    tag: "APOLLO",
    title: "The power of autonomous deployment",
    description: "Cloud-native infrastructure for the next industrial era.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <h1 className="text-[12rem] font-display font-bold leading-none tracking-tighter mb-8">
              Work
            </h1>
            <p className="text-2xl text-black/60 leading-relaxed">
              Engineering the operating interface for the next industrial era.
            </p>
          </div>

          <div className="space-y-1">
            {projects.map((project, i) => (
              <motion.div
                key={project.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-24 border-b border-black/5 last:border-b-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-medium leading-tight mb-8">
                      {project.title}
                    </h3>
                    <span className="text-sm font-mono text-black/30">{project.id}</span>
                  </div>
                  
                  <div className="lg:col-span-4">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.tag}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col lg:items-end">
                    <h4 className="text-[10rem] font-display font-bold leading-none tracking-tighter">
                      {project.tag}
                    </h4>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      See Platform <ArrowUpRight className="w-5 h-5" />
                    </div>
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
