import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div>
        <span className="footer-header">Cure Your Pc</span>
        <br />
        <p>One stop solution</p>
        <br />
        <span className="footer-number">
          +8801819992681234 <br /> Email: noorefty1@gmail.com
        </span>
        <br />
        <p className="footer-address">
          CDA market #73245, Pahartoli, Chittagong
        </p>
        <footer>All rights reserved to NUR E ALLHI || 2021</footer>
      </div>
      <div className="footer-newsshelter">
        <span>
          Subscribe To our newsshelter
          <br /> <small>You will know the best deal fisrt</small>
        </span>
        <br />
        <input type="email" placeholder="Put your email" /> <br />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Footer;
