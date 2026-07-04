"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { niches } from "@/data/niches";
import { auditSchema, type AuditFormValues } from "@/validations/audit";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

const bottlenecks = [
  { value: "missed-calls", label: "Missed calls" },
  { value: "slow-follow-up", label: "Slow follow-up" },
  { value: "no-crm", label: "No CRM" },
  { value: "manual-outreach", label: "Manual outreach" },
  { value: "other", label: "Other" },
];

const leadVolumes = [
  { value: "", label: "Prefer not to say" },
  { value: "under-50", label: "Under 50 / month" },
  { value: "50-150", label: "50–150 / month" },
  { value: "150-500", label: "150–500 / month" },
  { value: "500-plus", label: "500+ / month" },
];

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      industry: "",
      bottleneck: "",
      leadVolume: "",
      website: "",
    },
  });

  const onSubmit = async (values: AuditFormValues) => {
    // Honeypot tripped — pretend success, discard silently
    if (values.website) {
      setSubmitted(true);
      return;
    }
    setSubmitError(null);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Couldn't send right now — try again in a minute, or ping us on WhatsApp below.",
      );
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal ${
      hasError ? "border-red-400" : "border-charcoal/12"
    }`;

  return (
    <section id="audit-form" className="bg-white py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              Free Audit
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Find out exactly where your leads are leaking.
            </h2>
            <p className="mt-4 text-base text-graytext">
              A 15-minute walkthrough of your lead flow, missed-call exposure,
              and what a system would look like for your business. No pitch, no
              obligation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-charcoal/8 bg-ivory/60 p-8 shadow-sm sm:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="py-10 text-center"
              >
                <CircleCheckBig className="mx-auto mb-4 h-12 w-12 text-teal" strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-charcoal">
                  Request received.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graytext">
                  We&apos;ll review your lead flow and reach out within one
                  business day to schedule your audit. Keep an eye on your
                  inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="audit-name" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Name
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="audit-business" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Business Name
                    </label>
                    <input
                      id="audit-business"
                      type="text"
                      autoComplete="organization"
                      {...register("businessName")}
                      className={inputClass(!!errors.businessName)}
                    />
                    {errors.businessName && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.businessName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="audit-industry" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Industry
                    </label>
                    <select
                      id="audit-industry"
                      {...register("industry")}
                      className={inputClass(!!errors.industry)}
                    >
                      <option value="">Select…</option>
                      {niches.map((niche) => (
                        <option key={niche.id} value={niche.id}>
                          {niche.name}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                    {errors.industry && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.industry.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="audit-bottleneck" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Biggest Bottleneck
                    </label>
                    <select
                      id="audit-bottleneck"
                      {...register("bottleneck")}
                      className={inputClass(!!errors.bottleneck)}
                    >
                      <option value="">Select…</option>
                      {bottlenecks.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                    {errors.bottleneck && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.bottleneck.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="audit-lead-volume" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Current Monthly Lead Volume{" "}
                    <span className="font-normal text-graytext/70">(optional)</span>
                  </label>
                  <select
                    id="audit-lead-volume"
                    {...register("leadVolume")}
                    className={inputClass(false)}
                  >
                    {leadVolumes.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Honeypot — hidden from humans, tempting to bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="audit-website">Website</label>
                  <input
                    id="audit-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-full rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-teal/20 disabled:opacity-60 sm:text-base"
                >
                  {isSubmitting ? "Sending…" : "Claim My Free Audit"}
                </motion.button>

                {submitError && (
                  <p className="text-center text-sm text-red-500">{submitError}</p>
                )}

                <p className="text-center text-xs text-graytext/70">
                  No spam, no list. We only use this to prepare your audit.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
