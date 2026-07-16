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
            I've spent the last {yearsImmersed} years working in audio, across live sound, broadcast,
            post production, and music. It's the thing I keep coming back to.
          </p>

          <p className="p-text p-text-color">
            Along the way I've gotten to mix for a lot of different artists: Praise One, Valley Worship,
            country music artist Brandon Hamilton, the Filipino band IntroVoys, and a handful of Christian
            artists like MercyMe, for KING & COUNTRY, Tauren Wells, Rend Collective, Phil Wickham,
            Josiah James, and Arron Hines. I've also worked on projects for corporate and broadcast
            clients, including ESPN and Stanford University.
          </p>

          <p className="p-text p-text-color">
            For about {yearsWorship} years my focus was audio in Houses of Worship, and for five of those
            years I was the Technical Director at <u><a href="https://www.newnorth.church/" target="_blank" rel="noopener noreferrer">New North Church</a></u>, a large church in San Bruno, CA.
            The role was really the technical side of the Sunday morning experience: mixing, and helping
            train the volunteers and staff who made it happen. During my time there we took on two system
            installs, replaced the front of house and monitor consoles, and rebuilt the audio and video
            infrastructure, and I spent a lot of hours tuning the production systems.
          </p>

          <p className="p-text p-text-color">
            Somewhere in there we ended up in a <u><a href="https://www.churchproduction.com/daily411/clear-com%E2%80%99s-freespeak-ii-intercom-brings-new-north-church-to/" target="_blank" rel="noopener noreferrer">Church Production Magazine article</a></u> about our install of the <u><a href="https://www.broadcastbeat.com/clear-coms-freespeak-ii-intercom-brings-new-north-church-together-volunteer-involvement-grows-with-clearer-communications/" target="_blank" rel="noopener noreferrer">ClearCom Freespeak ii system</a></u>, which had just come out
            at the time. I also produced and looked after the New North Weekly podcasts and the New North
            Kids weekly YouTube channel.
          </p>

          <p className="p-text p-text-color">
            Audio has taken me through festivals and concerts too, and eventually into theatre, which I
            honestly fell for. I've been lucky to work on a good number of shows: Annie, Godspell, How to
            Succeed in Business Without Really Trying, Footloose, The Lion King, Peter Pan, The Nutcracker, <u><a href="https://www.mercurynews.com/2017/01/25/powerful-cabaret-opens-hillbarn-theatre-season/" target="_blank" rel="noopener noreferrer">Cabaret</a></u>, <u><a href="https://www.mercurynews.com/2017/03/15/have-you-heard-the-latest-about-rumors-at-hillbarn/" target="_blank" rel="noopener noreferrer">Rumors</a></u>,
            Mary Poppins, The Producers, Music Man, Singing in the Rain, Million Dollar Quartet, Aida, <u><a href="http://www.aislesaysanfrancisco.com/2019/03/joseph-and-amazing-technicolor.html" target="_blank" rel="noopener noreferrer">Joseph and the Amazing Technicolor Dreamcoat</a></u>, <u><a href="https://morganhilllife.com/2018/08/22/curtain-up-theater-review-by-camille-bound-saturday-night-fever/" target="_blank" rel="noopener noreferrer">Saturday Night Fever</a></u>,
            Smokey Joe's Cafe, and Next to Normal.
          </p>

          <p className="p-text p-text-color">
            On the coding side, I got my start on DOS in the 1990s, wrote my first HTML around the time
            Myspace launched in 2003, and moved into Python for microcontrollers in 2012. Picking up
            JavaScript in 2021 was what really pulled me into web development and a Berkeley bootcamp,
            where I earned my Full Stack Web Development certificate. It's a field I'm still learning, and
            I plan to keep at it.
          </p>

          <p className="p-text p-text-color">
            When I'm not in front of a screen, you'll usually find me cooking, gardening far too much, or
            spending time with family. Thanks for stopping by.
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;
