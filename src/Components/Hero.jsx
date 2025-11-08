import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="grid bg-[#F4E5EC] grid-cols-1 gap-5 md:grid-cols-2 items-center justify-center p-6"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* <h4 className="text-[#ed3849] mb-4">
          UP TO 20% DISCOUNT ON
        </h4> */}
        <h1 className="text-5xl lg:text-7xl font-bold playfair">
          Let's make beautiful flowers a part of your life
        </h1>
        <p className="text-sm text-gray-700 mt-3">
          Every flower tells a story — of care, color, and connection. Let’s
          fill your days with blossoms that make every moment special. From the
          soft glow of a morning bloom to the fragrance that lingers through the
          night, each petal carries a whisper of nature’s love.
        </p>
        <Link to={"/shop"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-[#ed3849] text-white mt-4 px-5 py-1.5"
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          className="w-[80%] mx-auto"
          src="https://i.ibb.co.com/k2Bk267N/pngwing-10.png"
          alt="Hero Img"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
