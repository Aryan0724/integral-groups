"use client";

import React from "react";
import { motion } from "framer-motion";

export const SystemOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-30">
      {/* Corner Coordinate Markers - Minimalist */}
      <div className="absolute top-4 left-4 font-mono text-[7px] text-white/10 uppercase tracking-[0.2em]">
        <span>34.0522 // ACTIVE</span>
      </div>
      
      <div className="absolute top-4 right-4 font-mono text-[7px] text-white/10 uppercase tracking-[0.2em] text-right">
        <span>0x992A // v4.0.1</span>
      </div>

      {/* Side Edge Markers - Balanced Positioning */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col space-y-4 font-mono text-[7px] text-white/10 uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
        <span>INTEGRAL_GRP // ENCRYPTED</span>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-center space-y-3 font-mono text-[7px] text-white/10 uppercase tracking-[0.2em]">
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-1 h-1 bg-cyan-500/50 rounded-full mb-2"
        />
        <div className="[writing-mode:vertical-lr] space-y-4">
          <span>SYNC_100 // NODE_SYNC</span>
        </div>
      </div>

      {/* Extreme Corner Brackets */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/5" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/5" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/5" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/5" />
    </div>
  );
};
