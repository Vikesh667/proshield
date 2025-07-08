import { services } from "../../constant/data";
import iconHeading from "../../assets/icon-sub-heading.svg";
import {  FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion"
const OurServices = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden py-5 px-5 lg:p-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <motion.div className="flex gap-3 items-center  lg:mb-5"
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        >
          <img src={iconHeading} className="text-white"/>
          <h1 className="text-sm uppercase font-semibold tracking-wider">
            our services
          </h1>
        </motion.div>
        <div className=" flex  flex-col lg:gap-2 justify-center mb-5 lg:mb-20">
          <motion.h1 className=" text-2xl lg:text-5xl font-semibold font-serif tracking-tighter text-indigo-950"
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1}}
          >
            Comprehensive cybersecurity
          </motion.h1>
          <motion.h1 className="text-2xl lg:text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent "
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1}}
          >
            services for protection
          </motion.h1>
        </div> 
      </div>
      <div className="flex w-full flex-wrap gap-10 items-center justify-between cursor-pointer">
        {services.map((service,index) => (
          <motion.div 
          key={index}
          className="w-96 h-60 lg:h-84 bg-white rounded-2xl flex flex-col justify-between py-5 px-5 lg:p-10 group relative overflow-hidden shadow-sm"
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
          >
            <img src={service.icon} className="size-14 lg:size-20 z-10"  />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 w-full">
                <h1 className="text-xl text-indigo-950 font-semibold z-10 group-hover:text-white">
                  {service.text}
                </h1>
                <span className="rounded-full p-3 bg-gradient-to-r z-10 bg-indigo-800 to-blue-400   group-hover:bg-white  transition-all duration-300">
                  <FaArrowRight className="text-white font-bold  group-hover:text-blue-800 text-xl z-10 relative transition-all duration-300" />
                </span>
              </div>
              <p className="text-md font-sans text-gray-500/90 z-10 group-hover:text-white">{service.para}</p>
            </div>
            <div className="w-full h-full bg-gradient-to-r bg-indigo-600 to-blue-400 rounded-2xl absolute inset-0  left-0 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default OurServices;
