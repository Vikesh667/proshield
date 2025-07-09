import { GoArrowRight } from "react-icons/go";
import icon from "../../assets/icon-sub-heading.svg";
import ActionButton from "../../atom/ActionButton";
import { FaPlay } from "react-icons/fa6";
import VideoPlay from "../../atom/VideoPlay";
import { useState } from "react";
import {motion} from "framer-motion"
const Video = ({ setContent, setHovered }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full h-full lg:min-h-screen overflow-hidden">
   
      <div className="absolute inset-0 bg-no-repeat bg-center bg-cover">
        <video loop
      autoPlay
      muted
      playsInline className="w-full h-full object-cover">
        <source src="https://demo.awaikenthemes.com/assets/videos/proshield-video.mp4" type="video/mp4"></source>
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(1, 5, 53, 0.28) 43.57%, rgba(1, 5, 53, 0.8) 100%)",
            zIndex: 1,
          }}
        />
      </div>

     
      <div className="relative z-[2] px-8 py-20 lg:py-36 max-w-6xl lg:ml-20 text-white">
        <motion.div className="flex items-center text-white"
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        >
          <img src={icon} alt="icon" className="w-6 h-6 brightness-0 invert" />
          <span className="ml-2 text-xl">Welcome Cyber Security</span>
        </motion.div>
        <motion.h1 className="text-3xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6 text-start"
         initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        >
          Secure your world,
          <br /> effortlessly today!
        </motion.h1>
        <motion.p className="text-lg text-white/90 max-w-2xl mb-10"
         initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        >
          Protect your digital world with seamless, cutting-edge cybersecurity
          solutions designed to safeguard your data, systems, and peace of mind.
        </motion.p>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 p-4">
         <ActionButton text="Learn More" icon={<GoArrowRight/>}/>
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
              className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-white transition-color duration-300"
            >
              <FaPlay className="text-lg group-hover:text-blue-400" />
            </span>
            <h3>Play video</h3>
          </div>
          {open && <VideoPlay setOpen={setOpen} />}
        </div>
        <div className="w-full flex items-center gap-5">
          {/* <div className="flex flex-col  gap-6 mt-8 text-white">
            <div className="flex items-center gap-2 ">
              <img src={iconCheck} />
              <span className="text-lg">Access Control Management</span>
            </div>
            <hr className="h-px border-0 bg-gray-300 opacity-30 w-60" />
            <div className="flex items-center gap-2">
              <img src={iconCheck} />
              <span className="text-lg">Security Awareness Training</span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};
export default Video;
