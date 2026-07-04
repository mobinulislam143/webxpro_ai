"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import founderPhoto from "@/assets/image/founder-profile.jpeg";
import { WhatsAppIcon } from "./WhatsAppButton";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

export default function Founder() {
  const { founder } = site;

  return (
    <section id="founder" className="bg-ivory py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={founderPhoto}
                  alt={founder.name}
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
                  Founder
                </p>
                <h2 className="font-serif text-3xl text-charcoal">{founder.name}</h2>
                <p className="mt-1 text-sm font-medium text-gold">{founder.role}</p>

                <p className="mt-5 text-sm leading-relaxed text-graytext">
                  An automation systems architect and web developer, Mobinul
                  designs every Webxpro AI system end-to-end — the AI agents,
                  the integrations, and the websites behind them. Every client
                  works directly with the engineer who built their system, not
                  an account manager.
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-graytext/70">
                    Web Development Stack
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {founder.devSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-teal/20 bg-teal/[0.05] px-3.5 py-1.5 text-xs font-medium text-teal"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2.5 text-xs text-graytext/70">
                    This website is one of his builds.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {site.whatsappNumber}
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-teal hover:text-teal"
                  >
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                    {founder.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
