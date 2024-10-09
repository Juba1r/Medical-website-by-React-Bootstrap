import heroimg from "../../assets/heroimage1.png";
import "./home.css";
import "../Navbar/navbar.css";

const home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="image">
        <img src={heroimg} width="100%" alt="" />
        <h2 className="title fw-normal">We take care of your health!</h2>
        <button className="btn-reg title-btn">Register</button>
      </div>
    </div>
  );
};

export default home;
