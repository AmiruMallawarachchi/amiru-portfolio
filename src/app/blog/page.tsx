import type { Metadata } from "next";
import { articles } from "@/lib/content";
import { OG_BASE } from "@/lib/site";
import { breadcrumbSchema, buildGraph, webPageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import BlogPage from "./BlogPage";

const description =
  "Technical writing on transformers, sequence modelling, agentic systems and applied AI engineering.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    ...OG_BASE,
    url: "/blog",
    title: "Writing · Amiru Mallawarachchi",
    description,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildGraph([
          webPageSchema({
            path: "/blog",
            name: "Writing · Amiru Mallawarachchi",
            description,
            type: "CollectionPage",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: articles.length,
              itemListElement: articles.map((article, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: article.title,
                url: article.link,
              })),
            },
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/blog" },
          ]),
        ])}
      />
      <BlogPage posts={articles} />
    </>
  );
}
