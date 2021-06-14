import React from "react";
import "./ReasonsCard.css";

const ReasonsCard = ({ reason }) => {
  return (
    <div className="reason-card">
      <div>
        <div>
          <img src={reason.image} alt="" />
        </div>
        <div>
          <span className="card-title">{reason.title}</span> <br />
          <span className="card-desription">{reason.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ReasonsCard;
