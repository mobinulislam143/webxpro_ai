"use client";

import { useEffect, useMemo } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

// Assumed share of currently-missed inquiries the AI captures. Surfaced in the
// fine print below the result — keep the two in sync if this changes.
const AI_CAPTURE_RATE = 0.7;

function AnimatedDollars({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const display = useTransform(mv, (v) => `$${Math.round(v).toLocaleString("en-US")}`);

  useEffect(() => {
    if (reducedMotion) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 0.6, ease: "easeOut" });
    return () => controls.stop();
  }, [value, mv, reducedMotion]);

  return <motion.span>{display}</motion.span>;
}

function clampNumber(raw: string, min: number, max: number): number {
  const parsed = Number(raw.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(parsed)) return min;
  return Math.min(max, Math.max(min, parsed));
}

export default function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(30);
  const [dealValue, setDealValue] = useState(500);
  const [closeRate, setCloseRate] = useState(25);

  const estimatedRecovered = useMemo(
    () => missedCalls * AI_CAPTURE_RATE * (closeRate / 100) * dealValue,
    [missedCalls, dealValue, closeRate],
  );

  return (
    <section id="roi-calculator" className="bg-ivory py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              ROI Calculator
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              What is voicemail costing you?
            </h2>
            <p className="mt-4 text-base text-graytext">
              Plug in your own numbers. No email required.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-7 p-8 sm:p-10">
                <div>
                  <label
                    htmlFor="roi-missed-calls"
                    className="mb-2 block text-sm font-medium text-charcoal"
                  >
                    Avg. missed calls / inquiries per month
                  </label>
                  <input
                    id="roi-missed-calls"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={10000}
                    value={missedCalls}
                    onChange={(e) =>
                      setMissedCalls(clampNumber(e.target.value, 0, 10000))
                    }
                    className="w-full rounded-xl border border-charcoal/12 bg-ivory/40 px-4 py-3 text-charcoal outline-none transition-colors focus:border-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="roi-deal-value"
                    className="mb-2 block text-sm font-medium text-charcoal"
                  >
                    Avg. deal / policy / job value ($)
                  </label>
                  <input
                    id="roi-deal-value"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={1000000}
                    value={dealValue}
                    onChange={(e) =>
                      setDealValue(clampNumber(e.target.value, 0, 1000000))
                    }
                    className="w-full rounded-xl border border-charcoal/12 bg-ivory/40 px-4 py-3 text-charcoal outline-none transition-colors focus:border-teal"
                  />
                </div>

                <div>
                  <label
                    htmlFor="roi-close-rate"
                    className="mb-2 flex items-center justify-between text-sm font-medium text-charcoal"
                  >
                    <span>Current close rate on answered leads</span>
                    <span className="font-serif text-lg text-teal">{closeRate}%</span>
                  </label>
                  <input
                    id="roi-close-rate"
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full accent-teal"
                  />
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col justify-center border-t border-charcoal/8 bg-charcoal/[0.02] p-8 sm:p-10 md:border-l md:border-t-0">
                <p className="text-sm font-medium uppercase tracking-widest text-graytext">
                  Estimated Monthly Revenue Recovered
                </p>
                <p className="mt-3 font-serif text-5xl text-teal sm:text-6xl">
                  <AnimatedDollars value={estimatedRecovered} />
                </p>

                <motion.a
                  href="#audit-form"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/20"
                >
                  Get This In Writing — Free Audit
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <p className="mt-6 text-xs leading-relaxed text-graytext/70">
                  Honest estimate, not a guarantee. Formula: missed inquiries ×{" "}
                  {AI_CAPTURE_RATE * 100}% assumed AI capture rate × your close
                  rate × your average value. Actual results depend on lead
                  quality and your sales process.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
