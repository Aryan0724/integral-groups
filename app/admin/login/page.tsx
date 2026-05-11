"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, Lock, AlertCircle } from "lucide-react";

// Inner component that uses useSearchParams — must be wrapped in Suspense
function AdminLoginInner() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [bootComplete, setBootComplete] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const BOOT_SEQUENCE = [
    "INTEGRAL_OS [v4.0.1] BOOTING...",
    "HARDWARE_CHECK: PASSED",
    "NETWORK_TOPOLOGY: ENCRYPTED",
    "KERNEL_SECURE_BOOT: ACTIVE",
    "AWAITING AUTHENTICATION...",
  ];

  useEffect(() => {
    BOOT_SEQUENCE.forEach((line, i) => {
      setTimeout(() => {
        setBootLines((prev) => [...prev, line]);
        if (i === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => setBootComplete(true), 300);
        }
      }, i * 250);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setBootLines((prev) => [...prev, "AUTH_GRANTED: ACCESS_PERMITTED", "INITIALIZING_CONTROL_CENTER..."]);
        setTimeout(() => router.push(from), 800);
      } else {
        setStatus("error");
        setBootLines((prev) => [...prev, "AUTH_DENIED: INVALID_CREDENTIALS"]);
        setTimeout(() => {
          setStatus("idle");
          setPassword("");
        }, 2000);
      }
    } catch {
      setStatus("error");
      setBootLines((prev) => [...prev, "ERROR: NETWORK_FAILURE"]);
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-mono relative overflow-hidden px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-small opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_70%)]" />

      {/* Corner Markers */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/10" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/10" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/10" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Terminal Window */}
        <div className="border border-white/10 bg-[#0a0a0a] overflow-hidden">
          <div className="border-b border-white/10 px-6 py-3 flex items-center justify-between bg-black">
            <div className="flex items-center space-x-2">
              <Terminal size={12} className="text-cyan-500" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                INTEGRAL_OS // AUTH_TERMINAL
              </span>
            </div>
            <div className="flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Boot Sequence Output */}
          <div className="p-6 min-h-[180px] text-[11px] space-y-1.5">
            {bootLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={
                  line.includes("GRANTED") || line.includes("INITIALIZING")
                    ? "text-green-500"
                    : line.includes("DENIED") || line.includes("ERROR")
                    ? "text-red-500"
                    : line.includes("AWAITING")
                    ? "text-cyan-500"
                    : "text-white/40"
                }
              >
                {line}
              </motion.div>
            ))}
            {!bootComplete && (
              <span className="inline-block w-1.5 h-3 bg-white/30 animate-pulse" />
            )}
          </div>

          {/* Auth Form */}
          {bootComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="border-t border-white/10 p-6"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 text-[10px] text-white/40 uppercase tracking-widest mb-6">
                  <Lock size={12} />
                  <span>AUTHENTICATION REQUIRED</span>
                </div>

                <div className="flex items-center space-x-3 border border-white/10 px-4 py-3 focus-within:border-cyan-500/50 transition-colors">
                  <span className="text-cyan-500">›</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ENTER_ACCESS_KEY"
                    className="flex-1 bg-transparent border-none outline-none text-white text-xs uppercase tracking-widest placeholder:text-white/20 caret-cyan-500"
                    autoFocus
                    autoComplete="current-password"
                    disabled={status === "loading" || status === "success"}
                  />
                  {status === "loading" && (
                    <span className="w-1.5 h-3 bg-cyan-500/60 animate-pulse" />
                  )}
                  {status === "error" && (
                    <AlertCircle size={14} className="text-red-500" />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full py-3 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-30 active:scale-[0.99]"
                >
                  {status === "loading" ? "AUTHENTICATING..." : status === "success" ? "ACCESS_GRANTED" : "INITIATE_SESSION"}
                </button>
              </form>

              <div className="mt-6 text-[8px] text-white/20 uppercase tracking-widest text-center">
                UNAUTHORIZED ACCESS IS MONITORED AND LOGGED
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-[8px] text-white/20 uppercase tracking-widest">
          INTEGRAL GROUP // RESTRICTED SYSTEM // v4.0.1
        </div>
      </motion.div>
    </div>
  );
}

// Loading fallback for Suspense
function LoginFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
    </div>
  );
}

// Page component wraps inner in Suspense (required for useSearchParams)
export default function AdminLogin() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <AdminLoginInner />
    </Suspense>
  );
}
