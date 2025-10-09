import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 pt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="mb-4 text-2xl playfair">CONTACT INFO</h4>
          <p className="flex items-center gap-2 text-gray-700">
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, London Bridge Street, London
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@advibe.com
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            (+012) 3456 789
          </p>
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          <h4 className="mb-4 text-2xl playfair text-black ">COMPANY</h4>
          <Link to={"#"}>Home</Link>
          <Link to={"#"}>About Us</Link>
          <Link to={"#"}>Work With Us</Link>
          <Link to={"#"}>Our Blog</Link>
          <Link to={"#"}>Terms &amp; Conditions</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          <h4 className="mb-4 text-2xl playfair text-black ">USEFUL LINK</h4>
          <Link to={"#"}>Help</Link>
          <Link to={"#"}>Track My Order</Link>
          <Link to={"#"}>Men</Link>
          <Link to={"#"}>Women</Link>
          <Link to={"#"}>Dresses</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-4 text-2xl playfair">INSTAGRAM</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://i.ibb.co.com/qFs2zr7q/instagram-1.jpg"
              alt="instagram"
            />
            <img
              src="https://i.ibb.co.com/fzNmwkw3/instagram-2.jpg"
              alt="instagram"
            />
            <img
              src="https://i.ibb.co.com/Q3rnNZ1L/instagram-3.jpg"
              alt="instagram"
            />
            <img
              src="https://i.ibb.co.com/ccTkMhJ2/instagram-4.jpg"
              alt="instagram"
            />
            <img
              src="https://i.ibb.co.com/GfVWFQJL/instagram-5.jpg"
              alt="instagram"
            />
            <img
              src="https://i.ibb.co.com/hRXzvnxh/instagram-6.jpg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className="footer sm:footer-horizontal footer-center p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by AdVibe 
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
