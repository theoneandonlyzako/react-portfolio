import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/profilepic.png")}
                roundedCircle
                width="300vw"
                height="300vw" />
            </Col>
            <Col className="pl-md-5">
              <h1 className="display-4 text-center text-lg-left text-dark p-0-lg pt-4">
                hello, world!</h1>
              <p className="text-dark text-center text-md-left h3">
                I'm Zak Stamps, a full-stack developer based in the San Francisco Bay Area.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 text-light bg-dark about-container">
        <Container className="p-5 text-light bg-dark">
          <h3>About Me</h3>
          <p>
            I have been immersed in the wide world of audio production for the
            last 30 years spanning the worlds of live sound, broadcast audio,
            audio post-production, and music production. However,
            I am currently focusing primarily on Full Stack Web Development
            and programming and absolutely Love what I do.
          </p>
          <p>
            I started programming once I learned that I could <a href="https://automatetheboringstuff.com/" rel="noopener noreferrer" target="_blank">
            automate the boring stuff</a>. As soon as I learned Python, there was no turning back. 
            A new job, some CS classes, and a full-stack bootcamp later,
            I'm looking to transition into a full-time engineering role.
          </p>
          <p>
            When I'm not in front of a screen, you might find me cooking, making pottery, 
            or spending time with friends and family.
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;