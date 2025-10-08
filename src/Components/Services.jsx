import React from "react";

const Services = () => {
  return (
    <section className="p-6">
         <h1 className="text-5xl font-bold text-center playfair mb-16">
        Our Services
      </h1>
      <div class=" grid grid-cols-2 md:grid-cols-3 gap-10 justify-between">
        <div class="text-center p-4 bg-[#F4E5EC] rounded-xl">
          <span className="text-3xl text-[#ed3849]">
            <i class="ri-truck-line"></i>
          </span>
          <h4 className="text-2xl font-bold playfair mt-4 mb-2">
            Free Delivery
          </h4>
          <p>
            Offers convenience and the ability to shop from anywhere, anytime.
          </p>
        </div>
        <div class="text-center p-4 bg-[#F4E5EC] rounded-xl">
          <span className="text-3xl text-[#ed3849]">
            <i class="ri-money-dollar-circle-line"></i>
          </span>
          <h4 className="text-2xl font-bold playfair mt-4 mb-2">
            100% Money Back Guaranty
          </h4>
          <p>
            E-commerce have a review system where customers can share feedback.
          </p>
        </div>
        <div class="text-center p-4 bg-[#F4E5EC] rounded-xl">
          <span className="text-3xl text-[#ed3849]">
            <i class="ri-user-voice-fill"></i>
          </span>
          <h4 className="text-2xl font-bold playfair mt-4 mb-2">
            Strong Support
          </h4>
          <p>
            Offer customer support services to assist customers with queries and
            issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
