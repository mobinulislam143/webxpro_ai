"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-ivory/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Webxpro AI logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-charcoal/8 shadow-sm"
            priority
          />
          <span className="font-serif text-lg text-charcoal">
            Webxpro <span className="text-teal">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-teal" : "text-graytext hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact#audit-form"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white shadow-md shadow-teal/20 transition-transform hover:-translate-y-0.5"
          >
            Free Audit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-5 w-5 text-charcoal" />
          ) : (
            <Menu className="h-5 w-5 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-charcoal/8 bg-ivory md:hidden"
            aria-label="Mobile"
          >
            <div className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-teal/5 hover:text-teal"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#audit-form"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Free Audit
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
