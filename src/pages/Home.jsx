import React from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <ChooseUs></ChooseUs>
      <CustomerReviews></CustomerReviews>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
