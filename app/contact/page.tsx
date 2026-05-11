import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center relative pt-32 pb-24">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] uppercase tracking-[0.4em]">COMMS_LINK</span>
              <div className="w-12 h-[1px] bg-cyan-500" />
            </div>
            
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white leading-[1.1]">
              We are assembling<br />
              <span className="text-white/40">engineers, builders,</span><br />
              creators,<br />
              <span className="text-white/40">and system thinkers.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 mb-16 max-w-lg mx-auto font-light leading-relaxed">
              Integral Group is expanding its ecosystem. We build digital infrastructure, media systems, and future-focused innovation platforms.
            </p>
            
            <button type="button" className="group relative px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-300">
              <span className="relative z-10">Join The Ecosystem</span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
