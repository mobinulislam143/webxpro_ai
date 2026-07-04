"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

const stats = [
  {
    value: "62%",
    label: "of calls to small businesses go unanswered",
    detail: "Industry benchmark across local service categories.",
  },
  {
    value: "85%",
    label: "of callers who reach voicemail never call back",
    detail: "They dial the next result instead — your competitor.",
  },
  {
    value: "$1k–5k+",
    label: "typical monthly revenue leak from missed inquiries",
    detail: "Benchmark range; varies with call volume and job value.",
  },
];

export default function ProblemStats() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              The leads you never hear about are the{" "}
              <span className="text-teal">expensive ones.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-2xl border border-charcoal/8 bg-ivory/60 p-8 shadow-sm"
              >
                <p className="font-serif text-5xl text-teal">{stat.value}</p>
                <p className="mt-4 text-base font-medium leading-snug text-charcoal">
                  {stat.label}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-graytext/80">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-center text-xs text-graytext/70"
          >
            Figures reflect published industry benchmarks for local service
            businesses, not client-specific results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
