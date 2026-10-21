import {
  type RemixiconComponentType,
  RiExternalLinkLine,
  RiFlagLine,
  RiFootprintLine,
  RiGithubLine,
  RiMap2Line
} from "@remixicon/react";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {projects, type ProjectStatus} from "@/data/projects";

const statuses: Record<ProjectStatus, {label: string; Icon: RemixiconComponentType}> = {
  "summited": {label: "Summited", Icon: RiFlagLine},
  "gone-fishing": {label: "On the trail", Icon: RiFootprintLine},
  "planning": {label: "Planning the route", Icon: RiMap2Line},
};

const Projects = () => {
  return (
    <section className="w-[90%] xl:w-full max-w-6xl mx-auto py-6 flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-2 text-surface">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-sm">Things I've built, things I'm building, and a few still on the map.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
          const {label, Icon} = statuses[project.status];
          return (
            <Card key={project.title}>
              {project.image && <img src={project.image} alt="" className="aspect-video w-full object-cover"/>}
              <CardHeader>
                <CardTitle className="text-accent font-bold">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Icon size={14}/>
                  {label}
                </CardDescription>
                {project.liveUrl && (
                  <CardAction>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-accent hover:text-foreground">
                      <RiExternalLinkLine size={16}/>
                    </a>
                  </CardAction>
                )}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <p>{project.summary}</p>
                <ul className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="border border-accent px-2 text-accent">{tag}</li>
                  ))}
                </ul>
              </CardContent>
              {project.sourceUrl && (
                <CardFooter>
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-accent hover:underline">
                    <RiGithubLine size={14}/>
                    Source
                  </a>
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;