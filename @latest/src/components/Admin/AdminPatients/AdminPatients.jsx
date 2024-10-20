import "./AdminPatients.css";
import patient1 from "../../../assets/patient1.png";

const AdminPatients = () => {
  const patients = [
    {
      id: 1,
      name: "Patient 1",
      email: "patient1@gmail.com",
      date: "May 26, 2022",
      time: "6:30 PM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    {
      id: 2,
      name: "Patient 2",
      email: "patient2@gmail.com",
      date: "May 26, 2022",
      time: "8:00 AM",
      updated: "1 day ago",
      avatar: patient1,
    },
    // Add more patients here
  ];

  return (
    <div className="admin-patients-container p-5">
      <div className="container patients-container">
        <h3 className="mb-4">All Patients</h3>
        <div className="table-header d-flex justify-content-between  align-items-center">
          <div className="table-col-name">First and Last Name</div>
          <div className="table-col-email">Email</div>
          <div className="table-col-appointment">Last appointment</div>
        </div>
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="patient-row d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img
                src={patient.avatar}
                alt={`${patient.name} avatar`}
                className="patient-avatar me-3"
              />
              <div className="patient-info">
                <h5>{patient.name}</h5>
                <p>Updated {patient.updated}</p>
              </div>
            </div>
            <div>{patient.email}</div>
            <div>
              <div>{patient.date}</div>
              <div>{patient.time}</div>
            </div>
            <button className="btn btn-primary read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPatients;
