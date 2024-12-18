import "./adminProfile.css";
import adminprofileimg from "../../../assets/adminprofile.png";
import profileicon from "../../../assets/profileicon.png";

const AdminProfile = () => {
  return (
    <div className="admin-profile-main-container">
      <div className="container ms-4 py-5 mb-5">
        <div className="col-12 d-flex justify-content-center">
          <div className="col-6 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
              <h1 className="fw-bold">My Profile</h1>
            </div>
            <div className="col-12 mt-4 admin-profile-left-section">
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={adminprofileimg}
                  alt="profile image"
                  width={300}
                  height={300}
                  className="profile-image me-5"
                />
              </div>
              <div className="col-4 ms-5 d-flex flex-column align-items-center">
                <h2 className="text-nowrap">Edit Profile Photo</h2>
                <img
                  src={profileicon}
                  alt="Profile Icon"
                  className="profile-icon"
                />
              </div>
            </div>
          </div>
          <div className="container col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="text-start w-75">
              <h2>Edit my account details</h2>
              <input
                type="text"
                placeholder="First Name"
                className="border-1 p-3 w-100 rounded-3 mt-4"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-1 p-3 w-100 rounded-3 mt-4"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="border-1 p-3 w-100 rounded-3 mt-4"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="border-1 p-3 w-100 rounded-3 mt-4"
              />
            </div>

            <button className="edit-profile-btn mt-3">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
