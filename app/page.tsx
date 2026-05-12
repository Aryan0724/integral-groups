import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { ActiveSystems } from "@/components/home/ActiveSystems";
import { Departments } from "@/components/home/Departments";
import { JoinUs } from "@/components/home/JoinUs";

export default function HomePage() {
  return (
    <div className="relative bg-white min-h-screen">
      <Hero />
      <ActiveSystems />
      <Departments />
      <JoinUs />
      <Footer />
    </div>
  );
}
