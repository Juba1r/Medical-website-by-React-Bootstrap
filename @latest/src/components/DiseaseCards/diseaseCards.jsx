import "./diseaseCards.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import disimg from "../../assets/diseasecardimg.png";
import { Link } from "react-router-dom";

const DiseaseCards = () => {
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

  return (
    <section className="py-5 mt-5 section-container">
      {/* Curved Background */}
      <div className="curved-background"></div>

      <Container>
        {/* Section Title */}
        <h2 className="text-center mb-5">Read about Diseases</h2>

        {/* Card Layout */}
        <Row className="justify-content-center">
          {diseases.map((disease) => (
            <Col key={disease.id} md={4} className="mt-2 mb-4 d-flex">
              <Card className="floating-disease-card p-3 rounded-5 border-0 h-100 gap-3 ">
                <Card.Img
                  variant="top"
                  src={disease.img}
                  className="rounded-3"
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{disease.title}</Card.Title>
                  <Card.Text>{disease.description}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/ReadMoreDiseases"
                      className="button-dis-readmore text-decoration-none fw-bold rounded-pill"
                    >
                      Read more <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DiseaseCards;
