import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container className="footer-border">
        <Row className="mt-4 text-center text-md-start">
          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Hours */}
          <Col xs={12} md={4} className="mb-3">
            <h5 className="fw-bold">Hours</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <ul className="list-unstyled me-3">
                <li>Monday:</li>
                <li>Tuesday:</li>
                <li>Wednesday:</li>
                <li>Thursday:</li>
                <li>Friday:</li>
              </ul>
              <ul className="list-unstyled">
                <li>9:00 - 18:00</li>
                <li>9:00 - 18:00</li>
                <li>9:00 - 18:00</li>
                <li>9:00 - 18:00</li>
                <li>9:00 - 18:00</li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={4} className="mb-3">
            <h5 className="fw-bold">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faPhone} /> +381 38 500 600
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a
                  href="mailto:drejtoria.shskuk@rks-gov.net"
                  className="text-dark text-decoration-none"
                >
                  drejtoria.shskuk@rks-gov.net
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Lagjja Spitalit,
                Prishtine 1000, Kosove
              </li>
            </ul>
            <button className="mt-2 reg button-U">Gjej rrugen</button>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0 fw-bold">
              &copy; Qendra Klinike Universitare e Kosoves
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
