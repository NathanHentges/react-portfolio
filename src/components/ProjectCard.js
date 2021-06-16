import React from 'react';

function ProjectCard(props) {
  return (
    <div className='row'>
      {props.projects.map((project) => (
        <div className='col-6'>
          <div className='card mb-3'>
            <h3 className='card-header'>{project.title}</h3>
            <div className='card-body'>
              <p className='card-text'>{project.description}</p>
            </div>
            {project.image && (
              <img className='img' src={project.image} alt='Project preview' />
            )}
            <div className='card-body'>
              <a className='card-link' href={project.github}>Github</a>
              {project.deploy && (
                <a className='card-link' href={project.deploy}>Deployed</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
