import React from "react";
import Header from "../Hedaer/Header";
import Services from "../Services/Services/Services";
import WhyChooseUs from "./../WhyChooseUs/WhyChooseUs/WhyChooseUs";
import Packages from "../Packages/Packages/Packages";
import Footer from "./../../Shared/Footer/Footer";
import Reviews from "./../Testimonials/Reviews/Reviews";
// import { Switch } from "react-router-dom";
// import PrivateRoute from "./../../Login/PrivateRoute";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Home;
<h1>This home</h1>;
