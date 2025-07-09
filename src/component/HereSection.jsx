import heroImage from "../assets/hero-bg.jpg";
import ActionButton from "../atom/ActionButton";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import VideoPlay from "../atom/VideoPlay";
import icon from "../assets/icon-sub-heading.svg";
import iconCheck from "../assets/icon-check-white.svg";
import ClientCard from "../atom/ClientCard";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = ({ setHovered, setContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
    
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#01053547] to-[#010535cc] z-10" />
      </div>

     
      <div className="relative z-20 px-4 mt-10 sm:px-6 lg:px-20 py-10 lg:py-36 max-w-[1440px] mx-auto text-white">
        <motion.div
          className="flex items-center mb-3"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={icon} alt="icon" className="w-6 h-6 brightness-0 invert" />
          <span className="ml-2 text-base lg:text-xl">Welcome Cyber Security</span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Secure your world,
          <br /> effortlessly today!
        </motion.h1>

        <motion.p
          className="tracking-wide sm:text-md lg:text-lg text-white/90 max-w-2xl mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Protect your digital world with seamless, cutting-edge cybersecurity
          solutions designed to safeguard your data, systems, and peace of mind.
        </motion.p>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10">
          <ActionButton text="Learn More" icon={<GoArrowRight />} />

          <div className="flex items-center gap-3 group">
            <span
              onClick={() => setOpen(true)}
              onMouseEnter={() => {
                setHovered(true);
                setContent(
                  <div className="flex flex-col items-center">
                    <span className="text-sm">Play</span>
                  </div>
                );
              }}
              onMouseLeave={() => {
                setHovered(false);
                setContent(null);
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300"
            >
              <FaPlay className="text-base sm:text-lg group-hover:text-blue-400" />
            </span>
            <h3 className="text-base sm:text-lg">Play video</h3>
          </div>

          {open && <VideoPlay setOpen={setOpen} />}
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:items-start sm:gap-10">
          <div className="flex flex-col gap-6 text-white">
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={iconCheck} alt="check-icon" />
              <span className="text-base sm:text-lg">Access Control Management</span>
            </motion.div>
            <hr className="h-px border-0 bg-gray-300 opacity-30 w-60" />
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={iconCheck} alt="check-icon" />
              <span className="text-base sm:text-lg">Security Awareness Training</span>
            </motion.div>
          </div>
          <div className="mt-6 sm:mt-0">
            <ClientCard className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
