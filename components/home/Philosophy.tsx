"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Target, Sliders } from "lucide-react";

const principles = [
  {
    title: "Systems Over Hype",
    description: "We ignore market noise to focus on fundamental engineering excellence and robust architectural integrity.",
    icon: Layers,
  },
  {
    title: "Long-Term Leverage",
    description: "Every deployment is designed to be a building block for future autonomous infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Infrastructure First",
    description: "Solid foundations enable exponential growth. We prioritize the core layer over superficial features.",
    icon: Sliders,
  },
  {
    title: "Execution Creates Reality",
    description: "Ideas are cheap. Deployed systems are the only valid metric of progress and innovation.",
    icon: Target,
  },
  {
    title: "Precision Over Noise",
    description: "Intelligent systems require focused parameters. We optimize for high-signal technical outputs.",
    icon: Zap,
  },
];

export function Philosophy() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Our Mindset</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built on Principles, Driven by Precision</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Integral Group is guided by a core philosophy that prioritizes engineering truth over temporary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="tactical-border p-8 bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <p.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-display font-bold mb-4 uppercase tracking-tight">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
