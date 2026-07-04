import { z } from "zod";

// Shared by AuditForm (client validation) and /api/audit (server validation)
export const auditSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your business name")
    .max(150, "Business name is too long"),
  email: z.string().trim().email("Please enter a valid email"),
  industry: z.string().min(1, "Please select your industry").max(50),
  bottleneck: z.string().min(1, "Please select your biggest bottleneck").max(50),
  leadVolume: z.string().max(50).optional(),
  // Honeypot — humans never see or fill this field
  website: z.string().max(200).optional(),
});

export type AuditFormValues = z.infer<typeof auditSchema>;
