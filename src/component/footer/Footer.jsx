import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import footerBgImage from "../../assets/footer-bg.png";
import footerLogo from "../../assets/footer-logo.svg";
import { TfiLocationArrow } from "react-icons/tfi";
import { footerItem } from "../../constant/data";
const Footer = () => {
  return (
    <footer
      className="w-full h-auto bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBgImage})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-5% bg-indigo-600 via-70% to-sky-300 relative">
        <div className="w-full h-40 flex flex-col md:flex-row lg:flex-row items-start lg:items-center lg:justify-between lg:px-28 py-10 px-5 gap-5">
          <img className="w-40 h-40"  src={footerLogo} alt="" />
          <div className="flex gap-4 lg:gap-10 ">
            <span className="group border border-gray-100 p-2 lg:p-3 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
              <FaPinterestP className="text-white text-md lg:text-xl group-hover:text-blue-700 hover:!text-blue-500 transition-colors duration-300" />
            </span>
            <span className="group border border-gray-100 p-2 lg:p-3 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
              <FaXTwitter className="text-white text-md lg:text-xl group-hover:text-blue-700 hover:!text-blue-500 transition-colors duration-300" />
            </span>
            <span className="group border border-gray-100 p-2 lg:p-3 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
              <FaFacebookF className="text-white text-md lg:text-xl group-hover:text-blue-700 hover:!text-blue-500 transition-colors duration-300" />
            </span>
            <span className="group border border-gray-100 p-2 lg:p-3 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
              <FaInstagram className="text-white text-md lg:text-xl group-hover:text-blue-700 hover:!text-blue-500 transition-colors duration-300" />
            </span>
          </div>
        </div>

        <hr className="w-[90%] mx-auto border-t border-white/20 my-6" />
        <div className="w-full h-full lg:h-72 py-10 px-5 lg:px-28 lg:py-25 flex flex-col lg:flex-row gap-20 justify-around -mt-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl lg:text-2xl text-white">Subscribe our newsletter:</h1>
            <h3 className="text-lg lg:text-xl text-white">
              Protecting networks, systems data from evolving.
            </h3>
            <div className="flex gap-4 ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-3 lg:py-5 px-5 w-60 lg:w-72 rounded-full bg-white outline-none"
              />
              <button className="p-2 lg:p-4 rounded-full bg-white hover:bg-indigo-950 hover:text-white transform hover:rotate-90 transition duration-500">
                <TfiLocationArrow className="text-4xl " />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 -mt-10">
            {footerItem.map((footeritem,index) => (
              <div
              key={index}
              className="w-full h-full">
                <h1 className="text-white text-lg hover:text-indigo-950 cursor-pointer relative group py-2 overflow-hidden">
                  <span>{footeritem.title}</span>
                  <span className="h-[3px] w-16 bg-white absolute   bottom-0 left-0 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500"></span>
                </h1>
                <ul className="w-full h-full mt-3 flex flex-col items-start gap-2">
                  {footeritem.list.map((lis,index) => (
                    <li
                    key={index}
                    className="text-md text-white font-serif hover:text-indigo-950 cursor-pointer">
                      {lis}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t border-white/20 my-6" />

        <div className="w-full h-20 bg-gradient-to-bl flex items-center justify-center -mt-5">
          <h1 className="text-white text-lg opacity-90">
            Copyright © 2025 All Rights Reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
