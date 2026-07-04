export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Do I need to be technical to use this?",
    answer:
      "No. We handle the entire setup — connecting your phone number, calendar, and CRM, training the AI on your business, and testing it end-to-end. You review the conversations, we handle everything else.",
  },
  {
    question: "Will it work with my existing phone number and CRM?",
    answer:
      "Yes. The system layers on top of your current number — no porting, no new lines. It integrates with the CRMs and calendars local service businesses actually use, and if you don't have a CRM yet, we set one up as part of the build.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most systems go live within 1-2 weeks of kickoff. Simple setups like missed-call-to-text can be running in days; a full receptionist plus booking pipeline takes a little longer because we test it against your real call scenarios first.",
  },
  {
    question: "What happens to my existing staff?",
    answer:
      "They stop losing hours to phone tag and data entry. The AI handles the after-hours calls, the repetitive questions, and the instant follow-up — your team handles the conversations that actually close deals. It's leverage, not replacement.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pricing depends on which systems you need and your call volume, so we scope it in the free audit. Use the ROI calculator above first — the point is that the system should recover several times its cost in captured leads, or we'll tell you it's not a fit.",
  },
  {
    question: "What if the AI can't answer something?",
    answer:
      "It hands off gracefully. Anything outside its scope gets routed to your team with full context — the caller's details, what they asked, and how urgent it is — so nothing lands in a black hole.",
  },
];
