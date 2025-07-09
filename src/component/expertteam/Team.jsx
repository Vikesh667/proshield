import { useState } from "react";
import ctaImage from "../../assets/cta-box-image.jpg";
import ctaArrowImage from "../../assets/cta-box-arrow.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import iconHeading from "../../assets/icon-sub-heading.svg";
import TeamCard from "../../atom/TeamCard";
import { motion } from "framer-motion";

const Team = ({ setHovered, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen relative overflow-hidden py-10 ">
  
      <div className="bg-[#010535] pt-10 lg:pt-20  relative z-10 w-full h-[100vh] lg:h-[70vh]">
        <div className="text-center text-white">
          <div className="flex justify-center items-center gap-3 mb-2">
            <img src={iconHeading} className="w-6 h-6 invert" />
            <p className="uppercase tracking-wider text-sm font-semibold">Expert Team</p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">Our expert team member</h2>
        </div>

        <div className="mt-5 lg:mt-16 lg:px-10">
          <TeamCard setHovered={setHovered} setContent={setContent} />
        </div>
      </div>

   
      <div className="bg-white h-52 lg:h-64 w-full absolute bottom-0 z-0" />

    <div className="w-full h-full px-5 flex justify-center">
        <div className="w-full h-full z-20  lg:max-w-7xl  mt-[70rem] lg:mt-60 bg-gradient-to-r from-indigo-700 via-blue-400 to-sky-400 flex flex-col lg:flex-row justify-between px-6 lg:px-10 rounded-3xl shadow-xl relative">
     
        <div className="flex flex-col flex-2 py-10 lg:py-16">
          <motion.div
            className="flex justify-start"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl lg:text-5xl text-white font-semibold leading-snug">
              Protect business, cyber security solution today!
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-start lg:items-center mt-8 lg:mt-16">
            <h1 className="text-white text-xl lg:text-2xl flex items-center gap-3">
              <FaPhoneAlt /> Get contact now
            </h1>
            <span className="w-56 h-[2px] lg:w-[2px] lg:h-10 bg-white opacity-10" />
            <h1 className="text-white text-xl lg:text-2xl flex items-center gap-3">
              <MdOutlineAttachEmail /> Sent e-mail
            </h1>
            <div className="absolute right-4 top-1/5  lg:right-2/5 lg:top-28">
              <img className="animate-wiggle w-25 h-25 lg:w-40 lg:h-40" src={ctaArrowImage} />
            </div>
          </div>
        </div>

        <div className="h-full flex-1 w-full flex items-center justify-center py-10 relative">
          <img src={ctaImage} alt="cta" className="w-full h-full rounded-3xl object-cover" />
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-sky-400 z-10 origin-right pointer-events-none rounded-3xl"
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;