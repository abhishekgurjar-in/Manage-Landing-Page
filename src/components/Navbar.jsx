import React from "react";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Community</a>
      </div>
      <div className="button">
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Navbar;
