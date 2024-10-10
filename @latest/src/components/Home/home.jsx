import heroimg1 from "../../assets/heroimage1.png";
import heroimg2 from "../../assets/heroimage2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import "../Navbar/navbar.css";

const home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="image">
          <img src={heroimg1} width="100%" alt="" />
          <h2 className="title fw-normal">We take care of your health!</h2>
          <button className="btn-reg title-btn">Register</button>
        </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center ">
        <div className="col">
          <img src={heroimg2} alt="" />
        </div>
        <div className="col mt-5">
          <p className="fs-3">Biography</p>
          <h3 className="mt-3 fw-bolder fs-1">About Us</h3>
          <br />
          <div className="fs-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              mollitia, soluta laborum deserunt rerum nam labore dolor odit, ad,
              magni accusantium beatae aut aliquid? Quisquam non tempora quos?
              Dicta, non?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, maxime!
            </p>
            <button className="btn-reg mt-4 fw-bolder">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;