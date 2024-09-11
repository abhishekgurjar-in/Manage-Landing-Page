import React from "react";
import logo from "../assets/images/logo.svg";
import fb from "../assets/images/icon-facebook.svg";
import ig from "../assets/images/icon-instagram.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import yt from "../assets/images/icon-youtube.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="first-footer">
        <h1>Simplify how your team works today.</h1>
        <div className="button">
          <p>Get Started</p>
        </div>
      </div>
      <div className="last-footer">
        <div className="logos">
          <img src={logo} alt="" />
          <div className="social-logo">
            <img src={fb} alt="" />
            <img src={yt} alt="" />
            <img src={tw} alt="" />
            <img src={pt} alt="" />
            <img src={ig} alt="" />
          </div>
          <p>Made with ❤️ by Abhishek Gurjar</p>
        </div>
        <div className="links1">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Products</a>
          <a href="">About Us</a>
        </div>
        <div className="links2">
          <a href="">Careers</a>
          <a href="">Community</a>
          <a href="">Privacy Policy</a>

        </div>
        <div className="subscribe">
          <div className="input-section">
            <div className="input-box">
              <input type="text" placeholder="updates tour in inbox" />
            </div>
            <div className="button">
                <p>Go</p>
              </div>
          </div>
          <p className="copyright" >Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
