import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#fff0f4] via-[#fce7ed] to-[#fff0f4] mt-16 text-gray-700">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ed3849] via-[#d23141] to-[#ed3849]" />

      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animate-fadeIn">
        {/* Brand / About */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold playfair text-gray-900 transition-all"
          >
            Ad<span className="text-[#d23141]">V</span>ibe
          </Link>
          <p className="text-gray-600 leading-relaxed my-4">
            Bloom with us — delivering joy and elegance through beautifully
            curated floral collections. Let every petal tell your story.
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:bg-[#ed3849] hover:text-white transition-all"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:bg-[#ed3849] hover:text-white transition-all"
            >
              <FaInstagram  size={25}/>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:bg-[#ed3849] hover:text-white transition-all"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:bg-[#ed3849] hover:text-white transition-all"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-2xl playfair text-gray-900 mb-4 relative">
            Company
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#ed3849]"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#ed3849] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#ed3849] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#ed3849] transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#ed3849] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#ed3849] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-2xl playfair text-gray-900 mb-4 relative">
            Support
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#ed3849]"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:text-[#ed3849] transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-[#ed3849] transition">
                Track My Order
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-[#ed3849] transition">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-[#ed3849] transition">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#ed3849] transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl playfair text-gray-900 mb-4 relative">
            Newsletter
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#ed3849]"></span>
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to receive exclusive offers, style tips, and the latest
            news
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-l-full border border-gray-300 focus:ring-2 focus:ring-[#ed3849] outline-none"
            />
            <button
              type="submit"
              className="bg-[#ed3849] text-white cursor-pointer px-4 rounded-r-full hover:bg-[#d23141] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8"></div>

      {/* Bottom Text */}
      <div className="text-center py-5 text-gray-600 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#ed3849] font-semibold">AdVibe</span>. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
