"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, CircleCheckBig, TrendingUp } from "lucide-react";
import { niches } from "@/data/niches";
import { fadeUp, viewportOnce } from "./motion";

export default function Industries() {
  const [activeId, setActiveId] = useState(niches[0].id);
  const active = niches.find((n) => n.id === activeId) ?? niches[0];

  return (
    <section id="industries" className="bg-white py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
            Industries
          </p>
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Built for the way your business loses leads.
          </h2>
        </motion.div>

        {/* Niche tabs — horizontally scrollable on mobile */}
        <div
          role="tablist"
          aria-label="Industries"
          className="mb-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {niches.map((niche) => {
            const isActive = niche.id === activeId;
            return (
              <button
                key={niche.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`niche-panel-${niche.id}`}
                onClick={() => setActiveId(niche.id)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-teal bg-teal text-white"
                    : "border-charcoal/12 bg-transparent text-graytext hover:border-teal/40 hover:text-teal"
                }`}
              >
                {niche.name}
              </button>
            );
          })}
        </div>

        {/* Crossfading content panel */}
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`niche-panel-${active.id}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 md:grid-cols-3"
            >
              <div className="rounded-2xl border border-charcoal/8 bg-ivory/60 p-7">
                <div className="mb-3 flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-gold" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    The Problem
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-charcoal">
                  {active.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-teal/15 bg-teal/[0.04] p-7">
                <div className="mb-3 flex items-center gap-2">
                  <CircleCheckBig className="h-4 w-4 text-teal" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                    The System
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-charcoal">
                  {active.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-charcoal/8 bg-white p-7 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-teal" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-widest text-graytext">
                    What The Numbers Say
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-graytext">
                  {active.roiNote}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
