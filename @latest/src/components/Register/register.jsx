import { useState } from "react";
import "./register.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Patient");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="container mt-5">
      <h1 className="fw-bold mb-0 h1-H">Register</h1>
      <p className="fs-3 fw-bold p-H">Please register to continue</p>

      <div className="toggle-role mb-4 d-flex justify-content-end">
        <Button
          className=""
          variant={selectedRole === "Patient" ? "primary" : "light"}
          onClick={() => setSelectedRole("Patient")}
        >
          Patient
        </Button>
        <Button
          variant={selectedRole === "Doctor" ? "primary" : "light"}
          onClick={() => setSelectedRole("Doctor")}
          className="ms-2"
        >
          Doctor
        </Button>
      </div>

      <Form>
        <Row className="mt-4">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                className="border-3 p-3 "
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                className="border-3 p-3"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="border-3 p-3"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="mobile">
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                className="border-3 p-3"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Control as="select" className="border-3 p-3">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dob">
              <div className="input-group">
                <Form.Control type="date" className="border-3 p-3" />
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Form.Group controlId="password">
              <div className="input-group">
                <Form.Control
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="border-3 p-3"
                />
                <span
                  className="input-group-text"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEye : faEyeSlash}
                  />
                </span>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="confirmPassword">
              <div className="input-group">
                <Form.Control
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="border-3 p-3"
                />
                <span
                  className="input-group-text"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEye : faEyeSlash}
                  />
                </span>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5 mb-3 ">
        <Button variant="primary" type="submit" className="button-H reg-H">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
