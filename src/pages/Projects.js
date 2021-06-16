import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects(props) {
  return (
    <div className="container mb-5">
      <div className="row mb-3">
        <div className="col-3">
          <h1>About Me</h1>
          <img src="https://via.placeholder.com/150" alt="Nathan Hentges" />
        </div>
        <div className="col-9">
          <p>I'm Nathan Hentges, and I am learning to be a full stack developer.</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <h1>Projects</h1>
        </div>
        <div className="col-9">
          <ProjectCard projects={props.projects} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-3">
          <h1>Contact</h1>
        </div>
        <div className="col-9">
          <p>I'm Nathan Hentges, and I am learning to be a full stack developer.</p>
        </div>
      </div>
      <div style={{ height: '150px' }}></div>
    </div>
  );
}

export default Projects;
