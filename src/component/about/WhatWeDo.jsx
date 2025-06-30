import doImage from "../../assets/what-we-do-img-1.jpg";
import doImage2 from "../../assets/what-we-do-img-2.jpg";
import icon from "../../assets/icon-sub-heading.svg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import whatIcon1 from "../../assets/icon-what-we-item-1.svg"
import whatIcon2 from "../../assets/icon-what-we-item-2.svg"
const WhatWedo = () => {
  return (
    <div className="w-full min-h-screen flex justify-between py-40 px-30 overflow-hidden">
      <div className="w-[35vw] h-[75vh] relative">
        <div className="w-full rounded-4xl h-full bg-gradient-to-br from-indigo-400 via-25% to-sky-400 "></div>
        <img
          className="w-full h-full rounded-4xl absolute -top-4 -left-5 "
          src={doImage}
        />
        <div className="w-44 h-44 rounded-full p-5 bg-gradient-to-br from-indigo-400 via-25% to-sky-400 absolute top-1/4 -right-20 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-4xl font-bold text-center">25+</h1>
          <h2 className="text-white text-xl text-center">
            Years of experience
          </h2>
        </div>
        <img
          src={doImage2}
          alt=""
          className="absolute -bottom-20 -right-20 rounded-4xl"
        />
      </div>
      <div className="flex flex-col w-1/2 h-full items-start  gap-10 px-10">
        <div className="flex items-center text-black  mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-lg text-black uppercase font-serif tracking-wider">
          what we do
          </span>
        </div>
        <div className="-mt-5 ">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
          Protecting, preventing,
          </h1>
          <h1 className="text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
           securing your future
          </h1>
        </div>
        <h2 className="font-serif text-lg text-gray-700/60 -mt-5">
          We provide reliable, cutting-edge cybersecurity solutions to protect
          your digital assets, ensuring safety and peace of mind.
        </h2>
        <div className="w-full flex gap-10">
          <ul className="space-y-3">
            <li className="flex gap-3 items-center opacity-70   font-sans text-md rounded-full">
             <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Proactive Threat Detection and Incident Response
            </li>
            <li className="flex gap-3 items-center   opacity-70 font-sans text-md rounded-full">
               <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Advanced Network Security and Intrusion Prevention
            </li>
            <li className="flex gap-3 items-center  opacity-70 font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Data Encryption and Secure Information Management
            </li>
          </ul>
         
        </div>
        <div className="w-full h-full flex  gap-5">
             <div className="flex gap-5 items-center"><img src={whatIcon1}/><h1 className="text-xl text-indigo-950 capitalize font-semibold">network and firewall security</h1></div>
             <div className="flex gap-5 items-center"><img src={whatIcon2}/><h1 className="text-xl text-indigo-950 capitalize font-semibold">data protection and encryption</h1></div>
        </div>
      </div>
    </div>
  );
};
export default WhatWedo;
