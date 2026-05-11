import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/home/Hero";
import { InteractiveEcosystem } from "@/components/home/InteractiveEcosystem";
import { EcosystemOverview } from "@/components/home/EcosystemOverview";
import { MissionTransmission } from "@/components/home/MissionTransmission";
import { OperatingPrinciples } from "@/components/home/OperatingPrinciples";

import { RoadmapPreview } from "@/components/home/RoadmapPreview";
import { IntelligencePreview } from "@/components/home/IntelligencePreview";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <InteractiveEcosystem />
      <EcosystemOverview />
      <MissionTransmission />
      <OperatingPrinciples />

      <RoadmapPreview />
      <IntelligencePreview />
      <FinalCta />
      <Footer />
    </main>
  );
}

