import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Project from '../components/Project';

// import images for apps
import hoppinessImg from '../assets/image/pursuit.png';
import passgenImg from '../assets/image/generator.png';
import noteKeeperImg from '../assets/image/notes.png';
import budgetTrackerImage from '../assets/image/budget_tracker.png';
import weatherDashboardImage from '../assets/image/weather_dashboard.png';
import deepThoughtsImg from '../assets/image/blog.png';

function Projects() {
  const projects = [
    {
      "title": "The Pursuit of Hoppiness",
      "description": "An app for discovering local breweries in your area",
      "key": "hoppiness",
      "imageSrc": hoppinessImg,
      "repository": "https://github.com/theoneandonlyzako/the-pursuit-of-hoppiness",
      "deployed_app": "https://theoneandonlyzako.github.io/the-pursuit-of-hoppiness/"
    },
    {
      "title": "Password Generator",
      "description": "A simple app for generating passwords",
      "key": "generate",
      "imageSrc": passgenImg,
      "repository": "https://github.com/theoneandonlyzako/passwordGenerator",
      "deployed_app": "https://theoneandonlyzako.github.io/passwordGenerator/"
    },
    {
      "title": "Note Keeper",
      "description": "A JS app for creating and keeping notes",
      "key": "note",
      "imageSrc": noteKeeperImg,
      "repository": "https://github.com/theoneandonlyzako/keeper-of-notes",
      "deployed_app": "https://keeper-of-notes.herokuapp.com/"
    },
    {
      "title": "Budget Tracker",
      "description": "A basic PWA for tracking a budget",
      "key": "budget-tracker",
      "imageSrc": budgetTrackerImage,
      "repository": "https://github.com/theoneandonlyzako/budget-tracker",
      "deployed_app": "https://zaks-budget-tracker.herokuapp.com/"
    },
    {
      "title": "Weather App",
      "description": "A frontend vanilla JS app for checking the weather",
      "key": "weather-dashboard",
      "imageSrc": weatherDashboardImage,
      "repository": "https://github.com/theoneandonlyzako/Weather-app",
      "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Deep Thoughts",
      "description": "A MERN stack social media application with logins",
      "key": "thoughts",
      "imageSrc": deepThoughtsImg,
      "repository": "https://github.com/theoneandonlyzako/deep-thoughts",
      "deployed_app": "https://zaks-deep-houghts.herokuapp.com/"
    }
  ]
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Some of my Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3 ">
        <Row>
          {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Projects;