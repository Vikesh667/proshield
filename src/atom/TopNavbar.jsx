import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="w-full h-10 lg:h-16 bg-gradient-to-r from-blue-600 to-blue-300 flex items-center justify-center lg:justify-between px-4 lg:px-10">
      <h1 className="text-lg text-[#FFFFFF] opacity-70 font-serif hidden lg:block">
        We are always ready to protect your data{" "}
        <span className="underline hover:text-black/90 cursor-pointer"><Link to="/contact">Contact Now</Link></span>
      </h1>

      <div className="flex space-x-4 lg:space-x-10 items-center justify-center h-full w-full lg:w-auto">
        <div className="flex space-x-2 lg:space-x-3 items-center cursor-pointer">
          <h2 className="font-serif text-[#FFFFFF] opacity-70 text-sm lg:text-lg hover:text-black/90">Help</h2>
          <span className="w-[1.5px] h-3 lg:h-4 rotate-12 bg-gray-200"></span>
          <h2 className="font-serif text-[#FFFFFF] opacity-70 text-sm lg:text-lg hover:text-black/90">Support</h2>
          <span className="w-[1.5px] h-3 lg:h-4 rotate-12 bg-gray-200"></span>
          <h2 className="font-serif text-[#FFFFFF] opacity-70 text-sm lg:text-lg hover:text-black/90"><Link to="/contact">Contact</Link></h2>
        </div>

        <div className="bg-gray-100 w-[0.5px] h-3 lg:h-4 opacity-40"></div>

        <div className="flex space-x-5 items-center h-full cursor-pointer">
          <FaXTwitter className="text-sm lg:text-lg text-[#FFFFFF] hover:text-black/90" />
          <FaFacebookF className="text-sm lg:text-lg text-[#FFFFFF] hover:text-black/90" />
          <FaInstagram className="text-sm lg:text-lg text-[#FFFFFF] hover:text-black/90" />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
