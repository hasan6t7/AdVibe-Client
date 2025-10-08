import React from "react";
import heroImg from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="grid grid-cols-2 items-center justify-center p-6">
      <div className="">
        <h4 className="text-[#ed3849] mb-4">
          UP TO 20% DISCOUNT ON
        </h4>
        <h1 className="text-8xl font-bold playfair">Girl's Fashion</h1>
        <p className="text-sm text-gray-700">
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
        <button className="btn bg-[#ed3849] text-white mt-4 px-5 py-1.5">
          EXPLORE NOW
        </button>
      </div>
      <div className="">
        <img className="w-[80%] mx-auto" src={heroImg} alt="Hero Img" />
      </div>
    </section>
  );
};

export default Hero;
