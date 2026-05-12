"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Code, Layers, Globe, BarChart3, Users, FlaskConical } from "lucide-react";
import Link from "next/link";

const departments = [
  {
    id: "0.1",
    name: "AI Dept",
    icon: Cpu,
    title: "Autonomous Intelligence Systems",
    description: "Developing proprietary LLMs and multi-agent systems for industrial automation and decision-making.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    href: "/departments/ai",
  },
  {
    id: "0.2",
    name: "Web Dev",
    icon: Code,
    title: "High-Performance Digital Architecture",
    description: "Building the interfaces of the future with Next.js, Rust, and distributed systems architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    href: "/departments/web-dev",
  },
  {
    id: "0.3",
    name: "SaaS",
    icon: Layers,
    title: "Scalable Software Ecosystems",
    description: "Cloud-native platforms designed for enterprise-grade scalability and operational reliability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    href: "/departments/saas",
  },
  {
    id: "0.4",
    name: "Media",
    icon: Globe,
    title: "Strategic Content Networks",
    description: "Building digital-first media infrastructure for the next generation of global communication.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    href: "/departments/media",
  },
  {
    id: "0.5",
    name: "Marketing",
    icon: BarChart3,
    title: "Algorithmic Growth Systems",
    description: "Data-driven marketing architecture that leverages AI to scale visibility and impact.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "/departments/marketing",
  },
  {
    id: "0.6",
    name: "Sales",
    icon: Users,
    title: "Strategic Collaboration & Sales",
    description: "Systems for institutional partnerships and large-scale industrial collaboration.",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=800",
    href: "/departments/sales",
  },
  {
    id: "0.7",
    name: "R&D",
    icon: FlaskConical,
    title: "Experimental Systems Lab",
    description: "Researching the foundational technologies that will define the next industrial era.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    href: "/departments/rd",
  },
];

export function Departments() {
  return (
    <section className="py-24 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="text-xs font-mono text-black/40 uppercase tracking-[0.4em] mb-4 block">Our Infrastructure</span>
          <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-none">Our Departments</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-black/5 border-t border-black/5">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white py-24 group hover:bg-[#f9f9f9] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* ID & Title */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-8">
                    <dept.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-mono text-black/40">/{dept.id}</span>
                  </div>
                  <h3 className="text-xl font-medium leading-tight mb-4 uppercase">
                    {dept.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="aspect-video overflow-hidden border border-black/5">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                </div>

                {/* Big Name & Link */}
                <div className="lg:col-span-5 flex flex-col lg:items-end">
                  <Link href={dept.href} className="group/link flex flex-col items-end text-right">
                    <h4 className="text-[6rem] md:text-[8rem] font-display font-bold leading-none tracking-tighter uppercase group-hover:text-primary transition-colors">
                      {dept.name}
                    </h4>
                    <p className="max-w-xs text-sm text-black/60 mt-6 leading-relaxed hidden lg:block">
                      {dept.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mt-8 group-hover/link:text-primary transition-colors">
                      Access Department <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
