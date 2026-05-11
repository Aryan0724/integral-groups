import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#020202] overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-40 pb-32">
        {/* Specific Atmosphere: Blueprint aesthetics, grids, schematics */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-small opacity-[0.03] pointer-events-none" />
        
        {/* Central Blueprint Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border border-cyan-500/10 rounded-full pointer-events-none flex items-center justify-center">
          <div className="w-[80%] h-[80%] border border-cyan-500/5 rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">NODE: LABS</span>
            <div className="w-12 h-[1px] bg-cyan-500" />
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Integral Labs
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
            Engineering digital systems, AI-integrated platforms, and scalable execution infrastructure.
          </p>
          
          <div className="w-full max-w-5xl mx-auto border border-white/10 bg-black/50 backdrop-blur-md relative overflow-hidden flex flex-col text-left">
            {/* Terminal Header */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono">labs.integral.group/architecture</span>
            </div>
            
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">[ Core Operations ]</h3>
                  <ul className="space-y-4 text-white/60 font-light text-sm">
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span><strong>Web Platforms:</strong> High-performance frontend architectures and robust backend systems.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span><strong>AI Integrations:</strong> Connecting foundational models to operational business logic.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span><strong>Dashboards:</strong> Data-dense control centers for monitoring execution capabilities.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Simulated Schematic */}
              <div className="border border-white/10 bg-white/[0.02] p-6 relative group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.05)_0%,_transparent_100%)]" />
                <div className="w-full h-full flex flex-col justify-between space-y-6 relative z-10">
                  <div className="flex justify-between items-center opacity-50">
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                    <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-widest">Client Layer</span>
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                  </div>
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 border border-cyan-500/30 flex items-center justify-center"><div className="w-1 h-1 bg-cyan-500" /></div>
                    <div className="w-8 h-8 border border-cyan-500/30 flex items-center justify-center"><div className="w-1 h-1 bg-cyan-500" /></div>
                  </div>
                  <div className="flex justify-between items-center opacity-50">
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                    <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-widest">Logic Layer</span>
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-8 border border-cyan-500/50 flex items-center justify-center bg-cyan-500/10">
                      <span className="font-mono text-[10px] text-cyan-500">API</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center opacity-50">
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                    <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-widest">Data Layer</span>
                    <div className="w-1/3 h-[1px] bg-cyan-500/50" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-500/5 px-8 py-4 border-t border-cyan-500/20 flex justify-between items-center">
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Software Systems for Modern Operations</span>
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
