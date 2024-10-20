import "./adminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <div className="dashboard-container">
          <div className="col-12 d-flex justify-content-center gap-5">
            {/* Card 1 */}
            <div className="card p-3 d-flex justify-content-center align-items-center">
              <div className="row row-cols-12">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-bed"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="card-title">Total Patient</div>
                  <div className="card-number">250</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card p-3 d-flex justify-content-center align-items-center">
              <div className="row align-items-center">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-user-doctor"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="card-title flex-nowrap">Total Doctors</div>
                  <div className="card-number">50</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card p-3 d-flex justify-content-center align-items-center">
              <div className="row align-items-center">
                {/* Left Column for Icon */}
                <div className="col-4">
                  <i className="fs-1 fa-solid fa-address-card"></i>
                </div>
                {/* Right Column for Text */}
                <div className="col-8">
                  <div className="card-title">Total Posts</div>
                  <div className="card-number">20</div>
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
