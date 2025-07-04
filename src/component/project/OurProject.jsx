import { useState } from "react";
import { motion } from "framer-motion";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { projects } from "../../constant/data";

const OurProject = ({ setContent, setHovered }) => {
  const projectdetails = projects.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-200 py-5 lg:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-3 items-center lg:mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-widest">our project</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mb-20">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold font-serif tracking-tighter text-indigo-950">
            Showcasing our cybersecurity  latest
          </h1>
          <h1 className="text-3xl lg:text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent">
            projects
          </h1>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="flex flex-col  lg:flex-row p-4 gap-[1px] w-full h-full">
        {projectdetails.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onMouseEnter={() => {
              setActiveIndex(index);
              setHovered(true);
              setContent(
                <div className="flex flex-col items-center z-40">
                  <span className="text-sm">View</span>
                </div>
              );
            }}
            onMouseLeave={() => {
              setHovered(false);
              setContent(null);
            }}
            className={`w-full h-auto overflow-hidden relative group 
              ${index === 0 ? "rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl" : ""} 
              ${index === projectdetails.length - 1 ? "rounded-b-2xl  lg:rounded-bl-none lg:rounded-r-3xl" : ""}
            `}
          >
            <motion.img
              src={project}
              alt={`project-${index}`}
              className="w-full h-[450px] object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start gap-4 justify-end w-full h-full absolute p-5 bg-gray-500/40 inset-0"
            >
              <button className="border border-white text-white py-2 px-5 text-lg rounded-lg cursor-pointer">
                Authentication
              </button>
              <h1 className="text-white text-xl tracking-widest font-semibold mb-5">
                IoT Security Enhancement for Smart Devices
              </h1>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className="w-full flex justify-center lg:p-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="w-full px-5 lg:w-1/2 text-center capitalize text-md text-gray-600">
          Cybersecurity Innovations Explore All Our Projects Safeguarding Digital Futures Against Evolving Threats.{" "}
          <span className="relative inline-block bg-gradient-to-r from-indigo-900 to-blue-400 bg-clip-text text-transparent capitalize cursor-pointer text-lg">
            all project
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-indigo-900 to-blue-400"></span>
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default OurProject;
