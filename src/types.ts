import type {ComponentType, SVGProps} from "react";


export type DoodleSvg = ComponentType<SVGProps<SVGSVGElement>>
export type Page = "Home" | "About" | "Repos" | "Projects"
export type SourceProps = {src: string; doodle?: DoodleSvg; doodleColor?: `text-${string}`}

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
  url: string;
};
