

export type Page = "Home" | "About" | "Repos" | "Projects"
export type SourceProps = {src: string; doodle?: string; doodleColor?: `text-${string}`}

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
  url: string;
};
