import React from 'react';

// import react-bootstrap components
import Card from 'react-bootstrap/Card';

function Project({project}) {
  const hasLink = Boolean(project.deployed_app);

  return (
    <Card className="d-flex bg-dark justify-content-center">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            {hasLink
              ? <a href={project.deployed_app} target="_blank" rel="noopener noreferrer">
                  <h4 className="text-light">{project.title}</h4>
                </a>
              : <h4 className="text-light">{project.title}</h4>
            }
            {project.repository &&
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                <span><i className="fab fa-github"></i></span>
              </a>
            }
          </Card.Title>
          <Card.Subtitle className="text-light">
            {project.description}
          </Card.Subtitle>
          {hasLink
            ? <a href={project.deployed_app} target="_blank" rel="noopener noreferrer">
                <Card.Img src={project.imageSrc} className="pt-4"/>
              </a>
            : <Card.Img src={project.imageSrc} className="pt-4"/>
          }
        </Card.Body>
    </Card>
  )
}

export default Project;
