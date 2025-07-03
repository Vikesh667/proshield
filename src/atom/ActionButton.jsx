import { useState } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";

const ActionButton = ({
   text,
    onClick, 
    type = "button", 
    icon = null ,
    hoverColor="from-blue-700 via-blue-400 to-sky-400"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden px-6 py-3 rounded-full group bg-white"
    >
      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className={`absolute inset-0 bg-gradient-to-r ${hoverColor}  z-0 rounded-full`}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
        {/* Icon with dynamic color and background */}
        
        <span
          className={`text-lg font-semibold transition-colors duration-300 ${
            isHovered ? "text-white" : "text-blue-700"
          }`}
        >
          {text}
        </span>
        {icon && (
          <span
            className={`p-2 rounded-full transition-colors duration-300 ${
              isHovered ? "bg-white text-blue-700" : "bg-blue-500 text-white"
            }`}
          >
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default ActionButton;
