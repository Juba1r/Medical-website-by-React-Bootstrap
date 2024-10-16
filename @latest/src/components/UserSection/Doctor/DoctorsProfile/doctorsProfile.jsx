import "./doctorsProfile.css";
import doctorsimg from "../../../../assets/doctorsprofileimg.png";

const doctorsProfile = () => {
  return (
    <div className="container-fluid">
      <div className="doc-bg p-0 mt-5 row">
        <div className="col ms-5">
          <img
            src={doctorsimg}
            alt="Doctor's image"
            width="auto"
            height="600px"
            className="ms-4 mt-5"
          />
        </div>
        <div className="col doctor-title">
          <p>
            Hello, I&apos;m
            <p className="fw-bold">Dr.MARLIYN</p>
            <span className="fs-5 doctor-dsgtn ">MBBS, P.hD, FCPS, FRCP</span>
          </p>
          <br />
        </div>
      </div>
      <div className="container mt-5">
        <div className="align-items-center">
          <h2>Doctor Details</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            distinctio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default doctorsProfile;
