import "./App.css";
import Layout from "../src/components/layout";
import Home from "./components/Home/home";
import About from "./components/AboutUs/aboutUs";
import Locaiton from "./components/Location/location";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Locaiton />
      </Layout>
    </>
  );
}

export default App;
