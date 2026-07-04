import type { MetadataRoute } from "next";

// TODO: replace with the production domain once it's connected on Vercel
const siteUrl = "https://webxpro-ai.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/login", "/register"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
