import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function DefensePage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-32 pb-24">
        {/* Specific Atmosphere: Tactical aerospace feel, radar visuals */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black pointer-events-none" />
        
        {/* Radar/Map Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-green-500/5 rounded-full pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-500/10 rounded-full pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green-500/20 rounded-full pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[1200px] bg-green-500/10 pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1px] bg-green-500/10 pointer-events-none opacity-20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-green-500/50" />
            <span className="text-green-500/70 text-[10px] uppercase tracking-[0.4em] font-mono">NODE: DEFENSE</span>
            <div className="w-12 h-[1px] bg-green-500/50" />
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Integral Defense
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
            Tactical engineering, advanced aerospace systems, and secure infrastructure. 
            Industrial military minimalism applied to next-generation hardware.
          </p>
          
          <div className="w-full max-w-2xl mx-auto aspect-square border border-green-500/20 bg-green-900/5 relative flex items-center justify-center overflow-hidden rounded-full">
             {/* Radar Sweep */}
             <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] origin-left animate-[spin_4s_linear_infinite]" />
             
             {/* Radar Blips */}
             <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-ping" />
             <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-ping" style={{ animationDelay: '1s' }} />

             <div className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-green-500/50 font-mono bg-black/50 px-4 py-2 rounded-full border border-green-500/20">
               [ Area Scanned: Clear ]
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
