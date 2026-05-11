import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col pt-40 pb-32 relative">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            <div className="inline-flex items-center space-x-4 mb-16">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">ORGANIZATION_DNA</span>
            </div>
            
            <h1 className="text-display text-5xl md:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] uppercase text-white mb-24">
              Built for <br />
              <span className="text-white/40 text-[0.8em]">Leverage</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12 text-white/50 text-xl font-light leading-relaxed">
                <p className="text-white/80 md:text-2xl font-normal border-l-2 border-cyan-500 pl-8 mb-12">
                  "We build systems, so the systems can build the future."
                </p>
                <p>
                  Integral Group is not an agency, a holding company, or a traditional technology firm. We are a decentralized ecosystem engineered for interdisciplinary execution.
                </p>
                <p>
                  Our architecture is built on the premise that modularity is the ultimate advantage. By decoupling specialized capabilities—from AI-integrated software to cinematic media production—we allow every unit to operate with the agility of a startup and the resources of a legacy institution.
                </p>
              </div>

              <div className="space-y-12">
                <div className="p-8 border border-white/10 bg-white/[0.02] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-[10px] group-hover:text-cyan-500 transition-colors">01 / MISSION</div>
                  <h3 className="text-display text-2xl font-bold uppercase text-white mb-4">Infrastructure Thinking</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    We solve foundational problems. Every process we optimize and every tool we build is designed to be a component of a larger, global infrastructure layer.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="p-8 border border-white/10 bg-white/[0.02] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-[10px] group-hover:text-cyan-500 transition-colors">02 / STRUCTURE</div>
                  <h3 className="text-display text-2xl font-bold uppercase text-white mb-4">Modular Execution</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    We deploy specialized nodes—Labs, Media, Products—that share a unified technological DNA but execute with absolute autonomy in their respective sectors.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="p-8 border border-white/10 bg-white/[0.02] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-[10px] group-hover:text-cyan-500 transition-colors">03 / HORIZON</div>
                  <h3 className="text-display text-2xl font-bold uppercase text-white mb-4">Decadal Engineering</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    Our timelines are not measured in quarters. We engineer for decades, ensuring that the systems we build today create compounding value for generations.
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
