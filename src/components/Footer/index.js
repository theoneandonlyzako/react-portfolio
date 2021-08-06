import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import ContactIcons from '../ContactIcons'

function Footer() {
  return (
    <footer className="text-light bg-dark p-3 shadow footer">
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-md-0">
            <p className="m-md-0 copyright">© 2021 Zak Stamps</p>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-md-end justify-content-center">
            <ContactIcons></ContactIcons>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;