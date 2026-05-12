"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Trash2, Mail, User, Clock, 
  CheckCircle2, AlertCircle, RefreshCw, Filter, ChevronRight
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export default function PipelineManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    setLoading(true);
    const { data, error } = await (supabase.from('contacts') as any)
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setContacts(data);
    }
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await (supabase.from('contacts') as any)
      .update({ status } as any)
      .eq('id', id);
    
    if (!error) fetchContacts();
  }

  async function deleteContact(id: string) {
    if (confirm("Purge this dossier from the pipeline?")) {
      await (supabase.from('contacts') as any).delete().eq('id', id);
      fetchContacts();
      setSelectedId(null);
    }
  }

  const selectedContact = contacts.find(c => c.id === selectedId);

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-cyan-500/60 mb-2">
            <RefreshCw size={11} className={loading ? "animate-spin" : ""} />
            <span>Operational_Command // Pipeline</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white">Transmission Pipeline</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            Array(5).fill(0).map((_, i) => <div key={i} className="h-20 bg-white/[0.02] border border-white/5 animate-pulse" />)
          ) : contacts.length > 0 ? (
            contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setSelectedId(contact.id)}
                className={cn(
                  "p-6 border transition-all cursor-pointer flex items-center justify-between group",
                  selectedId === contact.id ? "bg-white/[0.05] border-cyan-500/40" : "bg-black/40 border-white/5 hover:bg-white/[0.02]"
                )}
              >
                <div className="flex items-center space-x-6">
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center border",
                    contact.status === 'NEW' ? "border-cyan-500/20 text-cyan-500" : "border-white/10 text-white/20"
                  )}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{new Date(contact.created_at).toLocaleDateString()}</span>
                      <span className={cn(
                        "text-[8px] font-mono px-2 py-0.5 rounded-full border uppercase tracking-widest",
                        contact.status === 'NEW' ? "border-cyan-500/50 text-cyan-500 bg-cyan-500/5" : "border-white/10 text-white/30"
                      )}>{contact.status}</span>
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-tight text-white/80">{contact.name}</h3>
                  </div>
                </div>
                <ChevronRight size={16} className={cn("text-white/10 group-hover:text-cyan-500 transition-colors", selectedId === contact.id && "text-cyan-500")} />
              </div>
            ))
          ) : (
            <div className="py-20 text-center border border-dashed border-white/10">
               <AlertCircle className="mx-auto mb-4 text-white/10" size={32} />
               <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">No transmissions in the pipeline.</div>
            </div>
          )}
        </div>

        {/* Detail Panel */}
        <div className="space-y-6">
          <div className="border border-white/5 bg-black/40 p-8 flex flex-col min-h-[500px]">
            {selectedContact ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 flex-1 flex flex-col">
                <div className="space-y-6 pb-6 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <User size={24} className="text-cyan-500" />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => updateStatus(selectedContact.id, 'ARCHIVED')} title="Archive" className="p-2 border border-white/10 hover:border-white/30 transition-all text-white/20 hover:text-white"><CheckCircle2 size={16} /></button>
                      <button onClick={() => deleteContact(selectedContact.id)} title="Delete" className="p-2 border border-white/10 hover:border-red-500/30 transition-all text-white/20 hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-1">{selectedContact.name}</h2>
                    <div className="text-[11px] font-mono text-cyan-500/60 uppercase tracking-widest">{selectedContact.email}</div>
                  </div>
                </div>

                <div className="flex-1 space-y-6 py-6 overflow-y-auto">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Transmission_Subject</label>
                    <div className="text-xs text-white/80 uppercase tracking-widest">{selectedContact.subject || "NO_SUBJECT"}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-white/20 font-mono">Operational_Data</label>
                    <div className="text-sm text-white/60 leading-relaxed font-light">{selectedContact.message}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a 
                    href={`mailto:${selectedContact.email}`}
                    className="w-full py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cyan-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Mail size={14} />
                    Initialize_Response
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                <Mail size={48} className="text-white/5" />
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">Select a dossier to inspect</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
