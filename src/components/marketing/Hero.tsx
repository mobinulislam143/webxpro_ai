"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Subtle dot-grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,123,108,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Slow-drifting accent line */}
      <motion.div
        aria-hidden
        className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-teal/5 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-block rounded-full border border-teal/20 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-teal sm:text-sm"
          >
            AI Automation for Local Businesses That Hate Losing Money
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl md:text-6xl"
          >
            Every Missed Lead, <span className="text-teal">Captured</span> And
            Followed Up In Seconds —{" "}
            <span className="italic">While You Sleep.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-graytext sm:text-lg"
          >
            Your voicemail is where revenue goes to die. Our AI answers every
            call, chases every lead, and books your calendar 24/7. No new
            hires. No &ldquo;we&apos;ll circle back.&rdquo; Just a phone that
            finally pays for itself.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#audit-form"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 sm:w-auto sm:text-base"
            >
              Get Your Free Audit <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex w-full items-center justify-center rounded-full border border-charcoal/15 bg-transparent px-8 py-3.5 text-sm font-semibold text-charcoal hover:border-charcoal/30 sm:w-auto sm:text-base"
            >
              See How It Works
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
