export interface Niche {
  id: string;
  name: string;
  problem: string;
  solution: string;
  roiNote: string;
}

// roiNote must stay benchmark-style industry language — never client case-study claims.
export const niches: Niche[] = [
  {
    id: "property-management",
    name: "Property Management",
    problem:
      "Leasing inquiries and maintenance calls land after hours, hit voicemail, and prospective tenants move on to the next listing.",
    solution:
      "An AI receptionist answers 24/7, triages maintenance from leasing, books showings, and pushes urgent issues to the right person instantly.",
    roiNote:
      "Property managers who respond to leasing inquiries within minutes typically convert 2-3× more of them than those who call back the next day.",
  },
  {
    id: "insurance-agencies",
    name: "Insurance Agencies",
    problem:
      "Quote requests go cold within hours — slow follow-up hands policies to whichever agent answers first.",
    solution:
      "Instant follow-up on every quote request, automated qualification, and a booked call on your producer's calendar before the lead shops elsewhere.",
    roiNote:
      "Industry studies consistently show contacting a lead within 5 minutes lifts conversion many times over versus waiting a day.",
  },
  {
    id: "auto-dealerships",
    name: "Auto Dealerships",
    problem:
      "Internet leads and missed sales calls pile up while buyers cross-shop three other dealerships the same afternoon.",
    solution:
      "Every lead gets an instant, personalized response and a test-drive appointment set — nights and weekends included.",
    roiNote:
      "Speed-to-lead is the deciding factor for cross-shopping buyers — dealers that respond first win a disproportionate share of deals.",
  },
  {
    id: "home-services",
    name: "Home Services",
    problem:
      "You're on the tools all day — every call that rings out is a job booked with a competitor.",
    solution:
      "Missed-call-to-text plus an AI agent that quotes availability, books the job, and confirms it while you keep working.",
    roiNote:
      "Businesses recovering missed calls typically see 20-45% more captured leads without adding staff.",
  },
  {
    id: "med-spas",
    name: "Med Spas",
    problem:
      "Your front desk is with clients, and the booking inquiries that arrive evenings and weekends never get an answer.",
    solution:
      "A 24/7 booking agent that answers treatment questions, checks availability, and fills your calendar while you sleep.",
    roiNote:
      "Clinics with round-the-clock booking typically capture the 30-40% of appointment requests that arrive outside business hours.",
  },
  {
    id: "construction",
    name: "Construction",
    problem:
      "Bid requests and project inquiries slip through while your team is in the field — and slow estimates read as disinterest.",
    solution:
      "Every inquiry captured and qualified on the spot, with estimate walkthroughs scheduled automatically for your estimator.",
    roiNote:
      "Contractors who respond same-hour are consistently shortlisted more often — response speed directly drives bid invitations.",
  },
  {
    id: "roofing",
    name: "Roofing",
    problem:
      "Storm season floods your phones for two weeks — and every unanswered call is an inspection your competitor runs instead.",
    solution:
      "AI absorbs the surge, qualifies storm damage leads, and books inspections back-to-back without a single busy signal.",
    roiNote:
      "Roofers handling storm-surge volume with automation typically book 25-50% more inspections during peak weeks.",
  },
];
