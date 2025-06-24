import heroImage from "../assets/hero-bg.jpg";
import ActionButton from "../atom/ActionButton";
import { GoArrowRight } from "react-icons/go";
import FolwPlayButton from "../atom/FlowPlayButton";
import { useState } from "react";
import VideoPlay from "../atom/VideoPlay";
import icon from "../assets/icon-sub-heading.svg";
import iconCheck from "../assets/icon-check-white.svg";
import ClientCard from "../atom/ClientCard";
const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(1, 5, 53, 0.28) 43.57%, rgba(1, 5, 53, 0.8) 100%)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-[2] px-8 py-36 max-w-6xl ml-20 text-white">
        <div className="flex items-center text-white">
          <img src={icon} alt="icon" className="w-6 h-6 brightness-0 invert" />
          <span className="ml-2 text-xl">Welcome Cyber Security</span>
        </div>
        <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6">
          Secure your world,
          <br /> effortlessly today!
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mb-10">
          Protect your digital world with seamless, cutting-edge cybersecurity
          solutions designed to safeguard your data, systems, and peace of mind.
        </p>
        <div className="flex items-center gap-10 p-4">
          <div className="relative max-w-60 flex items-center gap-3 justify-center rounded-3xl py-1 px-4 shadow group overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-400 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </div>
            <ActionButton
              text="Learn More"
              variant="custom"
              className="text-blue-500 group-hover:text-white transition-all duration-300 rounded-full text-ms font-semibold px-3 py-1 z-10 relative"
            />

            {/* Icon */}
            <span className="bg-blue-800 rounded-full p-1 group-hover:ml-1 group-hover:bg-white z-10 transition-all duration-300">
              {" "}
              <GoArrowRight className="text-white  group-hover:text-blue-800 text-sm z-10 relative transition-all duration-300" />
            </span>
          </div>

          <div
            className="flex items-center gap-2 "
            onClick={() => setOpen(true)}
          >
            <FolwPlayButton />
            <ActionButton
              text="Play Video"
              variant="custom"
              className="bg-transparent text-white text-lg"
            />
          </div>
          {open && <VideoPlay setOpen={setOpen} />}
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-col  gap-6 mt-8 text-white">
            <div className="flex items-center gap-2 ">
              <img src={iconCheck} />
              <span className="text-lg">Access Control Management</span>
            </div>

            <hr className="h-px border-0 bg-gray-300 opacity-30 w-60" />
            <div className="flex items-center gap-2">
              <img src={iconCheck} />
              <span className="text-lg">Security Awareness Training</span>
            </div>
          </div>
           <ClientCard className={"w-16 h-16"}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
