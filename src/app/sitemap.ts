import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { SITE } from "@/lib/site";

// Generated at build time so newly added projects in content.ts are indexed
// without touching any other file.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: project.featured ? 0.8 : 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
