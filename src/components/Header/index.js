import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import custom components
import ContactIcons from '../ContactIcons'

// Pay-what-you-want donation (same Stripe link + backend logic as producerdash.com).
const DONATE_LINK = 'https://buy.stripe.com/cNi9ATfc31Ca9MG2yobsc03';

function Header() {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" className="text-light bg-dark shadow">
        <LinkContainer className="text-light" to="/">
        <Navbar.Brand>Zak Stamps</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link className="text-light">About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-light">Projects</Nav.Link>
            </LinkContainer>
            {/* Gallery hidden until ready — re-enable this link and the /gallery route in App.js to make it public again. */}
            {/* <LinkContainer to="/gallery">
              <Nav.Link className="text-light">Gallery</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="resume">
              <Nav.Link className="text-light">Resume</Nav.Link>
            </LinkContainer>
          </Nav>
          <a
            className="donate-btn mr-lg-3 my-2 my-lg-0"
            href={DONATE_LINK}
            target="_blank"
            rel="noopener noreferrer">
            Donate
          </a>
          <ContactIcons></ContactIcons>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;