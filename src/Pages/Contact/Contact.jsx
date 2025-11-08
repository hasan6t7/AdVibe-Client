// Contact.jsx
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";


const Contact = () => {
  return (
    <section className="relative py-20 px-6 min-h-screen">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="">
          <h2 className="text-4xl font-bold text-[#ed3849] mb-6 playfair">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We would love to hear from you! Fill out the form below and we’ll
            get back to you soon.
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#ed3849] hover:bg-[#d23141] text-white font-semibold py-3 px-6 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#ed3849]" />
              <span>123 Flower Street, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#ed3849]" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#ed3849]" />
              <span>contact@advibe.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <FaFacebook size={25} className="text-[#ed3849] hover:text-[#d23141] cursor-pointer transition" />
              <FaTwitter size={25} className="text-[#ed3849] hover:text-[#d23141] cursor-pointer transition" />
              <FaInstagram size={25} className="text-[#ed3849] hover:text-[#d23141] cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://i.ibb.co.com/0RrpzPYH/pngwing-5.png"
            alt="Flower"
            className=" w-[80%] object-cover"
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-0 right-0 w-1/4 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <circle cx="250" cy="250" r="250" fill="#ed3849" />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
