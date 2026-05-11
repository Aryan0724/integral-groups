import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { DossierGrid } from "@/components/intelligence/DossierGrid";

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="pt-40 pb-16 relative border-b border-white/5 mb-16">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">CLASSIFIED_TERMINAL</span>
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Strategic Research
          </h1>
          <p className="text-white/40 max-w-2xl text-lg font-light leading-relaxed">
            Technical analysis, engineering dossiers, and classified reports on the 
            development of automated infrastructure.
          </p>
        </div>
      </section>

      {/* Advanced Research Platform */}
      <DossierGrid />

      <Footer />
    </main>
  );
}
