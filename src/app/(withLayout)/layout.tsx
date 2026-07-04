import { type ReactNode } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import WhatsAppButton from "@/components/marketing/WhatsAppButton";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
