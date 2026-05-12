"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { BookOpen, ArrowRight, ArrowUpRight, Share2, MessageSquare } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Scaling Distributed Autonomy: Lessons from our Alpha Deployment",
    excerpt: "Exploring the challenges and breakthroughs in deploying multi-agent systems across decentralized industrial nodes.",
    date: "May 10, 2026",
    category: "Engineering Log",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Architecture of Trust in Autonomous Systems",
    excerpt: "Why architectural integrity is more important than raw compute power in building reliable future-focused ecosystems.",
    date: "May 2, 2026",
    category: "Systems Essay",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Refactoring the Industrial Stack for the AI Era",
    excerpt: "A technical breakdown of how we are re-engineering legacy industrial APIs for intelligent automation.",
    date: "April 24, 2026",
    category: "Technical Breakthrough",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Project Alpha-Nine: Towards Self-Healing Networks",
    excerpt: "Our latest research into autonomous infrastructure that detects and repairs structural anomalies in real-time.",
    date: "April 15, 2026",
    category: "R&D Progress",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export default function JournalPage() {
  return (
    <div className="relative">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Systems Documentation</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient">Integral Journal</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Engineering notes, technical essays, and development logs from the front lines of future systems construction.
            </p>
          </div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 group relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden tactical-border">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">{articles[0].category}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs font-mono text-text-muted uppercase">{articles[0].date}</span>
                </div>
                <h2 className="text-4xl font-display font-bold hover:text-primary transition-colors cursor-pointer leading-tight">
                  {articles[0].title}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mt-4">
                  <Link
                    href="#"
                    className="tactical-border px-8 py-3 bg-off-white text-matte-black text-xs font-mono uppercase font-bold hover:bg-primary transition-all flex items-center gap-2 group/btn"
                  >
                    Read Full Entry <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-xs font-mono text-text-muted uppercase">{articles[0].readTime} READ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden tactical-border">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-matte-black/30 group-hover:bg-transparent transition-all" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{article.category}</span>
                  <span className="text-[10px] font-mono text-text-muted uppercase">{article.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono text-text-muted uppercase">{article.readTime} READ</span>
                  <div className="flex items-center gap-4">
                    <button className="text-text-muted hover:text-primary transition-colors"><Share2 className="w-4 h-4" /></button>
                    <button className="text-text-muted hover:text-primary transition-colors"><MessageSquare className="w-4 h-4" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter / Subscription */}
          <div className="mt-24 p-12 tactical-border bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BookOpen className="w-48 h-48 text-primary" />
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">System Updates</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Receive technical updates, research summaries, and engineering breakthroughs directly from our labs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="EMAIL_ADDRESS"
                  className="flex-1 px-6 py-4 bg-matte-black border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest"
                />
                <button className="tactical-border px-8 py-4 bg-off-white text-matte-black font-bold font-mono text-xs uppercase hover:bg-primary transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
