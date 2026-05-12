"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";
import { useContent } from "@/lib/useContent";
import { supabase } from "@/lib/supabase";

export default function CollaboratePage() {
  const { content } = useContent(
    ["collab.hero.title", "collab.hero.subtitle", "collab.cta.title", "collab.cta.desc"],
    {
      "collab.hero.title": "Assemble The Team",
      "collab.hero.subtitle": "We are building engineers, creators, strategists, and system thinkers into a modular execution force. This is not a job listing. This is a mission invitation.",
      "collab.cta.title": "Send your dossier.",
      "collab.cta.desc": "No formal process. No corporate HR. Send an email outlining your background, what you build, and why Integral's mission resonates with you."
    }
  );

  const [tracks, setTracks] = useState<any[]>([
    {
      code: "ENG",
      title: "Engineering",
      desc: "Software systems, AI platforms, backend infrastructure, automation pipelines.",
      tags: ["Full-Stack", "AI/ML", "Systems Architecture", "DevOps"],
    },
    {
      code: "CRE",
      title: "Creative",
      desc: "Visual identity, cinematography, motion design, brand systems and digital presence.",
      tags: ["UI/UX", "Cinematography", "Motion", "Brand"],
    },
    {
      code: "STR",
      title: "Strategy",
      desc: "Ecosystem architecture, market intelligence, operational frameworks, and growth systems.",
      tags: ["Research", "Operations", "Product", "Systems Thinking"],
    },
    {
      code: "RES",
      title: "Research",
      desc: "Technical analysis, engineering essays, emerging technology, and future-systems thinking.",
      tags: ["Technical Writing", "AI Research", "Systems Analysis", "Documentation"],
    },
  ]);

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col pt-40 pb-32 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-5xl mb-32">
            <div className="inline-flex items-center space-x-4 mb-16">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">PIPELINE_OPEN</span>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-display text-5xl md:text-8xl lg:text-[130px] font-bold tracking-tighter uppercase text-white leading-[0.85] mb-16">
              Assemble<br />
              <span className="text-white/40 text-[0.75em]">{content["collab.hero.title"].split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl text-balance">
              {content["collab.hero.subtitle"]}
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 mb-24">
            {tracks.map((track, idx) => (
              <div 
                key={track.code}
                className="group relative p-10 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
              >
                <div className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em] mb-6">
                  [ TRACK {track.code} ]
                </div>

                <h2 className="text-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-5">
                  {track.title}
                </h2>
                
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                  {track.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/30 group-hover:border-cyan-500/30 group-hover:text-cyan-500/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />
              </div>
            ))}
          </div>

          {/* Application CTA */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-white/10 pt-16 gap-12">
            <div className="max-w-xl">
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-6">HOW TO APPLY</div>
              <h3 className="text-display text-3xl font-bold uppercase text-white mb-4">{content["collab.cta.title"]}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {content["collab.cta.desc"]}
              </p>
            </div>
            
            <Link 
              href="/contact"
              className="group relative flex-shrink-0 px-12 py-5 border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 flex items-center space-x-4"
            >
              <span className="relative z-10">Initialize Contact</span>
              <div className="relative z-10 w-6 h-[1px] bg-white/50 group-hover:w-10 group-hover:bg-cyan-500 transition-all duration-300" />
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Bottom metadata */}
          <div className="mt-24 pt-8 border-t border-white/5 flex items-center justify-between opacity-30 font-mono text-[9px] uppercase tracking-[0.3em]">
            <span>Integral_Ecosystem_Pipeline_v1.0</span>
            <span>Status: Active Recruitment</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

