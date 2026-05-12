"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
import { Target, Shield, Rocket, User, Briefcase, Zap, Mail } from "lucide-react";
import Link from "next/link";

const founders = [
  {
    name: "Aryan V.",
    role: "Founder & CEO",
    bio: "Systems architect and visionary. Focused on the convergence of AI and industrial infrastructure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Vikram S.",
    role: "Co-Founder & CTO",
    bio: "Expert in distributed systems and high-performance computing. Architect of the Integral Core.",
    image: "https://images.unsplash.com/photo-1519085184581-6ad74673783d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Elena R.",
    role: "Managing Director",
    bio: "Specialist in ecosystem scaling and strategic partnerships. Leading the global media network.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
];

export default function AboutPage() {
  return (
    <div className="relative bg-white text-black min-h-screen">
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-5xl mb-32">
            <span className="text-[10px] font-mono text-black/40 uppercase tracking-[0.5em] mb-6 block">Organization Identity</span>
            <h1 className="text-6xl md:text-[8rem] font-display font-bold mb-12 tracking-tighter leading-none uppercase">
              Modular Infrastructure. <br /> Scalable Execution.
            </h1>
            <p className="text-2xl text-black/60 leading-relaxed max-w-3xl uppercase tracking-wide">
              Integral Group is a startup venture and modular ecosystem building digital infrastructure, media systems, and innovation platforms.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/10 mb-40 border border-black/10">
            {[
              { title: "Modular Architecture", desc: "Interconnected systems that scale with execution.", icon: Target },
              { title: "AI-Powered Stability", icon: Shield, desc: "Autonomous intelligence at every layer of operation." },
              { title: "Industrial Resilience", icon: Rocket, desc: "Building the foundational stack for the next era." }
            ].map((item, i) => (
              <div key={item.title} className="p-16 bg-white group hover:bg-[#f9f9f9] transition-all">
                <item.icon className="w-10 h-10 text-primary mb-8 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed uppercase">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Founders Section */}
          <div className="mb-40">
            <div className="max-w-4xl mb-24">
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-[0.5em] mb-6 block">Our Leadership</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-none">The Founders</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-[#f4f4f4] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{founder.role}</span>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tighter">{founder.name}</h3>
                    <p className="text-sm text-black/60 leading-relaxed uppercase tracking-tight mt-2">
                      {founder.bio}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <Link href="#" className="p-2 border border-black/5 hover:border-primary transition-all rounded-full">
                        <Briefcase className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-2 border border-black/5 hover:border-primary transition-all rounded-full">
                        <Zap className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-2 border border-black/5 hover:border-primary transition-all rounded-full">
                        <Mail className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="flex flex-col gap-10">
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-[0.5em]">Our Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase">Precision Over Noise. <br /> Execution Over Hype.</h2>
              <div className="space-y-6 text-black/60 text-lg leading-relaxed uppercase tracking-wide">
                <p>
                  "We didn't start Integral Group to join the AI hype cycle. We started it to build the actual infrastructure that makes intelligence useful in the real world."
                </p>
                <p>
                  Our focus is entirely on execution. We build systems that solve structural problems in logistics, manufacturing, and global intelligence. We prioritize the core layers because that's where the real leverage is.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-black p-1">
              <div className="w-full h-full border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-matrix opacity-20" />
                <span className="text-[20rem] font-display font-bold text-white/5 tracking-tighter">I_G</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
