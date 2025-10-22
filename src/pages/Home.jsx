import React from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import ChooseUs from "../components/ChooseUs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <PopularToys></PopularToys>

      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
