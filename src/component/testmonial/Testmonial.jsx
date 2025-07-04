import { FaPlay } from "react-icons/fa";
import iconHeading from "../../assets/icon-sub-heading.svg";
import testMonialImage from "../../assets/testimonial-bg.jpg";
import VideoPlay from "../../atom/VideoPlay";
import { useState } from "react";
import TestimonilaSlider from "../../atom/TestimonilaSlider";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from "../../atom/Button";
import { motion } from "framer-motion";
const Testmonial = ({ setContent, setHovered }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-screen lg:py-28 py-10 px-5   lg:px-25 relative">
      <div className="flex flex-col items-start w-full">
        <div className="flex gap-3 items-center lg:mb-5">
          <motion.div
            className="flex items-center text-indigo-950"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={iconHeading}
              alt="icon"
              className="w-6 h-6 brightness-0 "
            />
            <span className="ml-2 text-xl tracking-wide uppercase">
              testimonials
            </span>
          </motion.div>
        </div>
        <motion.div
          className=" flex  flex-col  justify-center "
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl lg:text-5xl font-semibold lg:leading-15  font-sans tracking-normal text-[#010535]">
            Our clients are saying
          </h1>
        </motion.div>
      </div>
      <div className="overflow-hidden  w-full  h-[120vh] lg:h-[75vh]  relative lg:rounded-2xl mt-5">
        {open && <VideoPlay setOpen={setOpen} />}
        <img
          className="w-full h-full object-cover  lg:rounded-2xl"
          src={testMonialImage}
          alt="testimonial"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(1, 5, 55, 0.28) 43.80%, rgba(1, 5, 55, 0.8) 100%)",
            zIndex: 1,
          }}
        />
      </div>
      <div
        className="absolute top-36 left-1/2 transform -translate-x-1/2 
                lg:left-1/4 lg:translate-x-0 lg:top-1/2 z-30"
      >
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
          className="relative flex size-16 lg:size-18"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFFFFF]  transition duration-500"></span>
          <span className="relative flex size-16 lg:size-18 rounded-full bg-sky-500 items-center justify-center z-20">
            <FaPlay className="text-white text-2xl ml-1" />
          </span>
        </span>
        <h1 className="text-2xl text-white -ml-6 mt-5"> Watch video</h1>
      </div>
      <div
        className="absolute  inset-0 px-10 top-60 mt-10 
                lg:inset-auto lg:top-32 lg:right-[4%] 
               "
      >
        <TestimonilaSlider setContent={setContent} setHovered={setHovered} />
      </div>

      <div className="flex px-3 flex-col lg:flex-row items-start lg:items-center gap-5 absolute z-10 bottom-16 lg:bottom-35 lg:right-24">
        <div className="flex items-center gap-3 lg:max-w-md">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-400 flex items-center justify-center shrink-0">
            <LiaPhoneVolumeSolid className="text-2xl lg:text-3xl text-white" />
          </div>
          <h1 className="text-white text-sm lg:text-base tracking-tight leading-snug max-w-xs lg:max-w-sm">
            If you have any questions or need help
            <br className="hidden lg:block" />, contact our team.{" "}
            <span className="underline">+91-123 456 789</span>
          </h1>
        </div>
        <div className="w-auto shrink-0">
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
};
export default Testmonial;
