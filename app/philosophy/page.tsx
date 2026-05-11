import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";

export default function PhilosophyPage() {
  const principles = [
    {
      id: "01",
      title: "Systems Over Hype",
      text: "We reject temporary trends. Our focus is exclusively on building enduring, self-sustaining architectures that compound in value."
    },
    {
      id: "02",
      title: "Execution Over Noise",
      text: "The ability to coordinate complex systems and ship reliable infrastructure is our primary metric for success."
    },
    {
      id: "03",
      title: "Long-Term Leverage",
      text: "Every tool built and process optimized is designed to operate on a decadal timeline, creating exponential operational leverage."
    },
    {
      id: "04",
      title: "Precision Through Iteration",
      text: "We deploy early, monitor rigorously, and refine relentlessly. Perfect systems are evolved, not planned."
    },
    {
      id: "05",
      title: "Modular Scalability",
      text: "The ecosystem is designed to expand dynamically. New capabilities plug into existing foundations without fracturing the core."
    },
    {
      id: "06",
      title: "Interdisciplinary Engineering",
      text: "True innovation occurs at the intersection of domains. We merge software engineering, media logic, and physical architecture."
    }
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col relative pt-40 pb-32">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-32">
            <div className="inline-flex items-center space-x-4 mb-16">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em] font-mono">DOCTRINE_MANUAL</span>
            </div>
            
            <h1 className="text-display text-5xl md:text-8xl lg:text-[140px] font-bold tracking-tighter mb-12 uppercase text-white leading-[0.85]">
              The Core <br />
              <span className="text-white/40">Doctrine</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/50 font-light leading-snug max-w-2xl text-balance border-l-2 border-white/10 pl-6">
              The foundational logic driving the Integral ecosystem. These principles dictate how we engineer, operate, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 border-t border-white/10 pt-24">
            {principles.map((principle) => (
              <div key={principle.id} className="relative group">
                <div className="text-[10px] uppercase tracking-[0.5em] font-mono text-cyan-500 mb-6 flex items-center space-x-4">
                  <span>[ PRINCIPLE {principle.id} ]</span>
                  <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-cyan-500/50 transition-colors" />
                </div>
                
                <h2 className="text-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white group-hover:text-cyan-500 transition-colors">
                  {principle.title}
                </h2>
                
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
                  {principle.text}
                </p>
                
                {/* Subtle technical UI */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-40 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest font-mono text-white/30 mb-8 md:mb-0">
              END OF DOCUMENT [ REF: 0x992A ]
            </div>
            
            <Link href="/" className="group relative px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 hover:border-white">
              <span className="relative z-10 flex items-center">
                Return to Ecosystem
              </span>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
