export const site = {
  name: "Webxpro AI",
  handle: "@webxpro_ai",
  instagramUrl: "https://instagram.com/webxpro_ai",
  email: "mobinulislammahi@gmail.com",
  whatsappNumber: "+880 1647-135496",
  whatsappUrl: "https://wa.me/8801647135496",
  founder: {
    name: "Mobinul Islam Mahi",
    role: "Founder & Systems Architect",
    email: "mobinulislammahi@gmail.com",
    // Kept deliberately short — a marketing site needs proof, not a résumé
    devSkills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
} as const;

export interface Tool {
  name: string;
  purpose: string;
}

// Specialist automation stack only — no generic web tech here on purpose
export const tools: Tool[] = [
  { name: "Vapi", purpose: "Voice AI agents that sound human on the phone" },
  { name: "Retell AI", purpose: "Real-time conversational voice infrastructure" },
  { name: "n8n", purpose: "The automation engine behind every workflow we ship" },
  { name: "Make", purpose: "Rapid integrations between your existing tools" },
  { name: "Twilio", purpose: "Calls, SMS, and missed-call-to-text delivery" },
  { name: "GoHighLevel", purpose: "CRM + pipelines built for local service businesses" },
  { name: "Claude & GPT", purpose: "The brains — tuned to your business, not generic" },
];
