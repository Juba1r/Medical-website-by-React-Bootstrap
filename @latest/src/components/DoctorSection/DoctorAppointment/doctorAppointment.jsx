import { Table, Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import "./doctorAppointment.css";

const appointments = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    date: "10/10/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Ronald Richards",
    email: "ronald.richards@example.com",
    date: "10/12/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    date: "10/13/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@gmail.com",
    date: "10/14/2020",
    time: "8:00 - 8:30 pm",
    img: "https://via.placeholder.com/50",
    status: "confirmed",
  },
  // Add more entries here...
];

const DoctorAppointment = () => {
  return (
    <div className="doctor-appointment-container container mt-5">
      <h1 className="mb-4 fs-1">Appointments</h1>

      <div className="d-flex justify-content-end mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="link" className="dropdown-toggle">
            Show 10 appointments
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>5 appointments</Dropdown.Item>
            <Dropdown.Item>10 appointments</Dropdown.Item>
            <Dropdown.Item>20 appointments</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Visit Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={appointment.img}
                    alt={appointment.name}
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <span>{appointment.name}</span>
                </div>
              </td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td className="text-center">
                <FaCheckCircle className="text-success me-2" />
                <FaTrashAlt className="text-danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination-container d-flex justify-content-center mt-4">
        <Button variant="outline-primary" className="me-2 log">
          1
        </Button>
        <Button variant="outline-primary" className="me-2">
          2
        </Button>
        <Button variant="outline-primary">Next</Button>
      </div>
    </div>
  );
};

export default DoctorAppointment;
