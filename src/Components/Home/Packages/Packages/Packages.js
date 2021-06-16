import React, { useState } from "react";
import { useEffect } from "react";
import PackageCard from "../PackageCard/PackageCard";
import "./Packages.css";

const Package = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="heading-container">
        <span className="heading">Our Services</span>
        <p>
          Take a look to our packages. You can find more about these in our
          services page.
        </p>
      </div>
      <div className="packages-card">
        {packages.map((data) => (
          <PackageCard key={data._id} ourPackage={data}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default Package;
