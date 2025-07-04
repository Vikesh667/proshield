import { aboutAvatar } from "../../constant/data";
import securitySpinImage from "../../assets/get-free-security-circle.svg";
import icon from "../../assets/icon-sub-heading.svg";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from "../../atom/Button";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SvgGradients from "../../atom/SvgGraduents";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col lg:flex-row  justify-around gap-10 py-12 lg:px-25">
      <SvgGradients />
      <div className="flex gap-4 lg:gap-8 h-full w-full items-center justify-center mt-10 relative px-5 lg:px-0">
        <div className="flex lg:items-end h-full w-full mt-15 lg:mt-25 relative ">
          <img
            className="rounded-2xl lg:rounded-4xl  h-[40vh] w-full lg:h-[70vh]"
            src={aboutAvatar[1]}
          />
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:gap-7 w-full">
          <div className="relative">
            {" "}
            <img
              className="rounded-2xl lg:rounded-4xl w-full h-[23vh] lg:h-[40vh]"
              src={aboutAvatar[2]}
            />
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
              initial={{ scaleX: 1, opacity: 1 }}
              whileInView={{ scaleX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="relative">
            <img
              className="rounded-2xl lg:rounded-4xl w-full h-[23vh] lg:h-[40vh]"
              src={aboutAvatar[3]}
            />
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
              initial={{ scaleX: 1, opacity: 1 }}
              whileInView={{ scaleX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div>
          <img
            src={securitySpinImage}
            className="w-30 h-30 lg:w-44 lg:h-44 absolute left-1/3 top-1/3 lg:ml-0 mt-5 my-spinning-element transation duration-1500 z-30"
          />
        </div>
      </div>
      <div className="flex gap-7 lg:gap-10 h-full w-full items-start flex-col px-5 lg:px-0 ">
        <div className="flex items-center text-black mt-3 lg:mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-md lg:text-lg text-black uppercase font-serif tracking-wide lg:tracking-wider">
            About Us
          </span>
        </div>
        <div className="-mt-5">
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Your trusted partner in our{" "}
          </h1>
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            cyber security solutions
          </h1>
        </div>
        <h2 className="font-serif text-md lg:text-lg text-gray-700/60 -mt-5">
          We provide reliable, cutting-edge cybersecurity solutions to protect
          your digital assets, ensuring safety and peace of mind.
        </h2>
        <div className="flex items-center w-full ">
          {/* Hexagonal image container (only on lg) */}
          <div className="w-32 sm:w-1/2 lg:w-52 h-36 bg-blue-500 rounded-l-2xl lg:rounded-none overflow-hidden lg:hexagonal">
            <img
              src={aboutAvatar[0]}
              alt="Hex Avatar"
              className="w-full h-full object-cover rounded-l-2xl lg:rounded-none"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 h-36 bg-gray-100 lg:-ml-30">
            <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-400 text-white py-4 px-3 lg:p-4 lg:px-5 flex flex-col justify-center items-start rounded-r-2xl lg:rounded-r-full lg:hex-left">
              <h2 className="text-md lg:text-xl font-bold lg:ml-35">
                24/7 Security Assistance
              </h2>
              <p className="text-sm lg:text-lg pr-0.5 lg:tracking-tighter font-sans tracking-tighter px-1 mt-1 lg:ml-35">
                Real-time support for all cybersecurity concerns, including
                breach response, threat detection, and guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start gap-5 lg:gap-10">
          <ul className="space-y-3">
            <li className="flex gap-3 items-center  font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Threat Detection and Monitoring
            </li>
            <li className="flex gap-3 items-center  font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Access Control Management
            </li>
            <li className="flex gap-3 items-center font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Security Awareness Training
            </li>
          </ul>
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-400 flex items-center justify-center">
                <LiaPhoneVolumeSolid className="text-3xl text-white" />
              </div>
              <h2>+91123456789</h2>
            </div>
            <Button text="More About" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
