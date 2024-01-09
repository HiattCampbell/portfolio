import React from 'react';
import projects from '../../data/projects.json';
import Project from './Project';

export default function ProjectList({ data }) {
  return (
    <div className="projectListContainer">
      {projects.map((project) => {
        return <Project project={project} key={project.title}></Project>;
      })}
    </div>
  );
}
