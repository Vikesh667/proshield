import { useState } from "react";
import ctaImage from "../../assets/cta-box-image.jpg";
import ctaArrowImage from "../../assets/cta-box-arrow.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import TeamCard from "../../atom/TeamCard";
import { motion } from "framer-motion";
const Team = ({ setHovered, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col gap-20 justify-between items-center lg:mb-20">
     <div className="mt-10">
       <TeamCard setContent={setContent} setHovered={setHovered} />
     </div>
      <div className="max-w-7xl h-84 bg-gradient-to-r from-indigo-700 via-blue-400 to-sky-400 mt-30 flex  justify-between px-10 rounded-4xl">
        <div className="flex flex-col flex-2 py-15 px-10">
          <motion.div
            className="flex  justify-start"
            initial={{ y: 1, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl text-white font-semibold">
              Protect business, cyber security solution today!
            </h1>
          </motion.div>
          <div className="flex gap-5 items-center mt-20 ">
            <h1 className="text-white text-3xl flex items-center gap-3">
              <FaPhoneAlt /> Get contact now
            </h1>
            <span className="w-[2px] h-10 bg-gray-500 opacity-50"></span>
            <h1 className="text-white text-3xl flex items-center gap-3">
              <MdOutlineAttachEmail /> Sent e-mail
            </h1>
            <div className="absolute right-2/5 -mt-30">
              <img className="animate-wiggle" src={ctaArrowImage} />
            </div>
          </div>
        </div>
        <div className="h-full flex-1 w-full flex items-center justify-center py-10 relative">
          <img src={ctaImage} alt="" className="w-full h-full rounded-4xl" />
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-sky-400 z-10 origin-right pointer-events-none rounded-4xl"
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // ✅ only animate the first time it comes
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
