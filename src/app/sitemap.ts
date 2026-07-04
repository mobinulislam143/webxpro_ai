import type { MetadataRoute } from "next";

// TODO: replace with the production domain once it's connected on Vercel
const siteUrl = "https://webxpro-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
