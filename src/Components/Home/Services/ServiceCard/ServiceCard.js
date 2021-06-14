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
          <span className="service-title">{service.title}</span>
          <br />
          <span className="service-desription">{service.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
