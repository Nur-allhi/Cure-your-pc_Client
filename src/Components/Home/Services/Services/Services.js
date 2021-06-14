import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import hardwareImg from "../../../../img/services/hardware.jpg";
import virusRemovalImg from "../../../../img/services/virus-removal.jpg";
import troublesShootingImg from "../../../../img/services/trouble.jpg";
import "./Services.css";
const services = [
  {
    id: 1,
    title: "Hardware Repair",
    description:
      "This is for physical damages that are incurred by the computer or its accessories. This includes installing new hardware, repair or updating hardware, etc.",
    image: hardwareImg,
    price: 30,
  },
  {
    id: 2,
    title: "Virus Removal",
    description:
      "In this service computer technicians ensure that the virus will be removed without risking the important data or information on your computer.",
    image: virusRemovalImg,
    price: 30,
  },
  {
    id: 3,
    title: "Troubleshooting",
    description:
      "These are the two most common types of computer repair services for businesses. These include network setup, training, network fixes, and related problems.",
    image: troublesShootingImg,
    price: 30,
  },
];
const Services = () => {
  return (
    <div>
      <div className="heading-container">
        <span className="heading">What We Offer</span>
        <p>
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="service-cards">
        {services.map((data) => (
          <ServiceCard key={data.id} service={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
