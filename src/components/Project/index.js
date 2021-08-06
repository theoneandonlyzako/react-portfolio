import React from 'react';

// import react-bootstrap components
import Card from 'react-bootstrap/Card';

function Project({project}) {
  return (
    <Card className="m-lg-4 m-2 d-flex justify-content-center">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <a href={project.deployed_app} target="_blank" rel="noopener noreferrer">
              <h4>{project.title}</h4>
            </a>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <span><i className="fab fa-github"></i></span>
            </a>
          </Card.Title>
          <Card.Subtitle>
            {project.description}
          </Card.Subtitle>
        <a href={project.deployed_app} target="_blank" rel="noopener noreferrer">
          <Card.Img src={project.imageSrc} className="pt-4"/>
        </a>
        </Card.Body>
    </Card>
  )
}

export default Project;