import { FaCheckCircle } from "react-icons/fa";
import heroImage from "../assets/hero-bg.jpg";
import ActionButton from "../atom/ActionButton";
import { GoArrowRight } from "react-icons/go";
import FolwPlayButton from "../atom/FlowPlayButton";
import MouseHover from "../atom/MouseHover";
import { useEffect, useState } from "react";
import VideoPlay from "../atom/VideoPlay";
import { avatarList } from "../constant/data";
import icon from "../assets/icon-sub-heading.svg"
const HeroSection = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
   const [open,setOpen]=useState(false)
  useEffect(() => {
    const mouseMoveHandle = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMoveHandle);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          style={{ left: `${position.x}px`, top: `${position.y-150}px` }}
          className="w-5 h-5 rounded-full bg-gradient-to-r bg-blue-700 to-blue-400 absolute z-10 top-0 left-0"
        ></div>
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
        <h4 className="text-base uppercase tracking-wider mb-2 flex gap-2 text-white">
        <img src={icon}/>  <span>Welcome Cyber Security</span>
        </h4>
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

          <div className="flex items-center gap-2 " onClick={()=>setOpen(true)}>
            <FolwPlayButton />
            <ActionButton
              text="Play Video"
              variant="custom"
              className="bg-transparent text-white text-lg"
            />
          </div>
          { open && <VideoPlay setOpen={setOpen}/>}
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-col  gap-6 mt-8 text-white">
            <div className="flex items-center gap-2 ">
              <FaCheckCircle className="text-green-400" />
              <span className="text-lg">Access Control Management</span>
            </div>

            <hr className="h-px border-0 bg-gray-300 opacity-30 w-60" />
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-lg">Security Awareness Training</span>
            </div>
          </div>

          <div className="flex items-center mt-8 flex-col">
            <div className="flex -space-x-4">
              {avatarList.map((avatar, index) => (
                <div>
                <img key={index} src={avatar} className="w-16 h-16 rounded-full" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-800 to-blue-400 text-white text-sm flex items-center justify-center border-2 border-white">
              <h1 className="text-xl font-semibold"> 25k</h1>
              </div>
            </div>
            <h2 className="mt-3">Our 20k+ Satisficed Customer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
