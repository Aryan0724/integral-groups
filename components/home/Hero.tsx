"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { useContent } from "@/lib/useContent";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { content } = useContent(
    ["home.hero.title", "home.hero.subtitle", "home.hero.video_url"],
    {
      "home.hero.title": "AI-Powered Automation for Every Decision",
      "home.hero.subtitle": "A startup venture building the digital infrastructure, media systems, and innovation platforms of the next industrial era.",
      "home.hero.video_url": "https://youtu.be/K_NOfMREpT0"
    }
  );

  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const rawVideoUrl = content["home.hero.video_url"];
  const youtubeId = getYouTubeId(rawVideoUrl) || "yd4Dp0j7I74";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">

      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {content["home.hero.video_url"] ? (
          youtubeId ? (
            <div className="w-full h-full pointer-events-none overflow-hidden scale-110">
              <iframe
                className="w-full h-full object-cover opacity-60 grayscale"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&iv_load_policy=3`}
                allow="autoplay; encrypted-media"
              />
            </div>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 grayscale"
              src={content["home.hero.video_url"]}
            />
          )
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Integral Infrastructure"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mt-12"
        >
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] mb-8">Integral Group Holdings // STRATEGIC_NODES</span>
          <h1 className="text-5xl md:text-[6.5rem] font-display font-bold leading-[0.95] text-white max-w-6xl tracking-tighter uppercase mb-12">
            {content["home.hero.title"].split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word} {i === 1 || i === 3 ? <br className="hidden md:block" /> : " "}
              </React.Fragment>
            ))}
          </h1>
          <div className="h-px bg-white/20 w-32 mb-12" />
          <p className="text-white/60 text-lg md:text-xl font-display max-w-2xl leading-relaxed uppercase tracking-wide">
            {content["home.hero.subtitle"]}
          </p>
        </motion.div>
      </div>

      {/* Bottom Product Ticker */}
      <div className="absolute bottom-12 left-0 right-0 z-20 hidden lg:block overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 border-t border-white/10 pt-8">
            {["AI Dept", "Web Dev", "SaaS", "Media", "Marketing", "Sales", "R&D", "Collab"].map((tag, i) => (
              <span 
                key={tag}
                className={cn(
                  "px-6 py-2 text-[10px] font-mono uppercase tracking-[0.2em] border transition-all cursor-pointer whitespace-nowrap",
                  i === 0 ? "bg-white text-black border-white" : "border-white/10 text-white/40 hover:border-white/30"
                )}
              >
                {tag}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-4">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Sys_Status: Operational</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
