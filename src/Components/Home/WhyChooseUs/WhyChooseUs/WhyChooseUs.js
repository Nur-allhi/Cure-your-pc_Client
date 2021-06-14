import React from "react";
import ReasonsCard from "./../ReasonsCard/ReasonsCard";
import "./WhyChooseUs.css";

const reasons = [
  {
    id: 1,
    title: "Reliable Services",
    image: "https://i.ibb.co/M9v5JS0/monitoring.png",
    description:
      "Every service our computer technicians provide is guaranteed to be prompt & reliable.",
  },
  {
    id: 2,
    title: "Skilled Personal",
    image: "https://i.ibb.co/D1SfMqg/tools.png",
    description:
      "All the experts at Fixoria have the skills & experience to get the job done right.",
  },
  {
    id: 3,
    title: "Licensed & Certified",
    image: "https://i.ibb.co/B3Smk65/certified.png",
    description:
      "For your safety and peace of mind, we're fully licensed, certified, and insured!",
  },
];
const WhyChooseUs = () => {
  return (
    <div>
      <div className="heading-container">
        <span className="heading">Why Choose Us</span>
        <p>
          There are dozens of reasons why our clients choose Fixoria as their
          computer service provider of choice.
        </p>
      </div>
      <div className="reason-cards">
        {reasons.map((data) => (
          <ReasonsCard key={data.id} reason={data}></ReasonsCard>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
