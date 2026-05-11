"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COMMANDS = [
  { text: "open labs", path: "/ecosystem/labs" },
  { text: "open media", path: "/ecosystem/media" },
  { text: "open innovation", path: "/ecosystem/products-innovation" },
  { text: "open products", path: "/ecosystem/products-innovation" },
  { text: "initialize intelligence", path: "/intelligence" },
  { text: "explore ecosystem", path: "/ecosystem" },
  { text: "read doctrine", path: "/philosophy" },
  { text: "view timeline", path: "/vision" },
  { text: "init contact", path: "/contact" },
];

export const CommandUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Boot sequence lines
  const bootLines = [
    "INTEGRAL_OS [v4.0.1] INITIALIZING...",
    "KERNEL_SECURE_BOOT: SUCCESS",
    "NODE_SYNC: 100% [ENCRYPTED]",
    "SYSTEM_ONLINE: WAITING FOR COMMAND..."
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Clear history and start boot sequence
      setHistory([]);
      bootLines.forEach((line, i) => {
        setTimeout(() => {
          setHistory(prev => [...prev, line]);
        }, i * 200);
      });
      setTimeout(() => inputRef.current?.focus(), bootLines.length * 200 + 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const match = COMMANDS.find((c) => c.text === cmd);

    setHistory((prev) => [...prev, `> ${cmd}`]);

    if (match) {
      setHistory((prev) => [...prev, `EXECUTING_SEQUENCE: ${match.path}...`]);
      setTimeout(() => {
        setIsOpen(false);
        router.push(match.path);
        setInput("");
      }, 500);
    } else {
      setHistory((prev) => [...prev, `ERROR: COMMAND '${cmd}' UNRECOGNIZED.`]);
    }

    setInput("");
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-black border border-white/20 flex items-center justify-center text-white/50 hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
      >
        <Terminal size={18} className="group-hover:animate-pulse" />
        <div className="absolute right-full mr-4 text-[10px] uppercase tracking-widest text-white/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          System Console [Ctrl+K]
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative"
            >
              {/* CRT Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-20" />
              
              {/* Terminal Header */}
              <div className="bg-black border-b border-white/10 px-4 py-2 flex items-center justify-between relative z-20">
                <div className="flex items-center space-x-2">
                  <Terminal size={12} className="text-cyan-500" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-mono">
                    Terminal_Output // INTEGRAL_OS
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white">
                  <X size={14} />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-8 h-[320px] overflow-y-auto font-mono text-[11px] text-white/70 flex flex-col space-y-2 relative z-20 custom-scrollbar">
                {history.map((line, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className={cn(
                      line.startsWith(">") ? "text-cyan-500" : 
                      line.startsWith("ERROR") ? "text-red-500/80" : "text-white/60"
                    )}
                  >
                    {line}
                  </motion.div>
                ))}
                
                <form onSubmit={handleSubmit} className="flex items-center mt-4">
                  <span className="text-cyan-500 mr-3">{">"}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-[11px] caret-cyan-500"
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <span className="w-1.5 h-3 bg-cyan-500/50 animate-pulse inline-block" />
                </form>
              </div>
              
              {/* Visual Frame Accents */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/20" />
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
