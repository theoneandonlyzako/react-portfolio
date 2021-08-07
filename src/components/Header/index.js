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
        <LinkContainer className="text-light" to="/">
        <Navbar.Brand>Zak Stamps</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link className="text-light" style="color:red">About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-light">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="resume">
              <Nav.Link className="text-light">Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link className="text-light">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <ContactIcons></ContactIcons>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;