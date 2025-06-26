import { FaPlay } from "react-icons/fa";
import iconHeading from "../../assets/icon-sub-heading.svg";
import testMonialImage from "../../assets/testimonial-bg.jpg";
import VideoPlay from "../../atom/VideoPlay";
import { useState } from "react";
import TestimonilaSlider from "../../atom/TestimonilaSlider";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from "../../atom/Button";
const Testmonial = ({ setContent, setHovered }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-screen py-30 px-25 relative">
      <div className="flex flex-col items-start w-full">
        <div className="flex gap-3 items-center mb-5">
          <div className="flex items-center text-indigo-950">
            <img
              src={iconHeading}
              alt="icon"
              className="w-6 h-6 brightness-0 "
            />
            <span className="ml-2 text-xl tracking-wide uppercase">
              testimonials
            </span>
          </div>
        </div>
        <div className=" flex  flex-col  justify-center ">
          <h1 className="text-5xl font-semibold leading-15  font-sans tracking-normal text-[#010535]">
            Our clients are saying
          </h1>
        </div>
      </div>
      <div className="overflow-hidden  w-full h-[75vh]  relative rounded-[4rem] mt-5">
        {open && <VideoPlay setOpen={setOpen} />}
        <img
          className="w-full h-full object-cover  rounded-[4rem]"
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
      <div className="absolute top-1/2 left-1/4 z-30">
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
          className="relative flex size-18"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFFFFF]  transition duration-500"></span>
          <span className="relative flex size-18 rounded-full bg-sky-500 items-center justify-center z-20">
            <FaPlay className="text-white text-2xl ml-1" />
          </span>
        </span>
        <h1 className="text-2xl text-white -ml-6 mt-5"> Watch video</h1>
      </div>
      <div className="absolute top-30 right-25 bg-gradient-to-r from-indigo-600 via-20% to-blue-400 rounded-3xl">
        <TestimonilaSlider setContent={setContent} setHovered={setHovered} />
      </div>
        <div className="flex items-center gap-5  absolute z-10 bottom-45 -right-25">
          <div className="w-12 h-12  rounded-full bg-gradient-to-r from-blue-800 to-blue-400 flex items-center justify-center">
                <LiaPhoneVolumeSolid className="text-3xl text-white" />
              </div>
              <h1 className="text-white text-lg  w-1/3 tracking-tighter">If you any questions or need help contact with team. <span className="underline"> +91-123 456 789</span></h1>
              <Button text="Contact Us"/>
        </div>
    </div>
  );
};
export default Testmonial;
