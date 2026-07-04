export interface Service {
  id: string;
  name: string;
  description: string;
}

// Order is intentional and load-bearing for the Services grid — do not reorder.
export const services: Service[] = [
  {
    id: "ai-receptionist",
    name: "AI Receptionist",
    description:
      "Answers every inbound call 24/7 in a natural voice — no hold music, no voicemail, no missed opportunity.",
  },
  {
    id: "ai-appointment-setter",
    name: "AI Appointment Setter",
    description:
      "Qualifies interest, handles objections, and books meetings straight into your calendar.",
  },
  {
    id: "lead-gen",
    name: "Lead Gen",
    description:
      "Outbound systems that keep your pipeline full while you focus on delivery.",
  },
  {
    id: "customer-service-agent",
    name: "Customer Service Agent",
    description:
      "Resolves FAQs, status checks, and routine requests instantly — around the clock.",
  },
  {
    id: "lead-capture-follow-up",
    name: "Lead Capture + Instant Follow-Up",
    description:
      "Every form fill, DM, and inquiry gets a response in seconds — before your competitor picks up the phone.",
  },
  {
    id: "booking-automation",
    name: "Booking Automation",
    description:
      "Scheduling, reminders, and reschedules on autopilot. Fewer no-shows, fuller calendar.",
  },
  {
    id: "crm-outreach-pipelines",
    name: "CRM + Outreach Pipelines",
    description:
      "Every lead organized, tracked, and followed up with automated sequences that never forget.",
  },
  {
    id: "missed-call-to-text",
    name: "Missed-Call-to-Text",
    description:
      "A call slips through? The caller gets an instant text that starts the conversation anyway.",
  },
];
