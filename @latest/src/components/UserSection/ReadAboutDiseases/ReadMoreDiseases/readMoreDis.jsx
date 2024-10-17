import "./readMoreDis.css";
import readmoredisimg from "../../../../assets/readmoredis.png";

const ReadMoreDis = () => {
  return (
    <div className="container mt-5">
      <div className="row col-md-12">
        {/* Left Side Content */}
        <div className="col-md-8">
          <h2 className="fw-bold">Disease 1</h2>

          {/* Symptoms Section */}
          <h4 className="mt-5 fw-semibold">Symptoms</h4>
          <p className="text-justify mt-4 causes-section-p">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={readmoredisimg}
            alt="Disease illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="mt-5">
        {/* Causes Section */}
        <h2 className="d-flex justify-content-center">
          What causes this disease?
        </h2>
        <p className="text-justify mt-4 causes-section-p">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. cumque nihil impedit
          quo minus id quod maxime placeat facere possimus, omnis voluptas
          assumenda est, omnis dolor repellendus. cumque nihil impedit quo minus
          id quod maxime placeat facere possimus, omnis voluptas assumenda est,
          omnis dolor repellendus. cumque nihil impedit quo minus id quod maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus.
        </p>
      </div>
    </div>
  );
};

export default ReadMoreDis;
