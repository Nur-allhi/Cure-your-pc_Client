import React from "react";
import "./Reviews.css";
import Reviewcard from "./../ReviewCard/Reviewcard";

const reviews = [
  {
    id: 1,
    name: "Iqbal Azam",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  },
  {
    id: 2,
    name: "Sadikun",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  },
  {
    id: 3,
    name: "Namira Nur",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  },
  {
    id: 4,
    name: "Dorin",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  },
  // {
  //   id: 5,
  //   name: "Arpa",
  //   opinion:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  // },
  // {
  //   id: 6,
  //   name: "Mahib",
  //   opinion:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  // },
  // {
  //   id: 7,
  //   name: "Farib",
  //   opinion:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  // },
  // {
  //   id: 8,
  //   name: "Subah",
  //   opinion:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  // },
  // {
  //   id: 9,
  //   name: "Fariha",
  //   opinion:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur amet nesciunt iusto expedita officiis dignissimos, inventore libero! Architecto.",
  // },
];
const Reviews = () => {
  return (
    <div>
      <div className="heading-container">
        <span className="heading">What our customers thought</span>
      </div>
      <div className="review-cards">
        {reviews.map((data) => (
          <Reviewcard key={data.id} review={data} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
