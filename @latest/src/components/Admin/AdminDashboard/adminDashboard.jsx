import "./adminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <div className="dashboard-container">
          <div className="row d-flex justify-content-center gap-4">
            {/* Card 1 */}
            <div className="admindashboard-card p-3 col-lg-3 col-md-5 col-sm-10 d-flex justify-content-center align-items-center">
              <div className="row row-cols-12">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-bed"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="admindashboard-card-title">Total Patient</div>
                  <div className="admindashboard-card-number">250</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="admindashboard-card p-3 col-lg-3 col-md-5 col-sm-10 d-flex justify-content-center align-items-center">
              <div className="row align-items-center">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-user-doctor"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="admindashboard-card-title flex-nowrap">
                    Total Doctors
                  </div>
                  <div className="admindashboard-card-number">50</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="admindashboard-card p-3 col-lg-3 col-md-5 col-sm-10 d-flex justify-content-center align-items-center">
              <div className="row align-items-center">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-address-card"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="admindashboard-card-title text-nowrap">
                    Total Posts
                  </div>
                  <div className="admindashboard-card-number">20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
