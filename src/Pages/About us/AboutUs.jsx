// AboutUs.jsx
import React from "react";
import { FaLeaf, FaGift, FaHeart } from "react-icons/fa";


const AboutUs = () => {
  return (
    <section className="mb-20 mt-10 relative bg-gradient-to-r from-pink-50 to-white px-6">
      <div className=" flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-5xl font-bold text-[#ed3849] mb-6 playfair">
            About Us
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            At <span className="font-semibold text-[#d23141]">Bloom Haven</span>
            , we bring the beauty of flowers right to your doorstep. Our passion
            is to craft unique floral experiences for every occasion, making
            your moments memorable and vibrant.
          </p>
          <p className="text-gray-600 mb-8">
            We believe flowers speak the language of emotions. From birthdays to
            weddings, our fresh and handpicked flowers bring smiles and warmth
            to every celebration.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaLeaf className="text-[#ed3849] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Fresh Flowers</h3>
              <p className="text-gray-500 text-sm">
                Handpicked daily for the best quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaGift className="text-[#ed3849] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Gifts & Bouquets</h3>
              <p className="text-gray-500 text-sm">
                Beautiful arrangements for every occasion.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <FaHeart className="text-[#ed3849] text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800">Customer Love</h3>
              <p className="text-gray-500 text-sm">
                Our clients' happiness is our priority.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 z-10">
          <img
            src="https://i.ibb.co.com/sMk85z1/pngwing-6.png"
            alt="Beautiful flowers"
            className=" w-[70%]  object-cover"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-0 left-0 w-1/3 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle cx="250" cy="250" r="250" fill="#ed3849" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
