import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Whole years elapsed since a start month/year, recomputed on every page view.
function yearsSince(startYear, startMonth) {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  if (now.getMonth() < startMonth) years -= 1;
  return years;
}

function About() {
  const yearsImmersed = yearsSince(1996, 0); // audio, since January 1996
  const yearsWorship = yearsSince(2008, 0);  // houses of worship, since January 2008

  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Image
                src={require("../assets/image/profilepic.png")}
                roundedCircle
                width="300"
                height="300" />
            </Col>
            <Col className="pl-md-5">
              <h1 className="display-4 text-center text-lg-left text-dark p-0-lg pt-4">
                hello, world!</h1>
              <p className="text-dark text-center text-md-left h4">
                I'm Zak Stamps, an Audio Engineer, Technical Production Director and Full Stack Web Developer based in the San Francisco bay area.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-dark about-container">
        <Container className="p-5 bg-dark">
          <h3 class="p-text-color">About Me</h3>
          <p className="p-text p-text-color">
            I have been immersed in the wide world of audio production for the
            past {yearsImmersed} years spanning the worlds of live sound, broadcast audio,
            post production audio, and music production.</p>

          <p class="p-text p-text-color">
            I’ve mixed and worked with a diverse group of artists over the course 
            of my career including Praise One, Valley Worship, Country music artist Brandon Hamilton, 
            Filipino sensations IntroVoys, Christian artists MercyMe, for KING & COUNTRY, Tauren Wells, 
            Rend Collective, Phil Wickham, Josiah James and Arron Hines. I’ve also worked on and managed projects for corporate 
            and broadcast clients including ESPN, and Stanford University.
          </p>

          <p className="p-text p-text-color">
            I spent {yearsWorship} years focused on audio in Houses of Worship and served as the Technical
            Director for a large church in the San Francisco bay area, <u><a href="https://www.newnorth.church/" target="_blank" rel="noopener noreferrer">New North Church</a></u> located in San Bruno, CA 
            for 5 of those years. At New North, I oversaw all technical production related needs for the Sunday
            morning experience including mixing, managing and training volunteers and staff. Over the course of 
            my time on staff, I supervised two major system upgrades/installations, upgraded FOH and monitor 
            consoles, redesigned the entire audio and video infrastructure, and optimized the production systems 
            religiously.
          </p>

          <p class="p-text p-text-color">
            In addition, I was featured in a <u><a href="https://www.churchproduction.com/daily411/clear-com%E2%80%99s-freespeak-ii-intercom-brings-new-north-church-to/" target="_blank" rel="noopener noreferrer">Church Production Magazine article</a></u>, covering our purchase and install 
            of the (at the time) freshly released <u><a href="https://www.broadcastbeat.com/clear-coms-freespeak-ii-intercom-brings-new-north-church-together-volunteer-involvement-grows-with-clearer-communications/" target="_blank" rel="noopener noreferrer">ClearCom Freespeak ii system</a></u>. 
            I also produced and maintained the New North Weekly podcasts and New North Kids weekly YouTube channels. 
          </p>

          <p className="p-text p-text-color">
            My audio work has also taken me through high end festivals and concerts and into high
            production theatre, which I fell in love with. I've had the pleasure of working on major
            productions, including: Annie, Godspell, How to Succeed in Business Without Really Trying,
            Footloose, The Lion King, Peter Pan, The Nutcracker, <u><a href="https://www.mercurynews.com/2017/01/25/powerful-cabaret-opens-hillbarn-theatre-season/" target="_blank" rel="noopener noreferrer">Cabaret</a></u>, <u><a href="https://www.mercurynews.com/2017/03/15/have-you-heard-the-latest-about-rumors-at-hillbarn/" target="_blank" rel="noopener noreferrer">Rumors</a></u>,
            Mary Poppins, The Producers, Music Man, Singing in the Rain, Million Dollar Quartet, Aida, <u><a href="http://www.aislesaysanfrancisco.com/2019/03/joseph-and-amazing-technicolor.html" target="_blank" rel="noopener noreferrer">Joseph and the Amazing Technicolor Dreamcoat</a></u>, <u><a href="https://morganhilllife.com/2018/08/22/curtain-up-theater-review-by-camille-bound-saturday-night-fever/" target="_blank" rel="noopener noreferrer">Saturday Night Fever</a></u>,
            Smokey Joe's Cafe, and Next to Normal.
          </p>

          <p className="p-text p-text-color">
            I learned to program on DOS in the 1990s, wrote my first HTML around the time Myspace
            launched in 2003, and moved into Python microcontroller programming in 2012. Picking up
            JavaScript in 2021 was the turning point that pulled me into web development and a Berkeley
            bootcamp, where I earned my Full Stack Web Development certificate. It's a field I love, and
            I plan to keep growing in computer science and software development.
          </p>
          <p className="p-text p-text-color">
            When I'm not in front of a screen, you'll find me cooking, gardening far too much, or
            spending time with family. Thanks for stopping by!
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;