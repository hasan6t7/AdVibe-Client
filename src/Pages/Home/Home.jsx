import React from "react";
import Hero from "../../Components/Hero";
import Categories from "../../Components/Categories";
import Trends from "../../Components/Trends";
import TrendingPro from "../TrendingProduct/TrendingPro";
import Deal from "../../Components/Deal";
import Services from "../../Components/Services";
import Blogs from "../../Components/Blogs";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Trends></Trends>
      <TrendingPro></TrendingPro>
      <Deal></Deal>
      <Services></Services>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
