import { certifications, education, profile, projects, type Project } from "@/lib/content";
import { SITE, SKILL_KEYWORDS } from "@/lib/site";

// Schema.org graph. One @id per entity so pages can reference the same person
// instead of redefining them, which is what lets Google and AI answer engines
// reconcile this site with GitHub, LinkedIn and Hugging Face.

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export type SchemaNode = Record<string, unknown>;

export function personSchema(): SchemaNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.full_name,
    url: SITE.url,
    image: `${SITE.url}${profile.hero_image}`,
    jobTitle: profile.title,
    description: profile.bio_description,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Moratuwa",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    alumniOf: education
      .filter((item) => !item.degree.startsWith("GCE"))
      .map((item) => ({
        "@type": "EducationalOrganization",
        name: item.institution,
        description: item.degree,
      })),
    hasCredential: certifications.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name,
    })),
    knowsAbout: SKILL_KEYWORDS,
    knowsLanguage: ["English", "Sinhala"],
    sameAs: SITE.sameAs,
  };
}

export function websiteSchema(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.shortDescription,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function webPageSchema(options: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ProfilePage" | "CollectionPage" | "AboutPage";
  mainEntity?: SchemaNode;
}): SchemaNode {
  return {
    "@type": options.type ?? "WebPage",
    "@id": `${SITE.url}${options.path === "/" ? "" : options.path}#webpage`,
    url: `${SITE.url}${options.path === "/" ? "/" : options.path}`,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en",
    ...(options.mainEntity ? { mainEntity: options.mainEntity } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}${items[items.length - 1].path}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function projectSchema(project: Project): SchemaNode {
  const urls = [project.demo_url, project.hf_url].filter((url): url is string => Boolean(url));

  return {
    "@type": "SoftwareSourceCode",
    "@id": `${SITE.url}/projects/${project.slug}#software`,
    name: project.title,
    description: project.description,
    url: `${SITE.url}/projects/${project.slug}`,
    codeRepository: project.github_url,
    programmingLanguage: project.language,
    applicationCategory: "Gen AI and software engineering",
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    dateCreated: project.year,
    keywords: project.technologies.join(", "),
    ...(project.thumbnail ? { image: `${SITE.url}${project.thumbnail}` } : {}),
    ...(urls.length ? { sameAs: urls } : {}),
  };
}

export function projectListSchema(): SchemaNode {
  return {
    "@type": "ItemList",
    name: "Software and Gen AI projects by Amiru Mallawarachchi",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${SITE.url}/projects/${project.slug}`,
    })),
  };
}

export function buildGraph(nodes: SchemaNode[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
