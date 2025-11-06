import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="grid bg-[#F4E5EC] grid-cols-1 gap-5 md:grid-cols-2 items-center justify-center p-6">
      <div className="">
        {/* <h4 className="text-[#ed3849] mb-4">
          UP TO 20% DISCOUNT ON
        </h4> */}
        <h1 className="text-5xl lg:text-7xl font-bold playfair">
          Let's make beautiful flowers a part of your life
        </h1>
        <p className="text-sm text-gray-700 mt-3">
          Every flower tells a story — of care, color, and connection. Let’s
          fill your days with blossoms that make every moment special.From the soft glow of a morning bloom to the fragrance that lingers through the night, each petal carries a whisper of nature’s love.
        </p>
        <Link to={"/shop"}>
          <button className="btn bg-[#ed3849] text-white mt-4 px-5 py-1.5">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="">
        <img
          className="w-[80%] mx-auto"
          src="https://i.ibb.co.com/k2Bk267N/pngwing-10.png"
          alt="Hero Img"
        />
      </div>
    </section>
  );
};

export default Hero;
