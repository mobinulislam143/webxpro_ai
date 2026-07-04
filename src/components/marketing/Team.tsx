"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

const vibes = [
  {
    title: "Small team. Zero bloat.",
    text: "No account managers passing you around, no 'let me check with the team.' The people who build your system are the people you talk to.",
  },
  {
    title: "We ship, not slide-deck.",
    text: "Some agencies send you a 40-page strategy PDF. We send you a working system that answers your phone by week two.",
  },
  {
    title: "Terminally online (on purpose).",
    text: "We live inside this tech every day, so you don't have to. You run your business — your AI just quietly stops the leaks.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              The Team
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Automation nerds. Business brains.
            </h2>
            <p className="mt-4 text-base text-graytext">
              A lean crew of AI system builders who treat your missed calls
              like our own money on fire.
            </p>
          </motion.div>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {vibes.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-2xl border border-charcoal/8 bg-ivory/60 p-7"
              >
                <h3 className="font-serif text-lg text-charcoal">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graytext">{v.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Tool stack */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              The Stack We&apos;re Dangerous With
            </p>
            <p className="mx-auto mb-8 max-w-xl text-sm text-graytext">
              Not logos for decoration — this is what actually runs your system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl border border-charcoal/8 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-charcoal">{tool.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-graytext">
                  {tool.purpose}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
