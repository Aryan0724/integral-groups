import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";
import { Cpu, Eye, Lightbulb, ArrowUpRight } from "lucide-react";

export default function EcosystemPage() {
  const nodes = [
    {
      id: "LABS",
      title: "Integral Labs",
      code: "NODE_01",
      icon: Cpu,
      desc: "Software systems, AI-integrated platforms, and scalable digital infrastructure.",
      href: "/ecosystem/labs",
      coords: "34.05 / 118.24"
    },
    {
      id: "MEDIA",
      title: "Integral Media",
      code: "NODE_02",
      icon: Eye,
      desc: "Cinematic storytelling, digital identity architecture, and visual systems.",
      href: "/ecosystem/media",
      coords: "40.71 / 74.00"
    },
    {
      id: "PROD",
      title: "Products & Innovation",
      code: "NODE_03",
      icon: Lightbulb,
      desc: "Experimental systems, future-focused hardware, and scalable product architecture.",
      href: "/ecosystem/products-innovation",
      coords: "37.77 / 122.41"
    }
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col pt-40 pb-24 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-32">
            <div className="inline-flex items-center space-x-4 mb-12">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">SYSTEM_ARCHITECTURE</span>
            </div>
            
            <h1 className="text-display text-5xl md:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] uppercase text-white mb-12">
              Ecosystem <br />
              <span className="text-white/40">Topology</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl text-balance">
              The Integral ecosystem operates as a series of interconnected specialized nodes, each engineered for distinct sectors but sharing a unified technological DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {nodes.map((node, idx) => (
              <Link 
                key={node.id}
                href={node.href}
                className="group relative p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 flex flex-col items-end opacity-20 font-mono text-[8px] tracking-[0.3em] group-hover:opacity-60 transition-opacity">
                  <span>{node.code}</span>
                  <span>LOC: {node.coords}</span>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-12 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                    <node.icon size={24} className="text-white/30 group-hover:text-cyan-500 transition-colors" />
                  </div>

                  <h2 className="text-display text-3xl font-bold uppercase text-white mb-6 tracking-tight">
                    {node.title}
                  </h2>
                  
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-12 min-h-[80px]">
                    {node.desc}
                  </p>

                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-500/60 group-hover:text-cyan-500 transition-colors">
                    <span>Access Node</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Tactical visual elements */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-cyan-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100" />
              </Link>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between opacity-30 font-mono text-[9px] uppercase tracking-[0.3em]">
            <div className="mb-4 md:mb-0">Interconnected_Systems_Verified</div>
            <div className="flex space-x-8">
              <span>Nodes: 03 Active</span>
              <span>Connectivity: 99.9%</span>
              <span>Latency: 2ms</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
