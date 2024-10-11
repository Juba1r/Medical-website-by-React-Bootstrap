import "./location.css";

const location = () => {
  return (
    <div className="container-fluid d-flex justify-content-center ">
      <div className="d-flex ">
        <form className="searchbox d-flex align-items-center align-self-center">
          <input type="search" placeholder="Search your location.." />
        <button className="button-S reg mt-3">Search</button>
        </form>
      </div>
    </div>
  );
};

export default location;
