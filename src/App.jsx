import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/templatemo-upright.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

//import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="tm-main">
          <Home />
          <Gallery />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
