"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function JoinUs() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Request a Demo Style -> Join Us */}
        <Link href="/contact" className="group">
          <div className="bg-[#e2e2e2] hover:bg-[#d8d8d8] transition-colors p-16 lg:p-24 flex flex-col justify-between h-[400px] lg:h-[600px] border-r border-white">
            <h2 className="text-5xl lg:text-7xl font-display font-medium text-black tracking-tight">
              Join Us
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-widest text-black/60">Career Opportunities</span>
              <ArrowRight className="w-12 h-12 text-black group-hover:translate-x-4 transition-transform duration-500" />
            </div>
          </div>
        </Link>

        {/* Start Building Style -> Collaborate */}
        <Link href="/contact" className="group">
          <div className="bg-[#1a1a1a] hover:bg-black transition-colors p-16 lg:p-24 flex flex-col justify-between h-[400px] lg:h-[600px]">
            <h2 className="text-5xl lg:text-7xl font-display font-medium text-white tracking-tight">
              Collaborate
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-widest text-white/60">Strategic Partnerships</span>
              <ArrowRight className="w-12 h-12 text-white group-hover:translate-x-4 transition-transform duration-500" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
