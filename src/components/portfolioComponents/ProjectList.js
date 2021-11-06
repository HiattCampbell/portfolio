import React from "react";
import Project from "./Project";
import projects from "../../data/projects.json";

export default function ProjectList({ data }) {
  return (
    <div className="projectListContainer">
      {projects.map((project) => {
        return <Project project={project} key={project.title}></Project>;
      })}
    </div>
  );
}
