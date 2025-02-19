import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Consulting from "@/components/sections/consulting";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Consulting />
      <Contact />
    </main>
  );
}
