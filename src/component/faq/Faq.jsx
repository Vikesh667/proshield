import iconHeading from "../../assets/icon-sub-heading.svg";
import faqImage from "../../assets/faq-image.jpg";
import Accordion from "../../atom/Accordion";
import { faq } from "../../constant/data";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 px-5 py-5 lg:px-25 lg:py-20 flex flex-col lg:flex-row">
      <div className="flex flex-1 w-full h-full flex-col gap-10">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-3 items-center lg:mb-5">
            <motion.div
              className="flex items-center text-indigo-950"
              initial={{ y: 1, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={iconHeading}
                alt="icon"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="ml-2 text-xl tracking-wide uppercase">FAQ</span>
            </motion.div>
          </div>
          <div className=" flex  flex-col  justify-center ">
            <motion.h1
              className="text-3xl lg:text-5xl font-semibold lg:leading-16 font-sans tracking-normal text-[#010535]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Cybersecurity questions
            </motion.h1>

            <motion.h1
              className="text-3xl lg:text-5xl font-semibold font-sans tracking-normal bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              answered clearly
            </motion.h1>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-start relative">
          <img className="w-full h-full rounded-4xl p-2" src={faqImage} />
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-gray-200 z-10 origin-right pointer-events-none rounded-4xl"
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
          />
        </div>
      </div>
      <div className="flex flex-1 w-full h-full">
        <div className="lg:p-10 lg:mt-20">
          <Accordion
            data={faq}
            openHeight="28vh"
            closedHeight="10vh"
            bgOpen="bg-gradient-to-r from-blue-500 to-teal-700"
            bgClosed="bg-white"
            textOpen="text-white"
            textClosed="text-gray-900"
          />
        </div>
      </div>
    </div>
  );
};
export default Faq;
