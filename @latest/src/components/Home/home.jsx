import heroimg1 from "../../assets/heroimage1.png";
import heroimg2 from "../../assets/heroimage2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import "../Navbar/navbar.css";
import DiseaseCards from "../DiseaseCards/diseaseCards";
import ContactForm from "../Contact/contact";

const home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="image">
          <img src={heroimg1} width="100%" alt="" />
          <h2 className="title fw-normal ">We take care of your health!</h2>
          <button className="reg button-U title-btn">Register</button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
            <img src={heroimg2} alt="" className="img-fluid" />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6">
            <p className="fs-3">Biography</p>
            <h3 className="mt-3 fw-bolder fs-1">About Us</h3>
            <br />
            <div className="fs-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                mollitia, soluta laborum deserunt rerum nam labore dolor odit,
                ad, magni accusantium beatae aut aliquid? Quisquam non tempora
                quos? Dicta, non?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perferendis, maxime!
              </p>
              <button className="reg button-U mt-4 fw-bolder">
                Read More <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <DiseaseCards />
      <ContactForm />
    </>
  );
};

export default home;
