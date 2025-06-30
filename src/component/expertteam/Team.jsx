import ourteambg from "../../assets/our-team-bg.png";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { ourteam } from "../../constant/data";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import ctaImage from "../../assets/cta-box-image.jpg";
import ctaArrowImage from "../../assets/cta-box-arrow.svg";
import {FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import TeamCard from "../../atom/TeamCard";
const Team = ({ setHovered, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center mb-20">
     <TeamCard setContent={setContent} setHovered={setHovered}/>
      <div className="max-w-7xl h-84 bg-gradient-to-r bg-indigo-600 via-35% to-blue-400 mt-65 flex  justify-between px-10 rounded-4xl">
        <div className="flex flex-col flex-2 py-15 px-10">
          <div className="flex  justify-start">
            <h1 className="text-5xl text-white font-semibold">
              Protect business, cyber security solution today!
            </h1>
          </div>
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
        <div className="h-full flex-1 w-full flex items-center justify-center py-10">
          <img src={ctaImage} alt="" className="w-full h-full rounded-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Team;
