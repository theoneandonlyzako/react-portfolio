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
                I'm Zak Stamps, a full-stack web developer based in the San Francisco Bay Area.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 text-light bg-dark about-container">
        <Container className="p-5 text-light bg-dark">
          <h3>About Me</h3>
          <p>
            AAAAAAA I have been immersed in the wide world of audio production for the
            past 30 years spanning the worlds of live sound, broadcast audio,
            audio post-production, and music production.
          </p>
          <p>
            I started programming once around the release of Myspace in 2002 with basic HTML hacks.
            As soon as I learned Javascript in 2021, there was no turning back.
            As life evolved and technologies become more and more the norm,
            I decided to get my feet wet in the world of webdevelopment and attended
            Berkeley bootcamp for coding.
            After recieving my certificate in Full Stack Web Development,
            I plan to move forward with continued education in computer science and
            software development as time progresses. So far, I'm absolutely Loving this industry
            and looking for every way possible to learn more of the skill. In the mean time,
            I'm looking to transition into a full-time engineering role so that I can be emmersed
            in the life and do good in this world.
          </p>
          <p>
            When I'm not in front of a screen, you might find me cooking, spending too much time gardening,
            or spending precious time with the family. Thanks for stoping by!
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;