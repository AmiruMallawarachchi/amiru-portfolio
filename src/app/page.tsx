import type { Metadata } from "next";
import { profile, skills, experience, education, interests, featuredProjects, articles } from "@/lib/content";
import { SITE, OG_BASE } from "@/lib/site";
import { PERSON_ID, buildGraph, personSchema, webPageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    url: "/",
    title: SITE.title,
    description: SITE.shortDescription,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildGraph([
          personSchema(),
          webPageSchema({
            path: "/",
            name: SITE.title,
            description: SITE.description,
            type: "ProfilePage",
            mainEntity: { "@id": PERSON_ID },
          }),
        ])}
      />
      <HomeClient
        profile={profile}
        skills={skills}
        experience={experience}
        education={education}
        interests={interests}
        projects={featuredProjects}
        articles={articles}
      />
    </>
  );
}
