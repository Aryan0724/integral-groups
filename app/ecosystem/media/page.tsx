import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-40 pb-32">
        {/* Specific Atmosphere: Cinematic storytelling, moving visual layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />
        
        {/* Abstract Cinematic Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[50vh] bg-white/5 blur-[150px] rounded-[100%] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-white/50" />
            <span className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-mono">NODE: MEDIA</span>
            <div className="w-12 h-[1px] bg-white/50" />
          </div>
          
          <h1 className="text-display text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase">
            Integral Media
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-xl font-light leading-relaxed mb-24">
            Media systems focused on storytelling, branding, digital presence, and visual influence.
          </p>
          
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Editorial Focus Blocks */}
            {[
              { title: "Storytelling", desc: "Constructing narrative architectures that dictate how ecosystems are perceived." },
              { title: "Branding", desc: "Systematic identity design operating at the intersection of logic and aesthetics." },
              { title: "Visual Systems", desc: "Scalable design languages that maintain consistency across all digital interfaces." },
              { title: "Creative Strategy", desc: "High-level direction for campaign rollouts and intellectual property expansion." },
              { title: "Content Ecosystems", desc: "Interconnected media pipelines that drive discoverability and authority." },
              { title: "Digital Identity", desc: "Crafting the psychological imprint a system leaves on its users." }
            ].map((block, idx) => (
              <div key={idx} className="border-t border-white/20 pt-6 group">
                <h3 className="text-display text-2xl font-bold mb-4 tracking-tight group-hover:text-cyan-500 transition-colors">{block.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 w-full max-w-6xl mx-auto aspect-[21/9] relative flex items-center justify-center overflow-hidden bg-black group">
             {/* Simulated Cinematic Crop */}
             <div className="absolute top-0 left-0 right-0 h-16 bg-black z-20" />
             <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20" />
             
             {/* Slow Moving Layers */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-[10s]" />
             <div className="absolute inset-0 bg-black/50" />
             
             <div className="relative z-30 text-display text-4xl md:text-6xl font-bold tracking-widest text-white/90 mix-blend-overlay">
               VISUAL INFLUENCE
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
