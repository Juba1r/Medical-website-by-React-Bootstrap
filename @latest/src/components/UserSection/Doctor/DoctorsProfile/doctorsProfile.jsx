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
        <div className="doctor-details">
          <h2 className="d-flex justify-content-center">Doctor Details</h2>

          <p className="d-flex justify-content-center mt-5 doctor-details-p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugit error, sequi aliquid fuga corrupti quod sapiente quo minus
            praesentium! Dolorum facilis vel debitis doloremque distinctio
            maiores alias illo, tempora at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae, harum voluptate nesciunt
            eos quibusdam ullam. Delectus, fugit molestiae magni quia dolor
            voluptatibus officia. Facere dicta at mollitia ab nobis minus atque
            illum, autem doloremque quia, asperiores repudiandae aliquam ratione
            repellat? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            In, ad, itaque ipsam voluptate praesentium laudantium eaque,
            voluptatem deleniti voluptatum eligendi vero odio ducimus beatae.
            Necessitatibus minima architecto voluptate culpa! Vel iusto a quidem
            alias culpa odit officiis aut itaque. Qui! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dolorum, corrupti?
          </p>
        </div>
      </div>
      <div className="container row">
        <div className="col d-flex justify-content-center">
          <input type="text" placeholder="Give a feedback" className="border-2 p-4" />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default doctorsProfile;
