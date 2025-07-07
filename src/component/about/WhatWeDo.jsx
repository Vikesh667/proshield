import doImage from "../../assets/what-we-do-img-1.jpg";
import doImage2 from "../../assets/what-we-do-img-2.jpg";
import icon from "../../assets/icon-sub-heading.svg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import whatIcon1 from "../../assets/icon-what-we-item-1.svg"
import whatIcon2 from "../../assets/icon-what-we-item-2.svg"
const WhatWedo = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:justify-between py-10 px-7 lg:py-28 lg:px-25 overflow-hidden">
      <div className="w-full lg:w-[35vw] h-[43vh] lg:h-[75vh] relative">
        <div className="w-full rounded-4xl h-full bg-gradient-to-br from-indigo-400 via-25% to-sky-400 "></div>
        <img
          className="w-full h-full rounded-4xl absolute -top-3 lg:-top-4 -left-3 lg:-left-5 "
          src={doImage}
        />
        <div className=" w-28 h-28 lg:w-44 lg:h-44 rounded-full p-5 bg-gradient-to-br from-indigo-400 via-25% to-sky-400 absolute top-15 lg:top-1/4 -right-7 lg:-right-20 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-md lg:text-4xl font-bold text-center">25+</h1>
          <h2 className="text-white text-md lg:text-xl text-center">
            Years of experience
          </h2>
        </div>
        <img
          src={doImage2}
          alt=""
          className="absolute -bottom-12 lg:-bottom-20 -right-5 lg:-right-20 rounded-2xl lg:rounded-4xl w-40 h-28 lg:w-66 lg:h-52"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 h-full items-start  gap-10 lg:px-10 mt-20">
        <div className="flex items-center text-black  lg:mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-lg text-black uppercase font-serif tracking-wider">
          what we do
          </span>
        </div>
        <div className=" -mt-8 lg:-mt-5 ">
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
          Protecting, preventing,
          </h1>
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
           securing your future
          </h1>
        </div>
        <h2 className="font-sans text-md font-se lg:text-lg text-gray-700/60 -mt-8 lg:-mt-5">
        We provide comprehensive cybersecurity services to safeguard your digital assets, prevent potential threats, and ensure a secure environment.
        </h2>
        <div className="w-full flex gap-10 -mt-5 lg:-mt-0">
          <ul className="space-y-3">
            <li className="flex gap-3 items-center opacity-70   font-sans tracking-tight text-md rounded-full">
             <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Proactive Threat Detection and Incident Response
            </li>
            <li className="flex gap-3 items-center   opacity-70 font-sans tracking-tight text-md rounded-full">
               <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Advanced Network Security and Intrusion Prevention
            </li>
            <li className="flex gap-3 items-center  opacity-70 font-sans tracking-tight text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
             Data Encryption and Secure Information Management
            </li>
          </ul>
         
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row gap-5">
             <div className="flex gap-5 items-center"><img src={whatIcon1}/><h1 className="text-lg tracking-tight lg:tracking-normal lg:text-xl text-indigo-950 capitalize font-semibold">network and firewall security</h1></div>
             <div className="flex gap-5 items-center"><img src={whatIcon2}/><h1 className="text-lg tracking-tight lg:tracking-normal lg:text-xl text-indigo-950 capitalize font-semibold">data protection and encryption</h1></div>
        </div>
      </div>
    </div>
  );
};
export default WhatWedo;
