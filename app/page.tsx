import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { MissionTransmission } from "@/components/home/MissionTransmission";
import { ActiveSystems } from "@/components/home/ActiveSystems";
import { Departments } from "@/components/home/Departments";
import { Roadmap } from "@/components/home/Roadmap";
import { JoinUs } from "@/components/home/JoinUs";

export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen">
      <Hero />
      <MissionTransmission />
      <ActiveSystems />
      <Departments />
      <Roadmap />
      <JoinUs />
      <Footer />
    </div>
  );
}
