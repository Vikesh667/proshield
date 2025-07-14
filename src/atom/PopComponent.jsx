import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopComponent = ({ setComponent }) => {
  const [viewHeight, setViewHeight] = useState({
    width: 70,
    height: 40,
  });

  const [position, setPosition] = useState(50);
  const [topPos, setTopPos] = useState(22);

  const handleLeft = () => {
    setPosition(0);
    setTopPos(20);
  };
  const handleRight = () => {
    setPosition(50);
    setTopPos(20);
  };
  const handleCenter = () => {
    setPosition(25);
    setTopPos(40);
  };
  return (
    <motion.div
      className="fixed z-50 flex items-center justify-center flex-col gap-6 transform -translate-x-1/2
                 p-4 sm:p-6 rounded-xl text-white bg-gray-800 shadow-lg 
                 overflow-auto "
      style={{
        left: `${position}%`,
        top: `${topPos}%`,
        width: `${viewHeight.width}vw`,
        height: `${viewHeight.height}vh`,
        maxWidth: "60vh",
        maxHeight: "60vh",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-sm  lg:text-xl text-center text-white">
        Secure Your Business Today! We provide enterprise-grade cybersecurity
        solutions to protect what matters most. 👉 Get a Free Security 
        Assessment.Contact and stay one step ahead of hackers.
      </h1>
      
      <button
        onClick={() => setComponent(false)}
        className="text-white lg:border lg:px-3 lg:py-1 rounded 
                   hover:bg-white hover:text-red-800 transition absolute top-2 right-2"
      >
        X
      </button>
      <button className="py-3 px-5 rounded-full bg-red-600 tracking-wide hover:bg-red-400 hover:scale-110 transition duration-500"><Link to="/contact">Subscribe</Link></button>
    </motion.div>
  );
};

export default PopComponent;
