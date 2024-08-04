import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer mt-6" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="./nstlogo1.png" alt="" width="500px" />
          <p>
            Welcome Niger State Mass Transport System, we offer convinience for all passengers and
  comfort that suites you.        </p>
          <div className="footer-social-icons">
            <img src="./facebook_icon.png" alt="" />
            <img src="./twitter_icon.png" alt="" />
            <img src="./linkedin_icon.png" alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234 814-686-2640</li>
            <li>Contact@scsl.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © S.C.S.L  - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
