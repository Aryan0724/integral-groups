import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-32 pb-24">
        {/* Specific Atmosphere: Industrial workflow, automation diagrams */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-500" />
            <span className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-mono">NODE: AUTOMATION</span>
            <div className="w-12 h-[1px] bg-neutral-500" />
          </div>
          
          <h1 className="text-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Integral Automation
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
            Industrial workflow systems, supply chain robotics, and the deployment of 
            autonomous physical infrastructure.
          </p>
          
          <div className="w-full max-w-3xl mx-auto border border-neutral-700/50 bg-neutral-900/10 aspect-video relative flex items-center justify-center overflow-hidden">
             {/* Simulated Flowchart */}
             <div className="flex space-x-8 items-center opacity-30">
                <div className="w-16 h-16 border border-neutral-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-neutral-500" />
                </div>
                <div className="w-12 h-[1px] bg-neutral-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-neutral-500 rotate-45" />
                </div>
                <div className="w-16 h-16 border border-neutral-500 flex items-center justify-center">
                  <div className="w-4 h-4 bg-neutral-500" />
                </div>
                <div className="w-12 h-[1px] bg-neutral-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-neutral-500 rotate-45" />
                </div>
                <div className="w-16 h-16 border border-neutral-500 flex items-center justify-center bg-neutral-500/20">
                  <div className="w-8 h-8 bg-neutral-500" />
                </div>
             </div>
             
             <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
               [ Workflow System Active ]
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
