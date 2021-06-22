import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects(props) {
  return (
    <div className="container mb-5">
      <div className="row mb-4">
        <div className="col-3">
          <h1>About Me</h1>
          <img src="https://via.placeholder.com/150" alt="Nathan Hentges" />
        </div>
        <div className="col-9 align-self-center">
          <p>Full Stack Web Developer. Skilled at building applications from scratch. Very quick to learn new technologies and languages. Hardworking and committed to my work. Earned a certificate in Full Stack Web Development from the University of Minnesota Coding Boot Camp. Years of experience with programming as a hobby.</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-3">
          <h1>Projects</h1>
        </div>
        <div className="col-9">
          <ProjectCard projects={props.projects} />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-3">
          <h1>Contact</h1>
        </div>
        <div className="col-9">
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link h4" href="mailto:nathanjhentges@gmail.com">Email</a></li>
            <li className="nav-item"><a className="nav-link h4" href="https://github.com/NathanHentges/">GitHub</a></li>
            <li className="nav-item"><a className="nav-link h4" href="https://www.linkedin.com/in/nathan-hentges/">LinkedIn</a></li>
            <li className="nav-item"><a className="nav-link h4" href="/assets/resume.pdff">Resume</a></li>
          </ul>
        </div>
      </div>
      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default Projects;
