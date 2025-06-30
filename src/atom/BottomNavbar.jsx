import { useState } from "react";
import { navItem } from "../constant/data";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

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
                  <Link
                    key={sub.name}
                    to={sub.url}
                    className="block text-white px-4 py-2 rounded text-md font-semibold font-serif  hover:text-black hover:ml-2 transition-all duration-500"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
    <div className="mr-20">
     <Button text="Get Started"/>
</div>
    </nav>
  );
};

export default BottomNavbar;
