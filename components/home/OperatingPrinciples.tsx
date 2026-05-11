"use client";

import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Systems Over Hype",
    desc: "We reject temporary trends. Our focus is exclusively on building enduring, self-sustaining architectures that compound in value over time.",
  },
  {
    num: "02",
    title: "Execution Over Noise",
    desc: "The ability to coordinate complex systems and ship reliable infrastructure is our primary metric for success. Results are the only signal.",
  },
  {
    num: "03",
    title: "Long-Term Leverage",
    desc: "Every tool built and process optimized is designed to operate on a decadal timeline, creating exponential operational leverage.",
  },
  {
    num: "04",
    title: "Precision Through Iteration",
    desc: "We deploy early, monitor rigorously, and refine relentlessly. Perfect systems are evolved, not planned from a whiteboard.",
  },
  {
    num: "05",
    title: "Modular Scalability",
    desc: "The ecosystem is designed to expand dynamically. New capabilities plug into existing foundations without fracturing the core.",
  },
  {
    num: "06",
    title: "Interdisciplinary Engineering",
    desc: "True innovation occurs at the intersection of domains. We merge software engineering, media logic, and physical architecture.",
  },
];

export const OperatingPrinciples = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-24"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">DOCTRINE</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-white">
              Operating<br />Principles
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed mt-8 md:mt-0">
            The foundational logic that governs how every module in the Integral ecosystem thinks, builds, and executes.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {principles.map((p, index) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
            >
              {/* Principle Number */}
              <div className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em] mb-6">
                [ PRINCIPLE {p.num} ]
              </div>

              {/* Title */}
              <h3 className="text-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-5 leading-tight group-hover:text-cyan-100 transition-colors duration-500">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {p.desc}
              </p>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
