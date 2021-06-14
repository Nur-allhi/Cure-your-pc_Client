import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div>
        <div>
          <img src={service.image} alt="" />
        </div>
        <div>
          <span className="card-title">{service.title}</span>
          <br />
          <span className="card-desription">{service.description}</span> <br />
          <button className="card-button">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
