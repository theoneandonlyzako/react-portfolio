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
import mykissImg from '../assets/image/site-kiss.png';
import producerdashImg from '../assets/image/producerdash.png';
import prompterflowImg from '../assets/image/prompterflow.png';
import stageplotImg from '../assets/image/stageplot.jpg';


function Projects() {
  const projects = [
    {
      "title": "ProducerDash",
      "description": "A live production dashboard that follows your service order, syncs with ProPresenter timers and playlists, and shares a live rundown with volunteers and camera operators on any device.",
      "key": "producerdash",
      "imageSrc": producerdashImg,
      "deployed_app": "https://producerdash.com/"
    },
    {
      "title": "Stage Plot",
      "description": "Part of ProducerDash. A visual stage layout builder that maps who stands where, what they play, and which mic channel they use. Build the stage once, set weekly assignments as your team rotates through it, and publish a live portal musicians and crew can open on any phone.",
      "key": "stageplot",
      "imageSrc": stageplotImg,
      "deployed_app": "https://producerdash.com/"
    },
    {
      "title": "PrompterFlow",
      "description": "A MIDI teleprompter for live production, where an operator controls the script and scroll speed while talent reads a clean full screen prompter, synced to the show.",
      "key": "prompterflow",
      "imageSrc": prompterflowImg,
      "deployed_app": "https://producerdash.com/apps/prompterflow"
    },
    {
      "title": "My Kiss Anime",
      "description": "A MERN stack social media application with logins to showcaseyour favorite Animes",
      "key": "kiss",
      "imageSrc": mykissImg,
      "repository": "https://github.com/theoneandonlyzako/kiss-anime",
      "deployed_app": "https://my-kiss-anime.herokuapp.com/"
    },
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

      <Container className="p-3">
        <Row>
          <div class="video-box">
            <div class="video">
              <h4 class="video-head">Theatre</h4>
                <iframe src="https://www.youtube.com/embed/-Db0ye5toZc?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">Producer</h4>
                <iframe src="https://www.youtube.com/embed/5x4wvG-n1Kk?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">Live Mix for NNC</h4>
                <iframe src="https://www.youtube.com/embed/usj7oG3tWSc?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">Live Mix for NGCF</h4>
                <iframe src="https://www.youtube.com/embed/jD9Uk5NgijE?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">Post Mix</h4>
                <iframe src="https://www.youtube.com/embed/rGP7KTZNdzg?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">NNC Elementary</h4>
                <iframe src="https://www.youtube.com/embed/L5UC5BH2fTs?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video">
              <h4 class="video-head">NNC Preschool</h4>
                <iframe src="https://www.youtube.com/embed/sD0-weCDLVY?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </Row>
      </Container>
    </>
  )
}

export default Projects;