import { MetadataRoute } from "next";
import { CITIES_DATA } from "@/data/cities";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.kshitiz.store";

  // Static Core Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estimate`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-meeting`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // City Pages for Hyper-Local SEO
  const cityRoutes: MetadataRoute.Sitemap = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Industry Pages for Niche SEO
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((ind) => ({
    url: `${baseUrl}/industry/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes, ...industryRoutes];
}
