import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Consulting from "@/components/sections/consulting";
import Deliverables from "@/components/sections/deliverables";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Consulting />
      <Deliverables />
      <Services />
      <TechStack />
    </main>
  );
}
