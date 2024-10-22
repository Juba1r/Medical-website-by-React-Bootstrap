import "./contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <section className="py-5 section-container">
      {/* Curved Background */}
      <div className="curved-background-right"></div>

      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                className="form-input"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Surname"
                className="form-input"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Contact number"
                className="form-input"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="form-input"
              />
            </Col>
            <Col md={12} className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                className="form-input"
              />
            </Col>
            <Col className="text-center">
              <Button className="custom-btn" type="submit">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;
