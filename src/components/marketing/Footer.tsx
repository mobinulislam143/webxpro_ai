import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import logo from "@/assets/logo/logo.png";

// Installed lucide-react dropped brand icons, so the Instagram glyph is inlined
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const pages = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const homeAnchors = [
  { label: "ROI Calculator", href: "/#roi-calculator" },
  { label: "Live Demo", href: "/#live-demo" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Free Audit", href: "/contact#audit-form" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/8 bg-white">
      <div className="container py-14">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" aria-label="Webxpro AI home">
            <Image
              src={logo}
              alt="Webxpro AI logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-charcoal/8 shadow-sm"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-charcoal"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.handle}
            </a>
            <span className="text-charcoal/20">·</span>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-charcoal"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {site.whatsappNumber}
            </a>
            <span className="text-charcoal/20">·</span>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-teal transition-colors hover:text-charcoal"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer pages">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-charcoal transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer sections">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {homeAnchors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-graytext transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-px w-24 bg-charcoal/10" />

          <div className="text-center">
            <p className="text-xs text-graytext/80">
              © {year} {site.name}. All rights reserved.
            </p>
            <p className="mt-2 font-serif text-xs italic text-charcoal/65">
              {site.handle}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
