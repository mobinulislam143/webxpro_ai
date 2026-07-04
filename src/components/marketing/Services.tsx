"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  CalendarCheck,
  Target,
  Headphones,
  Zap,
  CalendarClock,
  Workflow,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

const icons: Record<string, LucideIcon> = {
  "ai-receptionist": PhoneCall,
  "ai-appointment-setter": CalendarCheck,
  "lead-gen": Target,
  "customer-service-agent": Headphones,
  "lead-capture-follow-up": Zap,
  "booking-automation": CalendarClock,
  "crm-outreach-pipelines": Workflow,
  "missed-call-to-text": MessageSquareText,
};

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-20 sm:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
              What We Build
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              One system, every leak plugged.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = icons[service.id] ?? Zap;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-2xl border border-charcoal/8 bg-white p-6 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-lg text-charcoal">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graytext">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
