"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useContent } from "@/lib/useContent";

export function JoinUs() {
  const { content } = useContent(
    ["home.join.title", "home.collab.title"],
    {
      "home.join.title": "Join Us",
      "home.collab.title": "Collaborate"
    }
  );

  return (
    <section className="bg-black border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Join Us */}
        <Link href="/about" className="group">
          <div className="bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-all duration-700 p-16 lg:p-32 flex flex-col justify-between h-[500px] lg:h-[700px] border-r border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-8 block">Talent_Acquisition</span>
              <h2 className="text-6xl lg:text-[7rem] font-display font-bold text-white tracking-tighter uppercase leading-none">
                {content["home.join.title"]}
              </h2>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-cyan-500 transition-colors">Career Opportunities</span>
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-all duration-500">
                <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Collaborate */}
        <Link href="/contact" className="group">
          <div className="bg-black hover:bg-[#050505] transition-all duration-700 p-16 lg:p-32 flex flex-col justify-between h-[500px] lg:h-[700px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-8 block">Strategic_Alliances</span>
              <h2 className="text-6xl lg:text-[7rem] font-display font-bold text-white tracking-tighter uppercase leading-none">
                {content["home.collab.title"]}
              </h2>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-purple-500 transition-colors">Strategic Partnerships</span>
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500">
                <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
