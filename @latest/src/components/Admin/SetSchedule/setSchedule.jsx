import { Container, Row, Col, Button, Table } from "react-bootstrap";
import "./setSchedule.css";

const SetSchedule = () => {
  const renderScheduleButtons = () => {
    const daysInMonth = 31; // Assuming July
    let buttons = [];

    for (let i = 1; i <= daysInMonth; i++) {
      buttons.push(
        <Button key={i} variant="outline-primary" size="sm" className="mb-2">
          Set schedule
        </Button>
      );
    }

    return buttons;
  };

  return (
    <Container
      className="p-4"
      style={{ backgroundColor: "#f5f5f7", borderRadius: "10px" }}
    >
      <Row className="align-items-center mb-4">
        <Col md={3} className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle img-fluid"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        <Col md={9}>
          <h4>Name - Surname</h4>
          <p>27 yrs, Male</p>
          <p>Address + other details</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5 className="text-center">July 2022</h5>
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Array.from({ length: 7 }).map((_, index) => (
                  <td key={index}>
                    {renderScheduleButtons().slice(index * 5, (index + 1) * 5)}
                  </td>
                ))}
              </tr>
              {/* Repeat rows for the entire month */}
              <tr>
                {Array.from({ length: 7 }).map((_, index) => (
                  <td key={index + 7}>
                    {renderScheduleButtons().slice(
                      index * 5 + 7,
                      (index + 1) * 5 + 7
                    )}
                  </td>
                ))}
              </tr>
              {/* Add more rows as needed based on month */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default SetSchedule;
