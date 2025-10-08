import React from "react";
import Hero from "../../Components/Hero";
import Categories from "../../Components/Categories";
import Trends from "../../Components/Trends";
import TrendingPro from "../TrendingProduct/TrendingPro";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Trends></Trends>
      <TrendingPro></TrendingPro>
    </div>
  );
};

export default Home;
