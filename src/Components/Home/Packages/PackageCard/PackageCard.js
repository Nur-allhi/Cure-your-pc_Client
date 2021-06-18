import React, { useContext } from "react";
import { userData } from "../../../../App";
import "./PackageCard.css";
import { useHistory } from "react-router-dom";

const PackageCard = ({ ourPackage }) => {
  const { forLoggedInUser } = useContext(userData);
  const [loggedInUser] = forLoggedInUser;

  const history = useHistory();

  const handleClickOrder = () => {
    const data = {
      personEmail: loggedInUser.email,
      name: ourPackage.name,
      price: ourPackage.price,
      orderStatus: "Received",
    };
    if (loggedInUser.email) {
      fetch("http://localhost:5000/placeorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="package-card ">
      <div>
        <div className="card-upper-bg">
          <img src={ourPackage.imageUrl} alt="" /> <br />
          <span className="card-title">{ourPackage.name}</span>
          <br />
          <button className="package-button" onClick={() => handleClickOrder()}>
            Order Now
          </button>
          <br />
          <span className="package-price">${ourPackage.price}</span> <br />
          <p>{ourPackage.catagory}</p> <br />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
