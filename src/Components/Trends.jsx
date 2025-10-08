import React from "react";
import { Link } from "react-router";

const Trends = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center my-20">
      <div className="relative">
        <img
          src="https://i.ibb.co.com/DHvzpqV8/card-1.png"
          alt="Womens Shirt"
        />
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-15%] -translate-y-1/2
"
        >
          <p className="text-[#ed3849]">2023 Trend</p>
          <h4>Womens Shirt</h4>
          <Link href="#">Discover More +</Link>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co.com/zzBykbm/card-2.png"
          alt="Womens Dresses"
        />
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-15%] -translate-y-1/2
"
        >
          <p>2023 Trend</p>
          <h4>Womens Dresses</h4>
          <Link href="#">Discover More +</Link>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://i.ibb.co.com/ZR1k0hQS/card-3.png"
          alt="Womens Casuals"
        />
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-15%] -translate-y-1/2
"
        >
          <p>2023 Trend</p>
          <h4>Womens Casuals</h4>
          <Link href="#">Discover More +</Link>
        </div>
      </div>
    </section>
  );
};

export default Trends;
