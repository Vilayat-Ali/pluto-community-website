import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import SearchBar from "../../component/SearchBar";
import ProjectCard from "../../component/Cards/ProjectCard";

export default function Project() {
  const [projects, setProjects] = useState<string[]>([]);

  const [sortBy, setSortBy] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL!}project/`)
        .then((res: any) => {
          setProjects(res.data.data.reverse());
        })
        .catch((err: any) => alert(err.message));
    };
    fetchProjects();
  }, []);

  return (
    <>
      <SearchBar
        affectSearch={(searchTerm: any) => setSearchTerm(searchTerm)}
        affectSort={(sortBy: any) => setSortBy(sortBy)}
      >
        <option value="Name">Name</option>
        <option value="Tag">Tag</option>
      </SearchBar>

      {projects
        .filter(function (project: any) {
          if (searchTerm === "") {
            return project;
          } else {
            if (
              sortBy === "Name" &&
              project?.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return project;
            } else if (sortBy === "Tag") {
              var isPresent = false;
              project?.tags.map(function (tag: any) {
                if (
                  tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  isPresent = true;
                }
              });
              if (isPresent) return project;
            } else if (sortBy === "") {
              isPresent = false;
              if (
                project?.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                isPresent = true;
              }
              project?.tags.map(function (tag: any) {
                if (
                  tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  isPresent = true;
                }
              });

              if (isPresent) return project;
            }
          }
        })
        .map(function (project: any) {
          return (
            <ProjectCard
              key={project?.title}
              title={project?.title}
              githubLink={project?.githubLink}
              image={project?.image}
              postedAt={project?.postedAt}
              description={project?.description}
              tags={project?.tags}
            />
          );
        })}
    </>
  );
}
