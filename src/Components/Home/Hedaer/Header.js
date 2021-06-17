import React from "react";
import "./Header.css";
import image1 from "../../../img/img1.png";

const Header = () => {
  return (
    <div className="div-container">
      <div>
        <span className="heading">
          Proffessional <br /> Computer repair service
        </span>
        <br />
        <span className="description">
          Here you can find a best service for your broken computer.
        </span>
        <br />
        <button>Check our Prices</button>
      </div>
      <div className="imageContainer">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Header;
