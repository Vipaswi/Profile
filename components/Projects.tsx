"use client";
import { useEffect, useState } from "react";
import { Project } from "./sub_components/Project";
import { Octokit } from "octokit";

export const Projects = () => {
    const [data, setData] = useState<any>([]);
    const octokit = new Octokit({
        auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    });
  
    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await octokit.request("GET /user/repos", {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                visibility: 'public'
            });
            setData(projects.data);
        };
        fetchProjects();
    }, []);

    return (
      <div className="max-h-min" id="Projects">
        <div className="grid grid-flow-row-dense m-10">
          <h1 className="text-xl md:text-3xl xl:text-5xl mb-5 underline">Projects</h1>
              {data.map((element: any) => {
                return (
                  <div className="m-3" key={element["id"]}>
                      <Project
                          title={element["name"]}
                          description={element["description"]}
                          tags={element["topics"]}
                          key={element["id"]}
                          />
                      </div>
                  );
              })}
          </div>
      </div>
    );
};