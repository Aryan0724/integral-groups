import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function ProductsInnovationPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-32 pb-24">
        {/* Specific Atmosphere: Experimental, Conceptual, Orbital Systems */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        
        {/* Orbital/Prototype Visuals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-dashed border-indigo-500/10 rounded-full animate-[spin_90s_linear_infinite]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-indigo-500" />
            <span className="text-indigo-500 text-[10px] uppercase tracking-[0.4em] font-mono">NODE: R&D</span>
            <div className="w-12 h-[1px] bg-indigo-500" />
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Department of Products & Innovation
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
            Researching, designing, and developing scalable products, intelligent tools, 
            and experimental systems. The proving ground for future architecture.
          </p>
          
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Intelligent Tools", desc: "AI-augmented workflows and operational dashboards currently in active prototyping." },
              { title: "Scalable Platforms", desc: "Multi-tenant architecture designs for future B2B execution infrastructure." },
              { title: "Experimental Systems", desc: "Early-stage conceptual engineering connecting software directly to physical hardware." }
            ].map((initiative, idx) => (
              <div key={idx} className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/50 transition-all p-6 relative overflow-hidden group cursor-crosshair">
                <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                </div>
                <h3 className="text-indigo-400 font-bold mb-3 tracking-wide">{initiative.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{initiative.desc}</p>
                
                <div className="mt-8 text-[10px] uppercase tracking-widest text-white/30 font-mono">
                  [ Exploring ]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
