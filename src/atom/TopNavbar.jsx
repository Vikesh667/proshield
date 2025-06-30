import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r bg-blue-600 to-blue-300 flex items-center justify-between">
     <h1 className="ml-30 text-lg text-[#FFFFFF] opacity-70 font-serif">We are always ready to protect your data <span className="underline hover:text-black/90 cursor-pointer">Contact Now</span></h1>
     <div className="flex space-x-10 items-center h-full mr-30">
     <div className="flex space-x-3 items-center cursor-pointer">
      <h2 className="font-serif text-[#FFFFFF] opacity-70 text-lg hover:text-black/90">Help</h2>
      <span className="w-[1.5px] h-4 transform  rotate-12 bg-gray-200 "></span>
      <h2 className="font-serif text-[#FFFFFF] opacity-70 text-lg hover:text-black/90">Support</h2>
       <span className="w-[1.5px] h-4 transform rotate-12 bg-gray-200 "></span>
      <h2 className="font-serif text-[#FFFFFF] opacity-70 text-lg hover:text-black/90">Contact</h2>
     </div>
     <div className="bg-gray-100 w-[.5px] h-4 opacity-40"></div>
     <div className="flex  space-x-5 items-center h-full cursor-pointer">
      <FaXTwitter className="text-lg text-[#FFFFFF] hover:text-black/90"/>
      <FaFacebookF className="text-lg text-[#FFFFFF] hover:text-black/90"/>
      <FaInstagram className="text-lg text-[#FFFFFF] hover:text-black/90"/>
     </div>
     </div>
    </nav>
  );
};

export default TopNavbar;
