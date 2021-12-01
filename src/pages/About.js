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
              <p className="text-dark text-center text-md-left h4">
                I'm Zak Stamps, an audio engineer and full-stack web developer based in the San Francisco bay area.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-dark about-container">
        <Container className="p-5 bg-dark">
          <h3 class="p-text-color">About Me</h3>
          <p class="p-text p-text-color">
            I have been immersed in the wide world of audio production for the
            past 30 years spanning the worlds of live sound, broadcast audio,
            post-production audio, and music production.</p>

          <p class="p-text p-text-color">
            I’ve mixed and worked with a diverse group of artists over the course 
            of my career including Praise One, Valley Worship, Country music artist Brandon Hamilton, 
            Filipino sensations IntroVoys, Christian artists MercyMe, for KING & COUNTRY, Tauren Wells, 
            Rend Collective and Phil Wickham. I’ve also worked on and managed projects for corporate 
            and broadcast clients including ESPN, and Stanford University.
          </p>

          <p class="p-text p-text-color">
            Up until Jan 2021, I spent 11 years focused on audio in Houses of Worship and served as the Technical 
            Director for a large church in the San Francisco bay area, <u><a href="https://www.newnorth.church/" target="_blank" rel="noopener noreferrer">New North Church</a></u> located in San Bruno, CA 
            for 5 of those years. At New North, I oversaw all technical production-related needs for the Sunday 
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

          <p class="p-text p-text-color">
            At this point I’ve spent most of my life devoted to the world of audio, delving into the church world, 
            high-end festival and concert life as well as high production theatre. Not long after getting involved 
            in the church industry, I was introduced to the live theatre industry and fell in love. Ever since I 
            have had the pleasure of working on large productions such as; Annie, Godspell, How to Succeed in 
            Business Without Really Trying, Footloose, the Lion King, Peter Pan, the Nutcracker, <u><a href="https://www.mercurynews.com/2017/01/25/powerful-cabaret-opens-hillbarn-theatre-season/" target="_blank" rel="noopener noreferrer">Cabaret</a></u>, <u><a href="https://www.mercurynews.com/2017/03/15/have-you-heard-the-latest-about-rumors-at-hillbarn/" target="_blank" rel="noopener noreferrer">Rumors</a></u>, 
            Marry Poppins, The Producers, Music Man, Singing in the Rain, Million Dollar Quartet, Aida, <u><a href="http://www.aislesaysanfrancisco.com/2019/03/joseph-and-amazing-technicolor.html" target="_blank" rel="noopener noreferrer">Joseph and the Amazing Technicolor Dreamcoat</a></u>, <u><a href="https://morganhilllife.com/2018/08/22/curtain-up-theater-review-by-camille-bound-saturday-night-fever/" target="_blank" rel="noopener noreferrer">Saturday Night Fever</a></u>, 
            Smokey Joe's Cafe, and Next to Normal.
          </p>

          <p class="p-text p-text-color">
            I learned computer programming with DOS in the 1990's and started coding around the release of 
            Myspace in 2003 with basic HTML hacks and python microchip programming in 2012.
            As soon as I learned Javascript in 2021, there was no turning back.
            As life evolved and technologies become more and more the norm,
            I decided to get my feet wet in the world of web development and attended
            Berkeley University bootcamp for coding.
            After receiving my certificate in Full Stack Web Development,
            I plan to move forward with continued education in computer science and
            software development as time progresses. So far, I'm absolutely Loving this industry
            and looking for every way possible to learn more of the skill.
          </p>
          <p class="p-text p-text-color">
            When I'm not in front of a screen, you might find me cooking, spending way too much time gardening,
            or spending precious time with the family. Thanks for stopping by!
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;