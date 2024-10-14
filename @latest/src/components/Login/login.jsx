import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import signin from "../../assets/signin.png";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Patient");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    navigate("/Appointment");
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <h1 className="fw-bold mb-0 h1-H">Login</h1>
          <p className="fs-3 fw-bold p-H">Please login in to continue</p>
        </Col>
        <Col md={6}>
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
            <Button
              variant={selectedRole === "Doctor" ? "primary" : "light"}
              onClick={() => setSelectedRole("Admin")}
              className="ms-2"
            >
              Admin
            </Button>
          </div>
        </Col>
      </Row>

      <Form>
        <Row className="mt-4">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="border-3 p-3 rounded-4"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-4">
              <div className="input-group">
                <Form.Control
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="border-3 p-3 rounded-4"
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
              <div className="d-flex justify-content-start my-4 ">
                <Button
                  variant="primary"
                  onClick={handleLogin}
                  className="button-H reg-H"
                >
                  Login
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={6} className="justify-content-end d-flex">
            <img src={signin} width="500" alt="Sign in pic" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
