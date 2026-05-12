"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { FileText, Download, Filter, Search, Calendar, Clock, User, ShieldAlert } from "lucide-react";
import { useState } from "react";

const reports = [
  {
    id: "REP-2026-001",
    title: "The Shift Toward Autonomous Industrial Infrastructure",
    summary: "An in-depth analysis of how decentralized AI is restructuring global logistics and industrial production cycles.",
    category: "Industrial Intelligence",
    date: "May 2026",
    readTime: "12 min",
    author: "Dr. Marcus Chen",
    classification: "UNCLASSIFIED // PUBLIC",
  },
  {
    id: "REP-2026-002",
    title: "Post-Quantum Cryptography in Distributed Edge Networks",
    summary: "Technical evaluation of NIST-finalized algorithms for securing industrial IoT meshes against future quantum threats.",
    category: "Technical Research",
    date: "April 2026",
    readTime: "18 min",
    author: "Sarah Jenkins",
    classification: "RESTRICTED // PARTNERS ONLY",
  },
  {
    id: "REP-2026-003",
    title: "Multi-Agent Systems in Unstructured Environments",
    summary: "Framework for coordinating autonomous swarm behavior in complex, non-deterministic industrial settings.",
    category: "AI & Robotics",
    date: "March 2026",
    readTime: "24 min",
    author: "Integral Labs Team",
    classification: "UNCLASSIFIED // PUBLIC",
  },
  {
    id: "REP-2026-004",
    title: "Strategic Intelligence Report: The Future of Compute Sovereignty",
    summary: "Geopolitical analysis of specialized silicon manufacturing and its impact on regional AI infrastructure autonomy.",
    category: "Strategic Intelligence",
    date: "February 2026",
    readTime: "15 min",
    author: "Elena Rossi",
    classification: "UNCLASSIFIED // PUBLIC",
  },
];

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Industrial Intelligence", "Technical Research", "AI & Robotics", "Strategic Intelligence"];

  const filteredReports = activeCategory === "All" 
    ? reports 
    : reports.filter(r => r.category === activeCategory);

  return (
    <div className="relative">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.4em] mb-4 block">Intelligence Archive</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Research & Intelligence</h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Strategic analysis, technical whitepapers, and future system research. We provide the intelligence necessary to navigate the next industrial era.
              </p>
            </div>
            
            {/* Classification Banner */}
            <div className="p-6 tactical-border bg-amber-500/5 border-amber-500/20 max-w-sm">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-amber-500 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-amber-500 uppercase font-bold mb-2">Access Notice</span>
                  <p className="text-[11px] font-mono text-text-secondary uppercase leading-tight">
                    Certain reports are restricted to verified partners and institutional contributors. Request access via the collaborate portal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 py-6 border-y border-white/5">
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${
                    activeCategory === cat 
                      ? "bg-primary text-matte-black border-primary font-bold" 
                      : "bg-transparent text-text-muted border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="SEARCH ARCHIVE..."
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest transition-all"
              />
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 gap-8">
            {filteredReports.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="tactical-border p-8 bg-white/5 hover:bg-white/10 transition-all group flex flex-col lg:flex-row gap-12"
              >
                {/* ID & Classification */}
                <div className="w-full lg:w-48 flex flex-col gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-text-muted uppercase">Document ID</span>
                    <span className="text-sm font-mono text-primary font-bold">{report.id}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-text-muted uppercase">Classification</span>
                    <span className={`text-[10px] font-mono font-bold uppercase ${
                      report.classification.includes("RESTRICTED") ? "text-amber-500" : "text-emerald-500"
                    }`}>
                      {report.classification}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{report.category}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-3xl">
                    {report.summary}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-text-muted" />
                      <span className="text-[10px] font-mono text-text-muted uppercase">{report.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-text-muted" />
                      <span className="text-[10px] font-mono text-text-muted uppercase">{report.readTime} READ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-text-muted" />
                      <span className="text-[10px] font-mono text-text-muted uppercase">{report.author}</span>
                    </div>
                  </div>
                </div>

                {/* Download Action */}
                <div className="w-full lg:w-48 flex items-center justify-end lg:justify-center">
                  <button className="flex flex-col items-center gap-3 p-6 glass-panel border-white/10 hover:border-primary hover:bg-primary/10 transition-all group/dl">
                    <Download className="w-6 h-6 text-primary group-hover/dl:translate-y-1 transition-transform" />
                    <span className="text-[10px] font-mono text-text-secondary uppercase group-hover/dl:text-primary transition-colors">Download PDF</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 p-12 bg-graphite border border-white/5 text-center">
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">Institutional Collaboration</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">
              We collaborate with research institutions and strategic partners to build the foundational knowledge for future industrial systems.
            </p>
            <button className="tactical-border px-10 py-4 bg-off-white text-matte-black font-bold font-mono text-xs uppercase hover:bg-primary transition-all">
              Request Partner Access
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
