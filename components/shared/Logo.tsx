"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className, showText = true }: LogoProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("flex items-center group cursor-pointer", className)}
    >
      <div className="flex items-center">
        {/* The Integral Symbol (∫) */}
        <span className="text-4xl md:text-6xl font-bold font-serif text-white leading-none select-none italic">
          ∫
        </span>

        {showText && (
          <span className="text-display font-bold tracking-[0.5em] text-xl md:text-2xl uppercase text-white leading-none ml-2">
            NTEGRAL
          </span>
        )}
      </div>
    </motion.div>
  );
};
