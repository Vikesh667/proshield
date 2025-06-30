import { services } from "../../constant/data";
import iconHeading from "../../assets/icon-sub-heading.svg";
import {  FaArrowRight } from "react-icons/fa";
const OurServices = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden p-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center mb-5">
          <img src={iconHeading} className="text-white"/>
          <h1 className="text-sm uppercase font-semibold tracking-wider">
            our services
          </h1>
        </div>
        <div className=" flex  flex-col gap-2 justify-center mb-20">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Comprehensive cybersecurity
          </h1>
          <h1 className="text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            services for protection
          </h1>
        </div> 
      </div>
      <div className="flex w-full flex-wrap gap-10 items-center justify-between cursor-">
        {services.map((service) => (
          <div className="w-96 h-84 bg-white rounded-2xl flex flex-col justify-between p-10 group relative overflow-hidden shadow-sm">
            <img src={service.icon} className=" size-20 z-10"  />
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurServices;
