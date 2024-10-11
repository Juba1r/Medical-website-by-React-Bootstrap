import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

const layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      {children}
      <Footer />{" "}
    </>
  );
};

export default layout;
