import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  video_url?: string;
  demo_url?: string;
  github_url?: string;
  hf_url?: string;
  wiki_url?: string;
  architecture_image?: string;
  technologies: string[];
  content: string;
  created_at: string;
};
