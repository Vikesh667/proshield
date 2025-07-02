import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const CommonCard = ({item}) => {
  const [translateClass, setTranslateClass] = useState("-translate-y-full");
  const [visible, setVisible] = useState(true); 

  const handleMouseEnter = () => {
    setVisible(true); // show again
    setTranslateClass("translate-y-0"); 
  };

  const handleMouseLeave = () => {
    setTranslateClass("translate-y-full"); 

   
    setTimeout(() => {
      setVisible(false); // hide it
      setTranslateClass("-translate-y-full"); 
     
    }, 500); 
  };

  return (
    <div
      className="relative w-84 h-14 flex items-center justify-between px-3 py-3 rounded-xl overflow-hidden bg-white group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >   
      <div
        className={`absolute inset-0 bg-gradient-to-r from-20% bg-indigo-500 via-55% to-sky-400  z-0 transform transition-transform duration-500 ease-in-out ${translateClass} ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      />
      <span className="text-md tracking-wide text-gray-700 z-10 transition-colors duration-300 group-hover:text-white">
      {item}
      </span>
      <span className="text-sm p-1 bg-blue-800 text-white rounded-full z-10 transition-all duration-300 group-hover:bg-white group-hover:text-blue-800">
        <FaArrowRight />
      </span>
    </div>
  );
};

export default CommonCard;
