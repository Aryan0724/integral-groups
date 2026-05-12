"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
import { Send, MapPin, Mail, Globe, Cpu, User, MessageSquare, Terminal } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="relative">
      
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-infrastructure opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-20">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.4em] mb-4 block">System Interaction</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient">Collaborate & Connect</h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              We are looking for strategic partners, institutional collaborators, and exceptional engineers to build the next industrial era.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="tactical-border p-10 bg-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Inquiry Terminal</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Full_Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                        required
                        type="text"
                        placeholder="ENTER_NAME"
                        className="w-full pl-12 pr-4 py-4 bg-matte-black border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Email_Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                        required
                        type="email"
                        placeholder="ENTER_EMAIL"
                        className="w-full pl-12 pr-4 py-4 bg-matte-black border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Inquiry_Type</label>
                  <select className="w-full px-6 py-4 bg-matte-black border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest transition-all appearance-none">
                    <option>Strategic Partnership</option>
                    <option>Engineering Application</option>
                    <option>Project Inquiry</option>
                    <option>Media Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Message_Payload</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-muted" />
                    <textarea
                      required
                      rows={6}
                      placeholder="DESCRIBE_YOUR_INQUIRY"
                      className="w-full pl-12 pr-4 py-4 bg-matte-black border border-white/10 focus:border-primary outline-none text-[10px] font-mono uppercase tracking-widest transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full tactical-border py-5 bg-off-white text-matte-black font-bold font-mono text-xs uppercase hover:bg-primary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formStatus === "idle" && (
                    <>
                      Transmit Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === "sending" && "Processing Link..."}
                  {formStatus === "sent" && "Transmission Complete"}
                </button>
              </form>
            </motion.div>

            {/* Info Column */}
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-tight">Global Presence</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-text-muted uppercase">Node: Primary Hub</span>
                      <p className="text-off-white text-sm">Gurugram, India // Systems HQ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-text-muted uppercase">Network: Global</span>
                      <p className="text-off-white text-sm">Distributed remote operations across 4 continents.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Cpu className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-text-muted uppercase">Uplink: Direct</span>
                      <p className="text-off-white text-sm">contact@integral.systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 tactical-border bg-white/5">
                <h4 className="text-xs font-mono text-primary uppercase font-bold mb-4 tracking-widest">Join the Mission</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  We are always looking for technical talent who can think in systems and build for the long-term. If you thrive in high-execution environments, reach out.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-primary uppercase animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Now Hiring: AI Systems Engineer (Rust)
                </div>
              </div>

              {/* System Time Overlay */}
              <div className="mt-auto pt-12 flex flex-col gap-1 opacity-20">
                <span className="text-[9px] font-mono text-black/40 uppercase">Connection: Encrypted_AES-256</span>
                <span className="text-[9px] font-mono text-black/40 uppercase">Node: Primary_Hub // Online</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
