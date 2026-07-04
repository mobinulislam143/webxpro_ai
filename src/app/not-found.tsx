import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="font-serif text-8xl text-teal sm:text-9xl">404</p>
          <h1 className="mt-6 font-serif text-3xl text-charcoal sm:text-4xl">
            This page ghosted you.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-graytext">
            Unlike your leads with our system, this page never got followed up
            on. Let&apos;s get you back somewhere useful.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link
              href="/contact#audit-form"
              className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-8 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-teal hover:text-teal"
            >
              Get a Free Audit Instead
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
