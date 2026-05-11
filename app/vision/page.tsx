import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function VisionPage() {
  const vectors = [
    { label: "INTELLIGENT SYSTEMS", value: "0x882B", status: "ACTIVE" },
    { label: "AUTONOMOUS LOGISTICS", value: "0x442C", status: "PENDING" },
    { label: "MODULAR ARCHITECTURE", value: "0x221D", status: "STABLE" },
    { label: "STRATEGIC DEFENSE", value: "0x119E", status: "EXPANDING" }
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col pt-40 pb-32 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-4 mb-12">
                <div className="w-12 h-[1px] bg-cyan-500" />
                <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">STRATEGIC_PROJECTION</span>
              </div>
              
              <h1 className="text-display text-5xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white mb-12">
                Engineering <br />
                <span className="text-white/40">The Long-Term</span>
              </h1>
            </div>
            
            <div className="hidden lg:block text-right pb-4">
              <div className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.3em] mb-4">Current Vector Analysis</div>
              <div className="space-y-2">
                {vectors.map((v) => (
                  <div key={v.value} className="flex items-center justify-end space-x-4 text-[9px] font-mono uppercase tracking-widest text-white/30">
                    <span>{v.label}</span>
                    <span className="text-white/60">{v.value}</span>
                    <span className="text-cyan-500">[{v.status}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] border border-white/10 bg-white/[0.01] overflow-hidden group">
            {/* Visual background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid-small" />
            
            {/* Tactical Scanlines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-scan" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[600px] h-[600px]">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 border border-cyan-500/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
                <div className="absolute inset-24 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 border border-cyan-500 flex items-center justify-center mb-6 bg-black shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <div className="w-4 h-4 bg-cyan-500 animate-pulse" />
                  </div>
                  <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em]">INTEGRAL.VISION.CORE</div>
                </div>

                {/* Satellite data nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-[1px] h-12 bg-cyan-500/30" />
                    <span className="text-[8px] font-mono text-white/30 tracking-widest">EXPANSION_01</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-8">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-[8px] font-mono text-white/30 tracking-widest">EXPANSION_02</span>
                    <div className="w-[1px] h-12 bg-cyan-500/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 p-6 flex flex-col space-y-1 opacity-40">
              <div className="flex space-x-1"><div className="w-1 h-1 bg-white" /><div className="w-1 h-1 bg-white/20" /></div>
              <div className="text-[8px] font-mono text-white tracking-widest">SEC_GRID_ALPHA</div>
            </div>
            <div className="absolute bottom-0 right-0 p-6 text-right opacity-40">
              <div className="text-[8px] font-mono text-white tracking-widest mb-1">PROJECTION_v4.0.1</div>
              <div className="flex justify-end space-x-1"><div className="w-1 h-1 bg-white/20" /><div className="w-1 h-1 bg-white" /></div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
            <div className="space-y-6">
              <h3 className="text-display text-2xl font-bold uppercase text-white">System Unity</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Our vision is to consolidate fragmented industrial workflows into a single, modular execution platform.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-display text-2xl font-bold uppercase text-white">Autonomous Scaling</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                By integrating AI-driven coordination, we enable the ecosystem to scale horizontally across multiple sectors.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-display text-2xl font-bold uppercase text-white">Legacy of Build</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                We measure our progress in decades. Our vision is to create infrastructure that remains operational for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
