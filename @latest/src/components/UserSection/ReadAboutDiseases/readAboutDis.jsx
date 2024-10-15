import "./readAboutDis.css";
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import disimg from "../../../assets/diseasecardimg.png";
import { useState } from "react";

const readAboutDis = () => {
  const diseases = [
    {
      id: 1,
      title: "Disease 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: disimg,
    },
    {
      id: 2,
      title: "Disease 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: disimg,
    },
    {
      id: 3,
      title: "Disease 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: disimg,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDisease = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-5 mt-5">
      <Container>
        <Form className="d-flex justify-content-center mt-3 mb-5">
          <InputGroup className="w-50">
            <Form.Control
              type="text"
              placeholder="Search for a doctor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-3 p-3 mt-4"
            />
            <i className="bi bi-search fs-4 ms-3 mt-4 icon-search"></i>
          </InputGroup>
        </Form>

        {/* Card Layout */}
        <Row className="justify-content-center">
          {filteredDisease.map((disease) => (
            <Col key={disease.id} md={4} className="mt-2 mb-4 d-flex">
              <Card className="floating-card  p-3 rounded-5 border-0 h-100 gap-3 ">
                <Card.Img
                  variant="top"
                  src={disease.img}
                  className="rounded-3"
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{disease.title}</Card.Title>
                  <Card.Text>{disease.description}</Card.Text>
                  <button className="button-U fw-bold rounded-pill px-4">
                    Read more <i className="bi bi-arrow-right"></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default readAboutDis;
