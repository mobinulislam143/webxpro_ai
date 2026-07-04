import { NextResponse } from "next/server";
import { auditSchema } from "@/validations/audit";
import { niches } from "@/data/niches";

const FROM_ADDRESS = "Webxpro AI <onboarding@resend.dev>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = auditSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data" },
      { status: 400 },
    );
  }

  const values = parsed.data;

  // Honeypot tripped — report success so bots learn nothing, send nothing
  if (values.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !toEmail) {
    console.error("Audit form: RESEND_API_KEY or LEAD_TO_EMAIL not configured");
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  const industryName =
    niches.find((n) => n.id === values.industry)?.name ?? values.industry;

  const text = [
    `New free audit request from webxpro.ai`,
    ``,
    `Name:            ${values.name}`,
    `Business:        ${values.businessName}`,
    `Email:           ${values.email}`,
    `Industry:        ${industryName}`,
    `Bottleneck:      ${values.bottleneck}`,
    `Lead volume:     ${values.leadVolume || "not provided"}`,
    ``,
    `Reply directly to this email to reach the lead.`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [toEmail],
      reply_to: values.email,
      subject: `🔥 New audit request — ${values.businessName} (${industryName})`,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend API error:", response.status, detail);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try WhatsApp instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
