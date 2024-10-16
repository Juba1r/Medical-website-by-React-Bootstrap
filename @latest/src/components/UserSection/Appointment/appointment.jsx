import "./appointment.css";
import { Form, Button, Row, Col } from "react-bootstrap";

const AppointmentForm = () => {
  return (
    <div className="appointment-form container p-4 mt-5">
      <h1 className="mb-5 fw-bold h1-custom">Make an appointment</h1>
      <Form className="mt-5">
        <Row className="mb-3 ">
          {/* Appointment Date */}
          <Form.Group as={Col} controlId="appointmentDate">
            <div className="d-flex align-items-center">
              <Form.Control
                type="date"
                placeholder="Appointment Date"
                className="border-3 p-3"
              />
            </div>
          </Form.Group>

          {/* Appointment Time */}
          <Form.Group as={Col} controlId="appointmentTime">
            <div className="d-flex align-items-center">
              <Form.Control
                type="time"
                placeholder="Appointment Time"
                className="border-3 p-3"
              />
            </div>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Doctor Name Dropdown */}
          <Form.Group as={Col} controlId="doctorName">
            <Form.Select aria-label="Doctor Name" className="border-3 p-3">
              <option value="">Select a doctor</option>
              <option value="1">Dr. Smith</option>
              <option value="2">Dr. Johnson</option>
              <option value="3">Dr. Williams</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Description */}
        <Row className="mb-3">
          <Form.Group controlId="description" className="border-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              className="border-3 p-3"
            />
          </Form.Group>
        </Row>

        {/* Submit Button */}
        <Button type="submit" className="button-H log-H">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AppointmentForm;
