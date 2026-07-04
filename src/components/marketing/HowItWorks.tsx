"use client";

import { motion } from "framer-motion";
import { Cable, Bot, Send, Trophy, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Cable,
    title: "Connect your number & CRM",
    description:
      "We layer the system onto your existing phone line and tools. Nothing to migrate, nothing to learn.",
  },
  {
    icon: Bot,
    title: "AI answers & qualifies 24/7",
    description:
      "Every call, text, and form fill gets an instant, natural response — trained on your business.",
  },
  {
    icon: Send,
    title: "Hot leads pushed to you",
    description:
      "Qualified, booked, and delivered with full context. You see who's ready to buy, instantly.",
  },
  {
    icon: Trophy,
    title: "You close more, do less",
    description:
      "Your calendar fills itself. Your team spends its time selling, not chasing voicemails.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              How It Works
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Live in weeks, not quarters.
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {/* Thin connecting line (desktop) */}
            <div
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-teal/30 md:block"
            />

            {steps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-teal/25 bg-white shadow-sm">
                  <step.icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal/70">
                  Step {i + 1}
                </p>
                <h3 className="font-serif text-lg text-charcoal">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-graytext">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
