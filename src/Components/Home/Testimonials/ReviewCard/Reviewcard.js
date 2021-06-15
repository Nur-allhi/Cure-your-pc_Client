import React from "react";
import "./Reviewcard.css";
import avatarImg from "../../../../img/avatar.png";

const Reviewcard = ({ review }) => {
  return (
    <div className="review-card">
      <div>
        <div className="avatar-img">
          <img src={avatarImg} alt="" />
        </div>
        <div>
          <span className="review-card-name">{review.name}</span> <br />
          <span>{review.opinion}</span>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
