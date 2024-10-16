import { useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "./doctor.css";
import doctorimg1 from "../../../assets/doctor1.png";
import doctorimg2 from "../../../assets/doctor2.png";
import doctorsimg from "../../../assets/doctorhero.png";
import { Link } from "react-router-dom";

const DoctorTeam = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      name: "Silva A.D.M.P",
      title: "MBBS, MD, DCCM",
      image: doctorimg1,
    },
    {
      name: "John Doe",
      title: "MD, Cardiologist",
      image: doctorimg2,
    },
    {
      name: "Silva A.D.M.P",
      title: "MBBS, MD, DCCM",
      image: doctorimg1,
    },
    {
      name: "John Doe",
      title: "MD, Cardiologist",
      image: doctorimg2,
    },
    {
      name: "John Doe",
      title: "MD, Cardiologist",
      image: doctorimg2,
    },
    {
      name: "Silva A.D.M.P",
      title: "MBBS, MD, DCCM",
      image: doctorimg1,
    },
    {
      name: "John Doe",
      title: "MD, Cardiologist",
      image: doctorimg2,
    },
    {
      name: "John Doe",
      title: "MD, Cardiologist",
      image: doctorimg2,
    },
    {
      name: "Silva A.D.M.P",
      title: "MBBS, MD, DCCM",
      image: doctorimg1,
    },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="image">
        <img src={doctorsimg} alt="" />
      </div>
      <h2 className="text-center mt-5">Our Professional Team</h2>

      {/* Search Bar */}
      <Form className="d-flex justify-content-center mt-3 mb-5">
        <InputGroup className="justify-content-center mt-4">
          <div className="search-box-doctor">
            <Form.Control
              type="text"
              placeholder="Search for a doctor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-3 input-field-doctor"
            />
            <i className="bi bi-search fs-4 search-icon-doctor"></i>
          </div>
        </InputGroup>
      </Form>

      {/* Doctors Grid */}
      <Row className="g-4">
        {filteredDoctors.map((doctor, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <div className="doctor-card p-3">
              <Row className="align-items-center">
                {/* Doctor's Image */}
                <Col xs={4}>
                  <img
                    src={doctor.image}
                    className="rounded-circle doctor-image"
                    alt={`${doctor.name}`}
                  />
                </Col>

                {/* Doctor's Information */}
                <Col xs={8}>
                  <div className="doctor-info p-4">
                    <h5 className="doctor-name">{doctor.name}</h5>
                    <p className="doctor-title text-muted">{doctor.title}</p>
                    <Link
                      to="/doctorsProfile"
                      className="button-D fw-bold mt-2"
                    >
                      Read more & Rate <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorTeam;
