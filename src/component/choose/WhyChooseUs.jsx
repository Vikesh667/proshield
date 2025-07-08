import { motion } from "framer-motion";
import choosebg from "../../assets/why-choose-bg.png";
import chooseImage from "../../assets/why-choose-image.jpg";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { chooseUs } from "../../constant/data";
import ChooseCounter from "../../atom/ChooseCounter";
import ChooseUsCard from "../../atom/ChooseUsCard";

const WhyChooseUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-[#010535] px-5 py-10 lg:p-10 md:p-20 flex flex-col lg:gap-10"
      style={{ backgroundImage: `url(${choosebg})` }}
    >
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row lg:gap-10 items-center">
        {/* Left: Image Reveal */}
        <div className="w-full lg:w-1/2 overflow-hidden origin-left">
          <div className="w-full relative">
            < img
              src={chooseImage}
              alt="Why Choose Us"
              className="rounded-4xl w-full h-full object-cover origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              whileinview={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ display: "block" }}
            />
             <motion.div
              className="absolute top-0 right-0 w-full h-full bg-[#010535] z-10 origin-right pointer-events-none rounded-4xl"
              initial={{ scaleX: 1, opacity: 1 }}
              whileInView={{ scaleX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} // ✅ only animate the first time it comes
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex gap-3 items-center text-white"
          >
            <img
              src={iconHeading}
              alt="icon"
              className="w-6 h-6 brightness-0 invert"
            />
            <span className="text-xl uppercase tracking-widest">
              why choose us
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold font-sans tracking-wide text-white"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Reliable solutions for cybersecurity excellence
          </motion.h1>

          <motion.div
            className="flex  flex-col gap-10 lg:gap-15 mt-10 w-full"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {chooseUs.map((item, index) => (
              <ChooseUsCard key={index} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      <hr className="h-[0.3px] border-0 bg-gray-300 opacity-30 w-full z-10 mt-10" />
      <ChooseCounter />
    </div>
  );
};

export default WhyChooseUs;
