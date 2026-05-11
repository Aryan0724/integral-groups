"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Eye } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ArticleType, ClearanceLevel } from "@/lib/articles";

const ARTICLE_TYPES: ArticleType[] = ["STRATEGIC_REPORT", "SYSTEMS_ANALYSIS", "ENGINEERING_ESSAY", "FRAMEWORK"];
const CLEARANCE_LEVELS: ClearanceLevel[] = ["PUBLIC", "LEVEL_1", "LEVEL_2"];

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<ArticleType>("STRATEGIC_REPORT");
  const [clearance, setClearance] = useState<ClearanceLevel>("PUBLIC");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);
  const [saved, setSaved] = useState(false);

  const charCount = content.length;
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readTime = Math.ceil(wordCount / 200);

  const handlePublish = () => {
    // TODO: Persist to Supabase
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/intelligence" className="text-white/30 hover:text-white transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-cyan-500/60 mb-1">NEW_TRANSMISSION</div>
            <h1 className="text-xl uppercase tracking-[0.15em] font-bold">Draft Article</h1>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPreview(!preview)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2.5 border text-[10px] uppercase tracking-widest transition-all",
              preview ? "border-cyan-500/50 text-cyan-500" : "border-white/10 text-white/40 hover:text-white hover:border-white/20"
            )}
          >
            <Eye size={12} />
            <span>Preview</span>
          </button>
          <button
            onClick={handlePublish}
            className="flex items-center space-x-2 px-5 py-2.5 bg-cyan-500 text-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
          >
            <Send size={12} />
            <span>{saved ? "Transmitted!" : "Publish"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Editor */}
        <div className="col-span-2 space-y-4">
          {/* Title */}
          <div className="border border-white/10 bg-black/30 p-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30 mb-3">Article Title</div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ENTER_TRANSMISSION_TITLE..."
              className="w-full bg-transparent border-none outline-none text-white text-lg tracking-wide placeholder:text-white/20 uppercase"
            />
          </div>

          {/* Content */}
          <div className="border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[9px] uppercase tracking-widest text-white/30">Content</div>
              <div className="text-[9px] text-white/20 font-mono">
                {wordCount} words · {readTime} min read
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your intelligence report, strategic analysis, or engineering essay here..."
              rows={20}
              className="w-full bg-transparent border-none outline-none text-white/80 text-sm leading-relaxed resize-none placeholder:text-white/20 font-sans"
            />
          </div>
        </div>

        {/* Metadata Sidebar */}
        <div className="space-y-4">
          {/* Auto ID */}
          <div className="border border-white/10 bg-black/30 p-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Article ID</div>
            <div className="text-cyan-500 font-mono text-sm">INT-05 (auto)</div>
          </div>

          {/* Type */}
          <div className="border border-white/10 bg-black/30 p-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30 mb-3">Type</div>
            <div className="space-y-1.5">
              {ARTICLE_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-[9px] uppercase tracking-widest border transition-all",
                    type === t
                      ? "border-cyan-500/50 text-cyan-500 bg-cyan-500/10"
                      : "border-white/10 text-white/30 hover:text-white/60"
                  )}
                >
                  {t.replace(/_/g, " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Clearance */}
          <div className="border border-white/10 bg-black/30 p-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30 mb-3">Clearance Level</div>
            <div className="space-y-1.5">
              {CLEARANCE_LEVELS.map((c) => (
                <button
                  key={c}
                  onClick={() => setClearance(c)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-[9px] uppercase tracking-widest border transition-all",
                    clearance === c
                      ? "border-white/30 text-white"
                      : "border-white/10 text-white/30 hover:text-white/60"
                  )}
                >
                  {c.replace("_", " ")}
                </button>
              ))}
            </div>
            {clearance !== "PUBLIC" && (
              <div className="mt-3 text-[8px] text-white/20 uppercase tracking-widest">
                RESTRICTED: Will appear locked on public site
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="border border-white/10 bg-black/30 p-4 space-y-2">
            <div className="text-[9px] uppercase tracking-widest text-white/30 mb-3">Metrics</div>
            {[
              { label: "Characters", value: charCount },
              { label: "Words", value: wordCount },
              { label: "Read Time", value: `~${readTime} min` },
            ].map((m) => (
              <div key={m.label} className="flex justify-between text-[9px]">
                <span className="text-white/30 uppercase tracking-widest">{m.label}</span>
                <span className="text-white/60 font-mono">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
