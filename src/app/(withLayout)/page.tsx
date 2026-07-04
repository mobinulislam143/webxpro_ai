import dynamic from "next/dynamic";
import Hero from "@/components/marketing/Hero";
import ProblemStats from "@/components/marketing/ProblemStats";
import Services from "@/components/marketing/Services";
import Industries from "@/components/marketing/Industries";
import HowItWorks from "@/components/marketing/HowItWorks";
import AuditForm from "@/components/marketing/AuditForm";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";

function SectionSkeleton() {
  return (
    <div className="container py-20 sm:py-24">
      <div className="mx-auto max-w-4xl animate-pulse space-y-6">
        <div className="mx-auto h-8 w-2/3 rounded-lg bg-charcoal/5" />
        <div className="h-72 rounded-3xl bg-charcoal/5" />
      </div>
    </div>
  );
}

// Heavier interactive sections are code-split so the initial load stays light
const RoiCalculator = dynamic(
  () => import("@/components/marketing/RoiCalculator"),
  { loading: () => <SectionSkeleton /> },
);
const LiveDemo = dynamic(() => import("@/components/marketing/LiveDemo"), {
  loading: () => <SectionSkeleton />,
});

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory">
      <Hero />
      <ProblemStats />
      <Services />
      <Industries />
      <RoiCalculator />
      <LiveDemo />
      <HowItWorks />
      <AuditForm />
      <FAQ />
      <Footer />
    </main>
  );
}
