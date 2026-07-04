import type { MetadataRoute } from "next";
import { niches } from "@/data/niches";

// TODO: replace with the production domain once it's connected on Vercel
const siteUrl = "https://webxpro-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/industries`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const industryPages: MetadataRoute.Sitemap = niches.map((niche) => ({
    url: `${siteUrl}/industries/${niche.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...industryPages];
}
