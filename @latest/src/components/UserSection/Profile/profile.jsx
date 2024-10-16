import "./profile.css";
import profileimg from "../../../assets/profileimg.png";
import profileicon from "../../../assets/profileicon.png";

const profile = () => {
  return (
    <div className="container-fluid mt-5 p-0">
      <div className="col-12 d-flex justify-content-center">
        <div className="col-6 d-flex flex-column ">
          <div className="d-flex justify-content-center ">
            <h1 className="fw-bold">My profile</h1>
          </div>
          <div className="mt-4 profile-left-section d-flex justify-content-start align-items-center">
            <img
              src={profileimg}
              alt="profile image"
              width={400}
              height={400}
              className="ms-5"
            />
            <h2 className="">Edit profile photo</h2>
            <img
              src={profileicon}
              alt="Profile Icon"
              className="profile-icon"
            />
          </div>
        </div>
        <div className="col-6"> there</div>
      </div>
    </div>
  );
};

export default profile;
