import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruck, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 250,
      easing: "ease-in-out",
    });
  }, []);
  const servicesData = [
    {
      icon: <FaTruck size={36} className="text-[#ed3849]" />,
      title: "Free Delivery",
      description:
        "Get fresh flowers delivered to your doorstep with zero delivery charge. Fast and reliable, anywhere in the city.",
    },
    {
      icon: <FaMoneyBillWave size={36} className="text-[#ed3849]" />,
      title: "100% Money-Back Guarantee",
      description:
        "We stand by the quality of our flowers. If you’re not satisfied, we offer a hassle-free refund.",
    },
    {
      icon: <FaHeadset size={36} className="text-[#ed3849]" />,
      title: "Customer Support",
      description:
        "Our floral experts are available 24/7 to answer your queries and help you choose the perfect bouquet.",
    },
  ];

  return (
    <section data-aos="fade-up" className="p-6 py-16">
      <h1 className="text-5xl font-bold text-center playfair mb-16 animate-fadeIn">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {servicesData.map((service, idx) => (
          <div
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            key={idx}
            className="text-center p-8 bg-gradient-to-b from-[#fff0f4] to-[#fce7ed] rounded-3xl shadow-lg hover:scale-105 transform transition-all duration-300 animate-pop"
          >
            <div className="flex justify-center mb-5">{service.icon}</div>
            <h4 className="text-2xl font-bold playfair mb-3">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
