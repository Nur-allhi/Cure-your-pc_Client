import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Reviewcard from "./../ReviewCard/Reviewcard";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("https://cureyourpc.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div>
      <div className="heading-container">
        <span className="heading">What our customers thought</span>
      </div>
      <div className="review-cards">
        {reviews.map((data) => (
          <Reviewcard key={data._id} review={data} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
