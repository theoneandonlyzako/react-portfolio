import React from 'react';

// import react-bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Resume() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Skills <span>&amp;</span> Experience</h1>
          </div>
        </Container>
      </Jumbotron>

      {/* Resume PDF button hidden for now — uncomment to bring it back.
      <Container className="py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Button
          className="shadow"
          href="https://drive.google.com/file/d/1BqT3PpxBDiKmnjqyTJ7kHyMfWqY9kIGR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            View My Resume
        </Button>
      </Container>
      */}

      <Container>
        <CardDeck>
          <Card className="p-2 text-light bg-dark">
            <Card.Body>
              <h3>Education</h3>
              <ul>
                <li>Berkeley Extension Coding Bootcamp</li>
                <li>SAE Institute Hollywood</li>
                <li>Citrus College</li>
                <li>Mt. Sierra College</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="p-2 text-light bg-dark">
            <Card.Body>
              <h3>Skills</h3>
              <ul>
                <li>AI Integration</li>
                <li>AI Agent Development</li>
                <li>LLM Integration</li>
                <li>Mac / Windows / Linux</li>
                <li>IOT Stack</li>
                <li>Micro Controllers</li>
                <li>AVL DSP</li>
                <li>Theatre Sound Design</li>
                <li>Post / Live Sound</li>
                <li>Live Production</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="p-2 text-light bg-dark">
            <Card.Body>
              <h3>Frontend Tech</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Electron</li>
                <li>React Router</li>
                <li>Vite</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="p-2 text-light bg-dark">
            <Card.Body>
              <h3>Backend Tech</h3>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Node</li>
                <li>Express</li>
                <li>APIs</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>Supabase</li>
                <li>PostgreSQL</li>
                <li>MongoDB, Mongoose</li>
                <li>MySQL, Sequelize</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>

      <Container className="mt-4 pb-5">
        <CardDeck>
          <Card className="p-2 text-light bg-dark experience-card">
            <Card.Body>
              <h3>Experience</h3>
              <p className="p-text p-text-color">
                I'm a technical production director and audio engineer with about 30 years in
                professional production, and a full stack software developer. My production career spans
                live sound, broadcast, post production, theatre, and houses of worship, mixing for
                artists like IntroVoys and Arron Hines, along with corporate and broadcast work for
                clients like ESPN and Stanford University. I've led technical production as Director of
                Technology at New North Church, Technical Coordinator at Central Peninsula Church, and
                Sound Designer and Mixer for Broadway By The Bay at The Fox Theatre, where I designed,
                installed, and mixed full theatrical seasons, working across AVL systems and DSP, live
                and post production sound, microcontrollers and IOT, and Mac, Windows, and Linux.
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  )
}

export default Resume;