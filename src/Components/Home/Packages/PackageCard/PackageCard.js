import React from "react";
import "./PackageCard.css";

const PackageCard = ({ ourPackage }) => {
  return (
    <div className="package-card ">
      <div>
        <div className="card-upper-bg">
          <span className="card-title">{ourPackage.title}</span>
          <p className="card-desription">{ourPackage.description}</p>
          <span className="package-price">${ourPackage.price}</span> <br />
        </div>
        <button className="package-button">Order Now</button>
        <div>
          <br />
          <p>{ourPackage.catagory[0]}</p> <br />
          <p>{ourPackage.catagory[1]}</p>
          <br />
          <p>{ourPackage.catagory[2]}</p>
          <br />
          <p>{ourPackage.catagory[3]}</p>
          <br />
          <p>{ourPackage.catagory[4]}</p>
          <p>{ourPackage.other}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
