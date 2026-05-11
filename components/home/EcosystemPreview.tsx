"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const EcosystemPreview = () => {
  return (
    <>
      <section className="h-[50vh] flex items-center justify-center bg-black relative">
        <div className="absolute inset-0 bg-grid-small opacity-10" />
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-[1px] bg-gradient-to-b from-white/20 to-transparent mx-auto mb-12" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-display text-3xl md:text-5xl font-light tracking-widest text-white/40 uppercase"
          >
            Strategic Infrastructure
          </motion.h2>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-black relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-cyan-500 text-xs uppercase tracking-[0.4em] mb-4 block">01 / ECOSYSTEM</span>
              <h3 className="text-display text-4xl md:text-6xl font-bold mb-8">
                Modular <br /> Architecture
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-md font-light">
                Integral Group operates as a decentralized network of specialized departments, 
                sharing a common core of advanced intelligence and shared infrastructure.
              </p>
              <button className="flex items-center space-x-4 text-xs uppercase tracking-[0.3em] group text-white/80 hover:text-white transition-colors">
                <span>Explore Departments</span>
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-square border border-white/5 bg-white/[0.02] relative group overflow-hidden"
            >
               {/* Decorative elements */}
               <div className="absolute inset-0 bg-grid opacity-20" />
               <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 group-hover:border-cyan-500 transition-colors duration-500" />
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 group-hover:border-cyan-500 transition-colors duration-500" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-white/10 rounded-full animate-pulse-slow flex items-center justify-center">
                    <div className="w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse flex items-center justify-center">
                      <div className="w-4 h-4 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                    </div>
                  </div>
               </div>

               {/* Tactical Overlay */}
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    System Core <br /> v1.0.4
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono">
                    ACTIVE_NODE_ALPHA
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
