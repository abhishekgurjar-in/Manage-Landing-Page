import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Home />
      </div>
     <div className="bg-2">
     <About />
     <Testimonials />
     </div>
      <Footer />
    </>
  );
};

export default App;
