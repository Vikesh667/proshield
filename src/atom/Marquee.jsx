import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gallerys, securityTexts } from "../constant/data";

const Marquee = ({ isRunning, direction, controls }) => {
  useEffect(() => {
    if (isRunning) {
      controls.start({
        x: direction === "left" ? "-100%" : "100%",
        transition: {
          x: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isRunning, direction, controls]);

  return (
    <motion.div className="w-full bg-[#0f172a] text-white py-2 border-y border-cyan-500 overflow-hidden">
      <motion.div
        className="flex items-center gap-10 w-max px-5"
        animate={controls}
        initial={{ x: direction === "left" ? "100%" : "-100%" }}
      >
        {gallerys.map((image, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={image} alt="" className="w-8 h-8 object-contain" />
            <p className="whitespace-nowrap text-sm text-cyan-200 font-medium">
              {securityTexts[index]}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Marquee;
