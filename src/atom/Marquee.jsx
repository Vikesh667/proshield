import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gallerys, securityTexts } from "../constant/data";

const Marquee = ({ isRunning = true, direction = "left" }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isRunning) {
      controls.start({
        x: direction === "left" ? "-50%" : "0%",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isRunning, direction, controls]);

  const MarqueeContent = () => (
    <>
      {gallerys.map((image, index) => (
        <div key={index} className="flex items-center gap-3 min-w-max">
          <img src={image} alt="" className="w-8 h-8 object-contain" />
          <p className="whitespace-nowrap text-sm text-cyan-200 font-medium">
            {securityTexts[index]}
          </p>
        </div>
      ))}
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#0f172a] text-white py-2 border-y border-cyan-500">
      <motion.div
        className="flex gap-10 w-max absolute left-0"
        animate={controls}
        initial={{ x: "0%" }}
      >
        <div className="flex gap-10">
          <MarqueeContent />
        </div>
        <div className="flex gap-10">
          <MarqueeContent />
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
