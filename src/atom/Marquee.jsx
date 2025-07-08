import React, { useEffect} from "react";
import { motion} from "framer-motion";
import { gallerys } from "../constant/data";

const Marquee = ({isRunning,direction,controls}) => {

  useEffect(() => {
    if (isRunning) {
      controls.start({
        x: direction === "left" ? "-100%" : "100%",
        transition: {
          x: {
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop();
    }
  }, [isRunning, direction, controls]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gray-950 w-full h-auto flex flex-col items-center justify-center"
    >

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-5 w-max"
          animate={controls}
          initial={{ x: direction === "left" ? "100%" : "-100%" }}
        >
          {gallerys.map((image, index) => (
            <img key={index} src={image} className="w-20 h-10" alt="" />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Marquee;
