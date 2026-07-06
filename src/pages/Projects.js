import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

// import custom components
import Project from '../components/Project';

// project content (edit with `npm run edit:gallery`, Projects tab)
import projectsData from '../data/projects.json';

// Resolve project thumbnails by filename from src/assets/image (non-recursive, so Gigs/ is excluded).
const imgCtx = require.context('../assets/image', false, /\.(png|jpe?g|webp)$/i);
const resolveImage = (name) => { try { return imgCtx('./' + name); } catch (e) { return ''; } };

function Projects() {
  const projects = projectsData.projects.map((p) => ({ ...p, imageSrc: resolveImage(p.image) }));
  const videos = projectsData.videos || [];

  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Some of my Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3">
        <div className="projects-masonry">
          {projects.map((project, i) => (
            <div className="project-cell" key={project.key || i}>
              <Project project={project} />
            </div>
          ))}
        </div>
      </Container>

      <Container className="p-3">
        <Row>
          <div className="video-box">
            {videos.map((v) => (
              <div className="video" key={v.youtubeId}>
                <h4 className="video-head">{v.title}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&autoplay=1&mute=1`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
