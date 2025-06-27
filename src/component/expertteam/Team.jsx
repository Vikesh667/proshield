import ourteambg from "../../assets/our-team-bg.png";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { ourteam } from "../../constant/data";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import ctaImage from "../../assets/cta-box-image.jpg";
import ctaArrowImage from "../../assets/cta-box-arrow.svg";
import {FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const Team = ({ setHovered, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center mb-20">
      <div className="w-full h-[70vh] bg-[#010535] bg-cover  relative">
        <img className="z-20" src={ourteambg} alt="" />
        <div className="flex flex-col items-center absolute top-20 left-1/4 z-20 ">
          <div className="flex gap-3 items-center mb-5 text-white">
            <img src={iconHeading} className="text-white invert" />
            <h1 className="text-sm uppercase font-semibold tracking-widest text-white">
              Expert team
            </h1>
          </div>
          <div className=" flex  flex-col gap-2 justify-center mb-20">
            <h1 className="text-5xl font-semibold font-serif tracking-tighter text-white">
              Our expert team member
            </h1>
          </div>
        </div>
        <div className="w-full h-96 flex gap-7 px-25  absolute -bottom-40">
          {ourteam.map((team) => (
            <div
              className="w-full h-full rounded-3xl overflow-hidden relative group"
              onMouseEnter={() => {
                setHovered(true);
                setContent(
                  <div className="flex flex-col items-center ">
                    <span className="text-sm">View</span>
                  </div>
                );
              }}
              onMouseLeave={() => {
                setHovered(false);
                setContent(null);
              }}
            >
              <img
                className="w-full h-full group-hover:scale-110 transition duration-500"
                src={team.image}
              />
              <div className="absolute bottom-10 w-full  flex flex-col items-center">
                <h1 className="text-white text-xl font-semibold">
                  {team.name}
                </h1>
                <h2 className="text-white text-md opacity-75">{team.expert}</h2>
              </div>
              <div className="w-full h-full absolute bg-white/30 inset-0  scale-0 group-hover:scale-110 transition duration-500">
                <div className="flex  space-x-5 items-center justify-center h-full cursor-pointer">
                  <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                    <FaXTwitter className="text-lg text-[#FFFFFF] " />
                  </span>
                  <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                    {" "}
                    <FaFacebookF className="text-lg text-[#FFFFFF] " />
                  </span>
                  <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                    {" "}
                    <FaInstagram className="text-lg text-[#FFFFFF] " />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
