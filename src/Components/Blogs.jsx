import React from "react";

const Blogs = () => {
  return (
    <section className="p-6 my-20">
      <h2 className="text-center text-5xl playfair">Latest From Blog</h2>
      <p className="lg:w-2/3 mx-auto text-center mt-3 text-sm text-gray-700">
        Elevate your wardrobe with our freshest style tips, trends, and
        inspiration on our blog.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        <div className="rounded-xl pb-6 shadow-lg cursor-pointer hover:scale-105 transition-all duration-200">
          <img
          className="h-[200px] rounded-t-xl"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mastering the Art of Capsule Wardrobes"
          />
          <div className="text-center mt-4 space-y-3">
            <h6 className="playfair text-2xl font-bold">Timeless Elegance</h6>
            <h4 className="text-sm text-gray-700 ">
              Mastering the Art of Capsule Wardrobes
            </h4>
            <p className=" text-[#ed3849]  text-sm">12th August 2022</p>
          </div>
        </div>
        <div className="rounded-xl pb-6 shadow-lg cursor-pointer hover:scale-105 transition-all duration-200">
          <img
          className="h-[200px] rounded-t-xl"
            src="https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&amp;w=2072&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unveiling the Hottest Beachwear Trends"
          />
          <div className="text-center mt-4 space-y-3">
            <h6 className="playfair text-2xl font-bold">Summer Breeze</h6>
            <h4 className="text-sm text-gray-700">Unveiling the Hottest Beachwear Trends</h4>
            <p className="text-[#ed3849]  text-sm">18th January 2023</p>
          </div>
        </div>
        <div className="rounded-xl cursor-pointer pb-6 shadow-lg hover:scale-105 transition-all duration-200">
          <img
          className="h-[200px] rounded-t-xl"
            src="https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Navigating the World of Women's Tailoring"
          />
          <div className="text-center mt-4 space-y-3">
            <h6 className="playfair text-2xl font-bold">Power Dressing</h6>
            <h4 className="text-sm text-gray-700">Navigating the World of Women's Tailoring</h4>
            <p className="text-[#ed3849]  text-sm">5th January 2025</p>
          </div>
        </div>
        <div className="rounded-xl pb-6 shadow-lg cursor-pointer hover:scale-105 transition-all duration-200">
          <img
          className="h-[200px] rounded-t-xl"
            src="https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&amp;w=1948&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="The World's Best Fashion Fair 2025"
          />
          <div className="text-center mt-4 space-y-3">
            <h6 className="playfair text-2xl font-bold">New York Times</h6>
            <h4 className="text-sm text-gray-700">The World's Best Fashion Fair 2025</h4>
            <p className="text-[#ed3849]  text-sm">25th May 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
