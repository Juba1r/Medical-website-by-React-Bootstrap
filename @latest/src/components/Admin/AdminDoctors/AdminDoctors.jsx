import { useState } from "react";
import "./AdminDoctors.css";
import { Link } from "react-router-dom";

const AdminDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Doctor 1",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 2,
      name: "Doctor 2",
      email: "ddoctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    {
      id: 3,
      name: "Doctor 3",
      email: "doctor@gmail.com",
      dob: "1947-05-30",
      experience: "Neurologist",
    },
    // Add more doctor data here
  ]);

  const handleSort = (field) => {
    const sortedDoctors = [...doctors].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setSortField(field);
    setDoctors(sortedDoctors);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-doctors-container p-5">
      <div className="container doctors-container">
        <h3 className="mb-4 d-flex justify-content-center fw-bolder">
          All doctors
        </h3>
        <div className="search-container">
          <input
            type="text"
            className="form-control border-3 rounded-pill"
            placeholder="Search Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="table">
          <div className="table-header d-flex">
            <div className="table-col table-col-checkbox"></div>
            <div
              className="table-col table-col-name"
              onClick={() => handleSort("name")}
            >
              First Name Last Name {sortField === "name" ? "↑" : "↓"}
            </div>
            <div
              className="table-col table-col-email"
              onClick={() => handleSort("email")}
            >
              Email {sortField === "email" ? "↑" : "↓"}
            </div>
            <div
              className="table-col table-col-dob"
              onClick={() => handleSort("dob")}
            >
              Date of Birth {sortField === "dob" ? "↑" : "↓"}
            </div>
            <div
              className="table-col table-col-experience"
              onClick={() => handleSort("experience")}
            >
              Experiences {sortField === "experience" ? "↑" : "↓"}
            </div>
            <div className="table-col table-col-schedule">Schedule</div>
          </div>
          <div className="doctors-list">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="doctor-row d-flex">
                <div className="table-col table-col-checkbox">
                  <input type="checkbox" className="doctor-checkbox" />
                </div>
                <div className="table-col table-col-name">{doctor.name}</div>
                <div className="table-col table-col-email">{doctor.email}</div>
                <div className="table-col table-col-dob">{doctor.dob}</div>
                <div className="table-col table-col-experience">
                  {doctor.experience}
                </div>
                <div className="table-col table-col-schedule">
                  <Link to="/SetSchedule" className="btn btn-primary set-schedule-btn">
                    Set the schedule
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDoctors;
