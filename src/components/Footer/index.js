import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';

// import custom components
import ContactIcons from '../ContactIcons'

function Footer() {
  return (
    <footer className="text-light bg-dark p-3 shadow footer">
      <Container className="d-flex flex-wrap justify-content-between align-items-center">
        <p className="m-0 copyright">© {new Date().getFullYear()} Zak Stamps</p>
        <ContactIcons></ContactIcons>
      </Container>
    </footer>
  )
}

export default Footer;
