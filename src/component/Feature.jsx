import { useRef } from "react";
import featureImage1 from "../assets/feature-image-1.jpg";
import featureImage2 from "../assets/feature-image-2.jpg";
import iconHeading from "../assets/icon-sub-heading.svg";
import featureIcon from "../assets/icon-ferature-1.svg";
import featureIcon2 from "../assets/icon-ferature-2.svg";
import featureIcon3 from "../assets/icon-ferature-3.svg";
import Card from "../atom/Card";
import { motion } from "framer-motion";
import ScrollCounter from "../atom/ScrollCounter";

const Feature = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:gap-10 px-5 lg:p-20">
      <div className="flex flex-col gap-10 overflow-hidden flex-1">
        <div className="w-full h-full relative group overflow-hidden rounded-4xl">
          <img
            src={featureImage1}
            className="w-full h-full rounded-4xl object-cover"
            alt="Feature 1"
          />
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div
            className="absolute w-[200%] h-0 left-1/2 top-1/2 bg-white/30 rotate-[-45deg] z-10 
            transform -translate-x-1/2 -translate-y-1/2 
            group-hover:h-[250%] group-hover:bg-transparent 
            transition-all duration-[600ms] ease-linear pointer-events-none"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w h-full relative group overflow-hidden rounded-4xl">
            <img src={featureImage2} className="rounded-4xl" alt="Feature 2" />
            <div
              className="absolute w-[200%] h-0 left-1/2 top-1/2 bg-white/30 rotate-[-45deg] z-10 
              transform -translate-x-1/2 -translate-y-1/2 
              group-hover:h-[250%] group-hover:bg-transparent 
              transition-all duration-[600ms] ease-linear pointer-events-none"
            />
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
              initial={{ scaleX: 1, opacity: 1 }}
              whileInView={{ scaleX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="w-full lg:w-52 h-52 lg:h-66 bg-[linear-gradient(to_right,_#4338ca_5%,_#60a5fa_75%)] shadow-lg rounded-4xl flex flex-col items-center justify-around p-5 overflow-hidden relative group">
            <ScrollCounter from={0} to={25} duration={1.5} />
            <h2 className="text-md lg:text-lg text-white font-sans text-center z-10">
              Years of experience in cyber security
            </h2>
            <hr className="h-px border-0 bg-gray-300 opacity-30 w-40 z-10" />
            <Card className={"w-8 h-8 z-20"} />
            <div className="w-full h-full bg-[linear-gradient(to_right,_#60a5fa_75%,_#4338ca_5%)] blur-xl absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-15">
        <div className="flex flex-col items-start w-full">
          <motion.div
            className="flex gap-3 items-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={iconHeading} className="text-white" alt="icon" />
            <h1 className="text-sm uppercase font-semibold tracking-wider">
              our feature
            </h1>
          </motion.div>
          <div className="flex flex-col gap-2 justify-center mb-15">
            <motion.h1
              className=" text-2xl tracking-wider lg:text-5xl font-bold font-sans lg:tracking-wide text-indigo-950"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Comprehensive protection
            </motion.h1>
            <motion.h1
              className="text-2xl lg:text-5xl text-start font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              simplified security
            </motion.h1>
          </div>
        </div>

        {[featureIcon, featureIcon2, featureIcon3].map((icon, i) => (
          <motion.div
            key={i}
            className={`flex gap-5 ${i > 0 ? "mt-8" : "-mt-4"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <img
              src={icon}
              className=" p-3 lg:p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-12 h-12 lg:w-16 lg:h-16"
              alt="feature-icon"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                {i === 0
                  ? "Real-time threat detection"
                  : i === 1
                  ? "malware and virus prevention"
                  : "24/7 monitoring and support"}
              </h2>
              <p className="text-gray-500 text-md lg:text-lg tracking-tight">
                {i === 0
                  ? "Real-Time Threat Detection provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure."
                  : i === 1
                  ? "malware and virus prevention provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure."
                  : "24/7 monitoring and support provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;