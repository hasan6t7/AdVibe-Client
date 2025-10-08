import React from "react";

const Deal = () => {
  return (
    <section className="p-6 my-20 flex flex-col-reverse md:flex-row gap-10 bg-[#F4E5EC]">
      <div className="flex-1">
        <img className="w-[90%] mx-auto" src="https://i.ibb.co.com/WptrfzNC/deals.png" alt="deals" />
      </div>
      <div className="flex-1">
        <h5 className="text-[#ed3849] mb-4 text-center md:text-left">Get Up To 20% Discount</h5>
        <h4 className="text-4xl lg:text-5xl mb-4 font-bold playfair text-center md:text-left">Deals Of This Month</h4>
        <p className="text-sm text-gray-700 text-center lg:text-left">
          Our Women's Fashion Deals of the Month are here to make your style
          dreams a reality without breaking the bank. Discover a curated
          collection of exquisite clothing, accessories, and footwear, all
          handpicked to elevate your wardrobe.
        </p>
        <div className="flex items-center gap-10 mt-10 flex-wrap">
          <div className="text-center space-y-1 font-semibold bg-white p-4 rounded-full">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="text-center space-y-1 font-semibold bg-white p-4 rounded-full">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="text-center space-y-1 font-semibold bg-white p-4 rounded-full">
            <h4>15</h4>
            <p>Mins</p>
          </div>
          <div className="text-center space-y-1 font-semibold bg-white p-4 rounded-full">
            <h4>05</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
