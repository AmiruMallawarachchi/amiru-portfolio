import { profile, skills, experience, education, interests, featuredProjects, articles } from "@/lib/content";
import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <HomeClient
      profile={profile}
      skills={skills}
      experience={experience}
      education={education}
      interests={interests}
      projects={featuredProjects}
      articles={articles}
    />
  );
}
