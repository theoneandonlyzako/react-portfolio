import React from 'react';

// import react-bootstrap components
import Card from 'react-bootstrap/Card';

function Gallery({gallery}) {
  return (
    <Card className="m-lg-4 m-2 d-flex bg-dark justify-content-center">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <a href={gallery.deployed_app} target="_blank" rel="noopener noreferrer">
              <h4 className="text-light">{gallery.title}</h4>
            </a>
            <a href={gallery.repository} target="_blank" rel="noopener noreferrer">
            </a>
          </Card.Title>
          <Card.Subtitle className="text-light">
            {gallery.description}
          </Card.Subtitle>
        <a href={gallery.deployed_app} target="_blank" rel="noopener noreferrer">
          <Card.Img src={gallery.imageSrc} className="pt-4 gallery-img"/>
        </a>
        </Card.Body>
    </Card>
  )
}

export default Gallery;