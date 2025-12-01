import React from "react";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import CustomerReviews from "../components/CustomerReviews";
import Popular from "../components/Popular";
import { useLoaderData } from "react-router";

const Home = () => {
  const toys = useLoaderData();
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <Popular toys={toys}></Popular>
      <ChooseUs></ChooseUs>
      <CustomerReviews></CustomerReviews>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
