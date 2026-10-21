import {useEffect, useState} from "react";
import type {Repo} from "@/types.ts";

type ApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
  fork: boolean;
  archived: boolean;
};

const useGithubRepos = (api_url: string) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${api_url}/repos?sort=pushed&per_page=100`, {signal: controller.signal})
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        return res.json() as Promise<ApiRepo[]>;
      })
      .then((data) => {
        setRepos(
          data
            .filter((r) => !r.fork && !r.archived)
            .map((r) => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stars: r.stargazers_count,
              pushedAt: r.pushed_at,
              url: r.html_url,
            })),
        );
        setLoading(false);
      })
      .catch((e: Error) => {
        if (e.name === "AbortError") return;
        setError(e.message);
        setLoading(false);
      });


    return () => controller.abort();
  }, [api_url]);

  return {repos, loading, error};
};

export default useGithubRepos;