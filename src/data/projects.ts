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
    title: "Processr",
    summary: "A graphical, flowchart based factory planner.",
    status: "summited",
    tags: ["TypeScript", "React"],
    liveUrl: "https://example.com/",
    sourceUrl: "https://github.com/KesslerMentele/processr",
    featured: true,
  },
  {
    title: "Lattice",
    summary: "An open-source framework to make it easy to set up CDC pipelines with Kafka",
    status: "summited",
    tags: ["TypeScript", "Kafka"],
    liveUrl: "https://latticeplatform.io/",
    sourceUrl: "https://github.com/latticeplatform/lattice-local",
    featured: true,
  },
  {
    title: "QR Code Generator",
    summary: "A QR code generator",
    status: "gone-fishing",
    tags: ["TypeScript", "Datastar"],
    sourceUrl: "https://github.com/KesslerMentele/DrawACode",
    featured: true,
  },
  {
    title: "Crypt",
    summary: "A game engine written in C++",
    status: "gone-fishing",
    tags: ["C++"],
    sourceUrl: "https://github.com/KesslerMentele/Crypt"
  },
];