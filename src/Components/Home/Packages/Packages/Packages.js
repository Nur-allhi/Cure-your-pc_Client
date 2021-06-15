import React from "react";
import PackageCard from "../PackageCard/PackageCard";
import "./Packages.css";
const packages = [
  {
    id: 1,
    title: "Basic",
    price: 30,
    description: "Perfect for simple Repair",
    catagory: ["Virus Removal", "Basic Pc Repair"],
    other: "Other services can be order with some extra price",
  },
  {
    id: 2,
    title: "Standard",
    price: 50,
    description: "Most Popular",
    catagory: ["Laptop repair", "Data recovery", "OS Installation"],
    other:
      "Thermal paste replacement and cleaning are available for additional charges.",
  },
  {
    id: 3,
    title: "Ultimate",
    price: 70,
    description: "ALL SERVICES ARE INCLUDED",
    catagory: [
      "Replacing Thermal Paste",
      "Computer Assembly",
      "Mac Repair",
      "Network Support",
      "Free Diagnostics",
    ],
    other:
      "You can talked to our support team for other specific services related to your computer",
  },
];

const Package = () => {
  return (
    <div>
      <div className="heading-container">
        <span className="heading">Our Packages</span>
        <p>
          Take a look to our packages. You can find more about these in our
          services page.
        </p>
      </div>
      <div className="packages-card">
        {packages.map((data) => (
          <PackageCard key={data.id} ourPackage={data}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default Package;
