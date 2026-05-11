import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col pt-40 pb-24 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center space-x-4 mb-16">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">PUBLIC_DOCUMENTATION</span>
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Integral Design System
          </h1>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-16 max-w-2xl">
            The formal architectural guidelines, visual motifs, and interaction patterns 
            that define the Integral Group ecosystem.
          </p>

          <div className="space-y-32">
            
            {/* TYPOGRAPHY */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xs uppercase tracking-widest text-cyan-500 font-mono">01. Typography</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-display text-4xl font-bold mb-4">Space Grotesk</h3>
                  <p className="text-white/40 text-sm font-light mb-8">Primary Display Typeface. Used for massive architectural statements, structural headers, and primary node identifiers.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/20 font-mono mb-2">Display (7XL)</div>
                      <div className="text-display text-7xl font-bold">SYSTEMS</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/20 font-mono mb-2">Header (4XL)</div>
                      <div className="text-display text-4xl font-bold">Ecosystem Overview</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-2xl font-light mb-4">Inter</h3>
                  <p className="text-white/40 text-sm font-light mb-8">Secondary Interface Typeface. Used for long-form reading, metadata, structural data, and interface labels.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/20 font-mono mb-2">Body (Base)</div>
                      <div className="font-sans text-base font-light text-white/60 leading-relaxed">
                        By building shared technological infrastructure, we empower specialized modules to operate with unprecedented autonomy and speed.
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/20 font-mono mb-2">Metadata (XS / Mono)</div>
                      <div className="font-mono text-xs uppercase tracking-widest text-cyan-500">
                        [ STATUS: ONLINE ]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VISUAL MOTIFS */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xs uppercase tracking-widest text-cyan-500 font-mono">02. Visual Motifs</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/10 bg-black p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-small opacity-20 group-hover:animate-[spin_120s_linear_infinite]" />
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                    <div className="w-16 h-16 border border-cyan-500/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Ecosystem Nodes</h4>
                      <p className="text-xs text-white/40 font-light">Represent specialized departments connected to the central OS.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 bg-black p-8 relative overflow-hidden group">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:animate-[scan_2s_linear_infinite]" />
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                    <div className="mb-8" />
                    <div>
                      <h4 className="text-sm font-bold mb-2">Tactical Scanlines</h4>
                      <p className="text-xs text-white/40 font-light">Used in dossier cards and active terminals to indicate data processing.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 bg-black p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 group-hover:border-cyan-500 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 group-hover:border-cyan-500 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-8 group-hover:border-white/30 transition-colors">
                      <span className="font-mono text-[10px] text-white/30">+</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Hardware Brackets</h4>
                      <p className="text-xs text-white/40 font-light">Anchors UI elements to create an aerospace, industrial-hardware feel.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTION PATTERNS */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-xs uppercase tracking-widest text-cyan-500 font-mono">03. Interaction Architecture</h2>
              </div>
              
              <div className="space-y-6 text-white/60 font-light text-sm max-w-3xl leading-relaxed">
                <p><strong className="text-white font-normal">Cinematic Transition (Global):</strong> All page transitions use a 0.8s bezier curve easing `[0.22, 1, 0.36, 1]` coupled with an opacity crossfade and a 10px blur reduction. This prevents jarring DOM swaps and maintains immersion.</p>
                <p><strong className="text-white font-normal">Magnetic System Nodes:</strong> Interactive mapping elements trigger atmospheric shifts upon hover. Connecting paths illuminate, peripheral nodes dim, and detailed metadata dynamically expands via `AnimatePresence`.</p>
                <p><strong className="text-white font-normal">The Command Terminal (Ctrl+K):</strong> Power-user navigation is handled via a global terminal overlay. Executing typed commands creates the highest level of "operating system" perception.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
