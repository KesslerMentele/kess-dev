export type ProjectStatus = "summited" |"planning" | "gone-fishing";

export type Project = {
  title: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project one",
    summary: "Example Project One",
    status: "summited",
    tags: ["React", "TypeScript"],
    liveUrl: "https://example.com/",
    sourceUrl: "https://github.com/",
    featured: true,
  },
  {
    title: "Project two",
    summary: "Example Project Two",
    status: "gone-fishing",
    tags: ["Python", "CLI"],
    sourceUrl: "https://github.com/",
    featured: true,
  },
  {
    title: "Project three",
    summary: "Example Project Three",
    status: "summited",
    tags: ["Rust", "API"],
    liveUrl: "https://example.com/",
    featured: true,
  },
  {
    title: "Project four",
    summary: "Example Project Four",
    status: "planning",
    tags: ["Idea"],
  },
];