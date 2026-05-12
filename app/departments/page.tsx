"use client";

import { Footer } from "@/components/shared/Footer";
import { Departments } from "@/components/home/Departments";
import { motion } from "framer-motion";

export default function DepartmentsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[12rem] font-display font-bold leading-none tracking-tighter mb-8 uppercase">
              DEPARTMENTS
            </h1>
            <p className="text-2xl text-black/60 leading-relaxed max-w-2xl uppercase tracking-wide">
              The modular components of the Integral Group ecosystem. Each department is a specialized unit focused on a specific layer of the future industrial stack.
            </p>
          </motion.div>
        </div>

        <Departments />
      </main>

      <Footer />
    </div>
  );
}
