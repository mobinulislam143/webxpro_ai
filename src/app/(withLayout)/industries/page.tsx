import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { niches } from "@/data/niches";

export const metadata: Metadata = {
  title: "Industries — Webxpro AI | AI Automation by Trade",
  description:
    "AI lead capture and booking automation tailored for property management, insurance agencies, auto dealerships, home services, med spas, construction, and roofing.",
};

export default function IndustriesPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-ivory to-white pb-16 pt-20 sm:pt-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              Industries
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Your industry leaks leads in a{" "}
              <span className="text-teal">very specific way.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graytext sm:text-lg">
              We don&apos;t do one-size-fits-all. Pick your trade and see
              exactly where the money escapes — and how the system plugs it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {niches.map((niche) => (
              <Link
                key={niche.id}
                href={`/industries/${niche.id}`}
                className="group rounded-2xl border border-charcoal/8 bg-ivory/60 p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md"
              >
                <h2 className="font-serif text-xl text-charcoal group-hover:text-teal">
                  {niche.name}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-graytext">
                  {niche.problem}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  See the fix
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
