import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import custom components
import ContactIcons from '../ContactIcons'

function Header() {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" className="text-light bg-dark shadow">
        <LinkContainer to="/about">
        <Navbar.Brand>Zak Stamps</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <ContactIcons></ContactIcons>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;