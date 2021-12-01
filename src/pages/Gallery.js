import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Gallery from '../components/Gallery';

// import images for apps
import zak1 from '../assets/image/Gigs/zak1.jpg';
import zak2 from '../assets/image/Gigs/zak2.jpg';
import zak3 from '../assets/image/Gigs/zak3.jpg';
import zak4 from '../assets/image/Gigs/zak4.jpg';
import zak5 from '../assets/image/Gigs/zak5.jpg';
import zak6 from '../assets/image/Gigs/zak6.jpg';
import zak7 from '../assets/image/Gigs/zak7.jpg';
import zak8 from '../assets/image/Gigs/zak8.jpg';
import zak9 from '../assets/image/Gigs/zak9.jpg';
import zak10 from '../assets/image/Gigs/zak10.jpg';
import zak11 from '../assets/image/Gigs/zak11.jpg';
import zak12 from '../assets/image/Gigs/zak12.jpg';
import zak13 from '../assets/image/Gigs/zak13.jpg';
import zak14 from '../assets/image/Gigs/zak14.jpg';
import zak15 from '../assets/image/Gigs/zak15.jpg';
import zak16 from '../assets/image/Gigs/zak16.jpg';
import zak17 from '../assets/image/Gigs/zak17.jpg';
import zak18 from '../assets/image/Gigs/zak18.jpg';
import zak19 from '../assets/image/Gigs/zak19.jpg';
import zak20 from '../assets/image/Gigs/zak20.jpg';



function Gallerys() {
  const gallerys = [
    {
      "title": "Mic Test",
      "description": "Testing the new install of the Waves LV1 system for NNC",
      "key": "mic-test",
      "imageSrc": zak1,
      // "deployed_app": "https://photos.google.com/share/AF1QipNTliuCTKsS4A5nYGiGQjSyTNnuSyijPg7AS74AHheddn0iOyJKDnXe4uaEfYwglg/photo/AF1QipOy6w1YPEvN1ITLjZxdUDvd2LmSl_InFDsvKltg?key=SDlUODR1OG9zV1ZGaHJuaGcwSlJucTFZWHlodEZB"
    },
    {
      "title": "Monitors",
      "description": "Running Monitors!",
      "key": "monitors",
      "imageSrc": zak2,
      // "deployed_app": "https://photos.google.com/share/AF1QipNTliuCTKsS4A5nYGiGQjSyTNnuSyijPg7AS74AHheddn0iOyJKDnXe4uaEfYwglg/photo/AF1QipOnOu_gABfBReCdslGhuuRJweoz41lypn7bkJ6D?key=SDlUODR1OG9zV1ZGaHJuaGcwSlJucTFZWHlodEZB"
    },
    {
      "title": "LV1 Training",
      "description": "Training the guys on the new broadcast system",
      "key": "lv1-trainning",
      "imageSrc": zak3,
      // "deployed_app": "https://theoneandonlyzako.github.io/passwordGenerator/"
    },
    {
      "title": "BBBay Next To Normal",
      "description": "My view at the Fox running sound for the showing of Next To Normal",
      "key": "next-to-normal",
      "imageSrc": zak4,
      // "deployed_app": "https://keeper-of-notes.herokuapp.com/"
    },
    {
      "title": "Mobile Rig - Goliath",
      "description": "Just finished the mobile broadcast rig for NNC",
      "key": "Goliath",
      "imageSrc": zak5,
      // "deployed_app": "https://zaks-budget-tracker.herokuapp.com/"
    },
    {
      "title": "FOH at Stanford",
      "description": "My Beautiful view at Stanford University stadium",
      "key": "Stanford",
      "imageSrc": zak6,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "FOH at FCC",
      "description": "My Beautiful view at Foothill Community Church",
      "key": "fcc",
      "imageSrc": zak7,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Happy New Year!",
      "description": "BTS of the recording of New North Church's NY sermon",
      "key": "happy-new-year",
      "imageSrc": zak8,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Mercy Me",
      "description": "Back Stage view of the keyboard rigs for Mercy Me",
      "key": "mercy-me",
      "imageSrc": zak9,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Mic Packs",
      "description": "How I label mic packs for theatre",
      "key": "mic-packs",
      "imageSrc": zak10,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "BBBay MDQ ",
      "description": "My view at the Fox running sound for the showing of Million Dollar Quartet",
      "key": "mqd",
      "imageSrc": zak11,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "NNC Weekly Podcast",
      "description": "Recording Rob and McKenna doing their thing",
      "key": "podcast",
      "imageSrc": zak12,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "FOH at Borel",
      "description": "My view at the Borel Musical Theatre running rehearsal sound for their showing of FAME!",
      "key": "borel",
      "imageSrc": zak13,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "FOH at Hillbarn",
      "description": "MMy view at Hillbarn Theatre running sound for the showing of Mary Poppins",
      "key": "poppins",
      "imageSrc": zak14,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Mic World",
      "description": "Back Stage at the Fox displaying the craziness of receivers and racks ",
      "key": "mic-world",
      "imageSrc": zak15,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "FOH at Borel",
      "description": "Closing night of FAME!",
      "key": "Stanford",
      "imageSrc": zak16,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "M7 Surgery",
      "description": "Performing heart surgery on the M7 at NNC",
      "key": "surgery",
      "imageSrc": zak17,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Monitor World",
      "description": "Monitor console for Mercy Me",
      "key": "mercy-monitor",
      "imageSrc": zak18,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Vegas Baby!",
      "description": "Fun broadcast work in Vegas",
      "key": "vegas",
      "imageSrc": zak19,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },
    {
      "title": "Mics!",
      "description": "That's a lot of mics for 1 show",
      "key": "mics!",
      "imageSrc": zak20,
      // "deployed_app": "https://theoneandonlyzako.github.io/Weather-app/"
    },

  ]
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Picture Gallery</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3 ">
        <Row>
          {gallerys.map((gallery) => {
            return(
              <Col s={12} lg={6} key={gallery.key}>
                <Gallery gallery={gallery} />
              </Col>
            )
          })}
        </Row>
      </Container>

      {/* <Container className="p-3">
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
              <h4 class="video-head">Live Mix</h4>
                <iframe src="https://www.youtube.com/embed/usj7oG3tWSc?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      </Container> */}
    </>
  )
}

export default Gallerys;