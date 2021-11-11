import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import ContactForm from '../components/ContactForm';

// define ContactForm component
function Contact() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Get in Touch</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="mt-5 mb-0">
        <Container className="p-4 shadow contact-bg bg-dark">
          <Row>
            <Col sm={12} md={6} lg={12} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4 class="h4-contact">Send Me a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Contact;