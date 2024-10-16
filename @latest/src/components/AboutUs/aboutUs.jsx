import "./aboutUs.css";
import aboutus1 from "../../assets/aboutus1.png";
import aboutus2 from "../../assets/aboutus2.png";

const aboutUs = () => {
  return (
    <div className="container-fluid px-4 mb-5">
      <div className="row row-cols-2">
        <div className="mt-5 ">
          <h1 className="fw-bold fs-1 mt-5">Lorem Ipsum! </h1>
          <div className="mt-5 fs-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              omnis placeat in error et, magnam temporibus saepe laboriosam
              tempore aliquid velit veniam quaerat aperiam rem enim eos tenetur
              illo. Cumque itaque possimus sapiente nemo ipsam, explicabo cum
              laudantium. Aspernatur, tempora. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Culpa, quidem. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ab, ratione aperiam? Laborum,
              pariatur dignissimos. Qui assumenda aliquid impedit quia
              temporibus!
            </p>
          </div>
        </div>
        <div className="image">
          <img src={aboutus1} width={650} alt="aboutusimage" />
        </div>
      </div>
      <div className="row row-cols-2 align-items-center">
        <div className="image">
          <img src={aboutus2} alt="aboutusimage" />
        </div>
        <div className="mt-5">
          <p className="fs-3">Biography</p>
          <p className="mt-3 fs-3 fw-normal">About Us</p>
          <br />
          <div className="fs-5">
            <p>
              Lorem Media is a full-service social media agency. We offer
              businesses innovative solutions that deliver the right type of
              audience to you in the most effective strategies possible. We
              strive to develop a community around your business, polishing your
              branding, and improving your public relations. Social Media is now
              one of the most powerful marketing tools with the ability to
              communicate with a target audience in real time.
              <br />
              <br />
              It&apos;s 2019: time to sink or swim.
              <br />
              <br />
              We are your Social Media Marketing Agency.
            </p>
            <p>
              Lorem Media is a full-service social media agency. We offer
              businesses innovative solutions that deliver the right type of
              audience to you in the most effective strategies possible. We
              strive to develop a community around your business, polishing your
              branding, and improving your public relations. Social Media is now
              one of the most powerful marketing tools with the ability to
              communicate with a target audience in real time.
              <br />
              <br />
              It&apos;s 2019: time to sink or swim.
              <br />
              <br />
              We are your Social Media Marketing Agency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
