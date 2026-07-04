import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/marketing/WhatsAppButton";
import AuditForm from "@/components/marketing/AuditForm";

export const metadata: Metadata = {
  title: "Contact — Webxpro AI | WhatsApp, Email, or Free Audit",
  description:
    "Reach Webxpro AI on WhatsApp or email, or request a free lead-flow audit for your local service business. Fast replies, no gatekeepers.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-ivory to-white pb-16 pt-20 sm:pt-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              Contact
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Talk to a human.{" "}
              <span className="text-teal">Ironically, we&apos;re fast too.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graytext sm:text-lg">
              WhatsApp is the fastest way to reach us — usually within the
              hour. Or skip straight to the free audit form below.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-charcoal/8 bg-white p-7 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <p className="font-serif text-lg text-charcoal">WhatsApp</p>
              <p className="mt-1 text-sm font-medium text-teal">{site.whatsappNumber}</p>
              <p className="mt-2 text-xs text-graytext">
                Opens WhatsApp directly — fastest reply
              </p>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group rounded-2xl border border-charcoal/8 bg-white p-7 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
                <Mail className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="font-serif text-lg text-charcoal">Email</p>
              <p className="mt-1 text-sm font-medium text-teal">{site.email}</p>
              <p className="mt-2 text-xs text-graytext">
                For longer questions and documents
              </p>
            </a>
          </div>
        </div>
      </section>

      <AuditForm />
    </main>
  );
}
