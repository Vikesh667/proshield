import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { navItem } from "../constant/data";
import logo from "../assets/logo.svg";

const BottomNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="w-full h-24 flex justify-between items-center bg-white shadow-md px-8 relative z-50">
      {/* Brand */}
      <div className=" ml-20"> 
       <img src={logo} alt="Logo" className="w-40 h-auto" />
      </div>

      {/* Navigation Menu */}
      <ul className="flex gap-10 relative">
        {navItem.map((item) => (
          <li
            key={item.text}
            className="group relative"
          >
            <a href={item.link} className="font-light text-lg cursor-pointer font-serif text-black/80 capitalize hover:text-blue-400">
              {item.text}
            </a>

            {/* Dropdown */}
            {item.submenu && (
            <div className="bg-gradient-to-r bg-blue-700  to-blue-300 rounded-2xl opacity-0 w-56 h-auto absolute mt-3 left-0 top-full transform scale-y-0 origin-top group-hover:scale-y-100  group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden ">
                {item.submenu.map((sub) => (
                  <a
                    key={sub.name}
                    href={sub.url}
                    className="block text-white px-4 py-2 rounded text-md font-semibold font-serif  hover:text-black hover:ml-2 transition-all duration-500"
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
    <div className="mr-20">
  <button
    className="
      relative group flex items-center gap-2 overflow-hidden 
      px-7 py-3 rounded-full 
      text-white text-xl 
      transition-all duration-700 ease-in-out 
      bg-gradient-to-r from-blue-800 to-blue-400
      group-hover:px-8 group-hover:py-3
    "
  >
    <span
      className="
        absolute inset-0 z-0 
        bg-gradient-to-r from-blue-400 to-blue-800 
        rounded-full 
        transform translate-x-full group-hover:translate-x-0 
        opacity-0 group-hover:opacity-100 
        transition-all duration-700 ease-in-out
      "
    ></span>

    <span className="relative z-10 flex items-center gap-2">
      Get Started
      <GoArrowRight
        className="
          bg-white text-blue-500 rounded-full p-1 
          transition-all duration-500 ease-in-out
          group-hover:translate-x-1
        "
      />
    </span>
  </button>
</div>


    </nav>
  );
};

export default BottomNavbar;
