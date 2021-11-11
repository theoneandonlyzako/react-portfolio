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

      <Container className="py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Button
          className="shadow"
          href="https://drive.google.com/file/d/1BqT3PpxBDiKmnjqyTJ7kHyMfWqY9kIGR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            View My Resume
        </Button>
      </Container>

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
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="p-2 text-light bg-dark">
            <Card.Body>
              <h3>Backend Tech</h3>
              <ul>
                <li>APIs</li>
                <li>REST</li>
                <li>MongoDB, Mongoose</li>
                <li>MySQL, Sequelize</li>
                <li>Express</li>
                <li>Node</li>
                <li>GraphQL</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  )
}

export default Resume;