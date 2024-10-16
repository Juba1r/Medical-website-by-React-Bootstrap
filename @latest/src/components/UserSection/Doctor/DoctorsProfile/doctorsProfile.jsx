import "./doctorsProfile.css";
import doctorsimg from "../../../../assets/doctorsprofileimg.png";

const doctorsProfile = () => {
  return (
    <div className="container-fluid">
      <div className="doc-bg p-0 mt-5 row">
        <div className="col d-flex justify-content-center">
          <img
            src={doctorsimg}
            alt="Doctor's image"
            width="auto"
            height="600px"
            className=" mt-5"
          />
        </div>
        <div className="col doctor-profile-title">
          <p>
            Hello, I&apos;m
            <p className="fw-bold">Dr.MARLIYN</p>
            <span className="fs-5 doctor-dsgtn ">MBBS, P.hD, FCPS, FRCP</span>
          </p>
          <br />
        </div>
      </div>
      <div className="container mt-5">
        <div className="doctor-profile-details">
          <h2 className="d-flex justify-content-center">Doctor Details</h2>

          <p className="d-flex justify-content-center mt-5 doctor-profile-details-p">
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
      <div className="container col-12 mt-5 d-flex">
        <div className="col-6 d-flex justify-content-start flex-column gap-3 align-items-center">
          <input
            type="text"
            placeholder="Give a feedback"
            className="border-1 p-3 w-75 rounded-3"
          />

          <button className="feedback-send-btn d-flex justify-content-center">
            Send
          </button>
        </div>
        <div className="col-6 d-flex justify-content-center flex-column fw-medium mb-5">
          <h3>Latest Feedbacks</h3>
          <div className="h-100 p-3 w-100 border border-3 rounded-3 mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aut!
              Sint officiis quam nobis cumque quidem fugiat eius in similique
              voluptate temporibus veniam optio dolor laudantium, esse libero.
              Exercitationem commodi consectetur adipisci, ea optio veritatis
              necessitatibus impedit enim et incidunt ?
            </p>
          </div>
          <div className="h-100 p-3 w-100 border border-3 rounded-3 mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aut!
              Sint officiis quam nobis cumque quidem fugiat eius in similique
              voluptate temporibus veniam optio dolor laudantium, esse libero.
              Exercitationem{" "}
            </p>
          </div>
          <div className="h-100 p-3 w-100 border border-3 rounded-3 mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aut!
              Sint officiis quam nobis cumque quidem fugiat eius in similique
              voluptate temporibus veniam optio dolor laudantium, esse libero.
              Exercitationem commodi consectetur adipisci, ea optio veritatis
              necessitatibus impedit enim et incidunt Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Hic, quam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default doctorsProfile;
