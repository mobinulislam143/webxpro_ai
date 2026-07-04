import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/marketing/Services";
import HowItWorks from "@/components/marketing/HowItWorks";

export const metadata: Metadata = {
  title: "Services — Webxpro AI | AI Receptionists, Lead Capture & Booking Automation",
  description:
    "AI receptionists, appointment setters, missed-call-to-text, CRM pipelines, and booking automation for local service businesses. One system, every leak plugged.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-ivory to-white pb-4 pt-20 sm:pt-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              Services
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Eight systems. One job:{" "}
              <span className="text-teal">stop the leaks.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graytext sm:text-lg">
              Every service below exists because a local business somewhere is
              losing money to a phone that rings out. Pick one, or let the
              audit tell you which combination pays back fastest.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />

      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="font-serif text-3xl text-charcoal">
            Not sure which one you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-graytext">
            That&apos;s literally what the free audit is for.
          </p>
          <Link
            href="/contact#audit-form"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            Get My Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
