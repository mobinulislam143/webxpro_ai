import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { niches } from "@/data/niches";
import AuditForm from "@/components/marketing/AuditForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return niches.map((niche) => ({ slug: niche.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const niche = niches.find((n) => n.id === slug);
  if (!niche) return {};
  return {
    title: `AI Automation for ${niche.name} — Webxpro AI`,
    description: `${niche.problem} ${niche.solution}`,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const niche = niches.find((n) => n.id === slug);
  if (!niche) notFound();

  return (
    <main className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-ivory to-white pb-16 pt-16 sm:pt-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/industries"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-graytext transition-colors hover:text-teal"
            >
              <ArrowLeft className="h-4 w-4" />
              All industries
            </Link>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              AI Automation for {niche.name}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              {niche.name}: stop paying for leads you{" "}
              <span className="text-teal">never talk to.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-charcoal/8 bg-ivory/60 p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                The Problem
              </p>
              <p className="text-sm leading-relaxed text-charcoal">{niche.problem}</p>
            </div>
            <div className="rounded-2xl border border-teal/15 bg-teal/[0.04] p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
                The System
              </p>
              <p className="text-sm leading-relaxed text-charcoal">{niche.solution}</p>
            </div>
            <div className="rounded-2xl border border-charcoal/8 bg-white p-7 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-graytext">
                What The Numbers Say
              </p>
              <p className="text-sm leading-relaxed text-graytext">{niche.roiNote}</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-sm text-graytext">
              Want the math for your exact numbers? Try the{" "}
              <Link href="/#roi-calculator" className="font-semibold text-teal underline underline-offset-4">
                ROI calculator
              </Link>{" "}
              or grab the free audit below.
            </p>
          </div>
        </div>
      </section>

      <AuditForm />
    </main>
  );
}
