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

const anchors = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "ROI Calculator", href: "#roi-calculator" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Free Audit", href: "#audit-form" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/8 bg-white">
      <div className="container py-14">
        <div className="flex flex-col items-center gap-8">
          <a
            href="https://instagram.com/webxpro_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-charcoal"
          >
            <InstagramIcon className="h-4 w-4" />
            @webxpro_ai
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {anchors.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-graytext transition-colors hover:text-teal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-px w-24 bg-charcoal/10" />

          <div className="text-center">
            <p className="text-xs text-graytext/80">
              © {year} Webxpro AI. All rights reserved.
            </p>
            <p className="mt-2 font-serif text-xs italic text-charcoal/65">
              @webxpro_ai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
