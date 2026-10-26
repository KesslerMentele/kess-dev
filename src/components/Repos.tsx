import {RiExternalLinkLine, RiStarLine} from "@remixicon/react";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import useGithubRepos from "@/hooks/useGithubRepos.ts";
import type {Repo} from "@/types.ts";

const GITHUB_USER_URL = "https://api.github.com/users/KesslerMentele";
const GITHUB_ORG_URL = "https://api.github.com/orgs/latticeplatform";

const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", {month: "short", year: "numeric"});

const Repos = () => {
  const user_repos = useGithubRepos(GITHUB_USER_URL);
  const org_repos = useGithubRepos(GITHUB_ORG_URL);
  const repos:Repo[] = [...user_repos.repos, ...org_repos.repos]

  return (
    <section className="w-[90%] xl:w-full max-w-6xl mx-auto py-6 text-left">
      {(user_repos.loading || org_repos.loading) && <p className="text-muted-foreground">Loading repos…</p>}
      {(user_repos.error || org_repos.error) && (
        <p className="text-muted-foreground">
          Couldn't load repos. See them on{" "}
          <a href={`https://github.com/${GITHUB_USER_URL}`} target="_blank" rel="noreferrer" className="text-accent underline">GitHub</a>.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.filter((repo) => repo.name !== ".github").map((repo) => (
          <Card key={repo.name}>
            <CardHeader>
              <CardTitle className="text-accent font-bold">{repo.name}</CardTitle>
              {repo.language && <CardDescription>{repo.language}</CardDescription>}
              <CardAction>
                <a href={repo.url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`} className="text-accent hover:text-foreground">
                  <RiExternalLinkLine size={16}/>
                </a>
              </CardAction>
            </CardHeader>
            <CardContent className="flex-1">
              {repo.description}
            </CardContent>
            <CardFooter className="justify-between text-muted-foreground">
              <span className="flex items-center gap-1">
                <RiStarLine size={14} className="text-accent"/>
                {repo.stars}
              </span>
              <span>Updated {formatDate(repo.pushedAt)}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Repos;