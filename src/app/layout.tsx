import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider/ReduxProvider";
import { MSWProvider } from "@/components/common/MSWProvider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// TODO: replace with the production domain once it's connected on Vercel
const siteUrl = "https://webxpro-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Webxpro AI — AI Automation for Local Service Businesses",
  description:
    "Missed-call recovery, instant lead follow-up, and 24/7 AI booking systems for property management, insurance agencies, auto dealerships, home services, med spas, construction, and roofing businesses.",
  openGraph: {
    title: "Webxpro AI — AI Automation for Local Service Businesses",
    description:
      "Every missed lead, captured and followed up in seconds — no staff required. AI receptionists, appointment setters, and lead capture systems for local service businesses.",
    url: siteUrl,
    siteName: "Webxpro AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webxpro AI — AI Automation for Local Service Businesses",
    description:
      "Every missed lead, captured and followed up in seconds — no staff required.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>
          <MSWProvider>{children}</MSWProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
