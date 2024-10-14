import "./location.css";

const location = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center ">
        <form className="searchbox d-flex align-items-center align-self-center">
          <input type="search" placeholder="Search your location.." />
          <button className="button-S reg mt-3">Search</button>
        </form>
      </div>
      <div className="gmap container mt-5 mb-5">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=QCF7+QXM,%20Rd-2,%20Dhaka%201212,%20Bangladesh+(Doctor's%20Properties%20Ltd)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
};

export default location;
