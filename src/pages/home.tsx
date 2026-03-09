import { lazy, Suspense } from "react";
import Hero from "@/components/sections/hero";
import Consulting from "@/components/sections/consulting";

const Deliverables = lazy(() => import("@/components/sections/deliverables"));
const Services = lazy(() => import("@/components/sections/services"));
const TechStack = lazy(() => import("@/components/sections/tech-stack"));

function SectionPlaceholder() {
  return (
    <section aria-hidden="true" className="py-24">
      <div className="container mx-auto max-w-6xl px-8 md:px-16">
        <div className="mb-8 h-10 w-56 rounded-full bg-white/5" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-40 rounded-[28px] bg-white/[0.04]" />
          <div className="h-40 rounded-[28px] bg-white/[0.04]" />
          <div className="h-40 rounded-[28px] bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Consulting />
      <Suspense fallback={<SectionPlaceholder />}>
        <Deliverables />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <TechStack />
      </Suspense>
    </main>
  );
}
