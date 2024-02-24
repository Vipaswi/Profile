"use client";
import { useEffect, useState } from "react";
import { Project } from "./sub_components/Project";
import { fetchProjects } from "@/app/api/git/git";

export const Projects = () => {
    const [datas, setDatas] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const projects = await fetchProjects();
            setDatas(projects);
        };
        fetchData();
    }, []);

    return (
      <div className="min-h-screen flex justify-center item-center border-b-2 border-black" id="Projects">
        <div className="m-10">
          <h1 className="text-xl md:text-3xl xl:text-5xl mb-10 underline ">Projects</h1>
              {datas.map((element: any) => {
                
                return (
                  <div className="m-3 ml-10 z-1 mb-5" key={element["id"]}>
                      <Project
                          title={element["name"]}
                          description={element["description"]}
                          tags={element["topics"]}
                          link={element["html_url"]}
                          key={element["id"]}
                          dates={element["created_at"].split("T")[0] + " - " + element["pushed_at"].split("T")[0]}
                          type={"Personal Project"}
                          />
                      </div>
                  );
              })}
          </div>
      </div>
    );
};