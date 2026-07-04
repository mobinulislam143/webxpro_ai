import type { Metadata } from "next";
import Link from "next/link";
import Team from "@/components/marketing/Team";
import Founder from "@/components/marketing/Founder";

export const metadata: Metadata = {
  title: "About — Webxpro AI | The Team Behind the Systems",
  description:
    "A lean team of AI automation specialists building lead capture, booking, and follow-up systems for US local service businesses. Meet the founder.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-ivory to-white pb-4 pt-20 sm:pt-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              About Us
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              We build the systems.{" "}
              <span className="text-teal">You keep the leads.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graytext sm:text-lg">
              Webxpro AI exists for one reason: local service businesses lose
              absurd amounts of money to missed calls and slow follow-up, and
              fixing that with AI is now cheaper than hiring for it.
            </p>
          </div>
        </div>
      </section>

      <Team />
      <Founder />

      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="font-serif text-3xl text-charcoal">
            Sound like your kind of people?
          </h2>
          <Link
            href="/contact#audit-form"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            Start With a Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
