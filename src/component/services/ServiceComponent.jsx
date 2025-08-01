import { useEffect, useRef, useState } from "react";
import CommonCard from "../../atom/CommonCard";
import {
  serviceAccourdion,
  serviceCategory,
  serviceImage,
} from "../../constant/data";
import featureIcon from "../../assets/icon-ferature-1.svg";
import featureIcon2 from "../../assets/icon-ferature-2.svg";
import featureIcon3 from "../../assets/icon-ferature-3.svg";
import serviceInteryImage from "../../assets/service-entry-image.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SvgGradients from "../../atom/SvgGraduents";
import Accordion from "../../atom/Accordion";
import Contact from "../../atom/Contact";
import Slider from "../../atom/Slider";
const ServiceComponent = () => {
  
  return (
    <div className="w-full min-h-screen bg-white py-20 px-6 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row gap-10">
       
        <div className="lg:w-[30%] w-full flex-shrink-0 flex flex-col gap-10 lg:sticky top-20 self-start h-fit">
         
          <div className="bg-gray-100 px-5 py-5 rounded-2xl flex flex-col gap-5">
            <h1 className="text-lg font-semibold text-black">
              Services Category
            </h1>
            {serviceCategory.map((item, i) => (
              <CommonCard key={i} item={item} />
            ))}
          </div>

         <Contact/>
        </div>


        <div className="flex flex-col gap-5 w-full lg:w-[70%] ">
      
           <Slider
           serviceImage={serviceImage}
           />

        
          <div className="mt-10 flex flex-col gap-7 px-1">
            <p className="text-md text-gray-700 opacity-90 leading-7">
              Our Endpoint Security Solutions safeguard all devices connected to
              your network, including laptops, smartphones, tablets, and
              servers. By deploying advanced threat detection, real-time
              monitoring, and proactive defense mechanisms, we ensure your
              endpoints remain secure against malware, ransomware, phishing, and
              other cyber threats.
            </p>
            <p className="text-md text-gray-700 opacity-90 leading-7">
              We secure laptops, smartphones, servers, and IoT devices from
              malware, ransomware, and unauthorized access. Designed for
              scalability and ease of integration, our solutions provide
              seamless protection, enabling your business to operate safely in
              today's digital landscape.
            </p>
          </div>

          
          <div className="lg:mt-14 px-1">
            <h1 className="text-2xl lg:text-5xl text-indigo-950 font-bold mb-5">
              Why choose endpoint security
            </h1>
            <p className="text-md text-gray-700 opacity-90 leading-7">
              Endpoint Security Solutions are essential for protecting your
              business from ever-evolving cyber threats. By securing every
              device connected to your network, we provide a robust defense
              against malware, ransomware, and unauthorized access.
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10  place-items-center mt-5 py-5 ">
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon}
                  className="p-2 lg:p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-12 h-12 lg:w-16 lg:h-16 "
                />

                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                    comprehensive protection for all connected devices
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon2}
                  className="p-2 lg:p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-12 h-12 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-md lg:text-xl capitalize tracking-tight text-indigo-950 font-semibold font-serif">
                    24/7 support & continuous security updates
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon3}
                  className="p-2 lg:p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-12 h-12 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                    seamless integration existing it infrastructure
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon3}
                  className="p-2 lg:p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-12 h-12 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                    seamless integration existing it infrastructure
                  </h2>
                </div>
              </div>
            </div>
            <h1 className="text-md text-gray-700 opacity-90 leading-7 px-">
              It provides comprehensive protection against malware, ransomware,
              and other threats, with real-time monitoring and proactive defense
              to safeguard all your connected devices and ensure business
              continuity.
            </h1>
            <h1 className="text-2xl tracking-wide lg:text-5xl text-indigo-950 font-bold mb-5 mt-5">
              Feature of endpoint security
            </h1>
            <p className="text-md text-gray-700 opacity-90 leading-7">
              Endpoint Security Solutions are essential for protecting your
              business from ever-evolving cyber threats. By securing every
              device connected to your network, we provide a robust defense
              against malware, ransomware, and unauthorized access.
            </p>
            <div className="w-full flex flex-col lg:flex-row mt-5 py-5 ">
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold  tracking-tighter font-serif">
                    advanced threat detection
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex items-center  gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                    real-time monitoring
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex items-center  gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif">
                    user-friendly interface
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-7">
              <img src={serviceInteryImage} alt="" className="rounded-4xl" />
              <div className="flex flex-col gap-5">
                <p className="text-md text-gray-600 opacity-90">
                  Provides advanced threat detection, monitoring & proactive
                  defense to secure all devices & prevent malware and ransomware
                  attacks.
                </p>
                <div>
                  <SvgGradients />
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-center capitalize  font-sans text-lg text-gray-600 opacity-90  rounded-full">
                      <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                      comprehensive device coverage
                    </li>
                    <li className="flex gap-3 items-center capitalize  font-sans text-lg text-gray-600 opacity-90  rounded-full">
                      <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                      automated threat response
                    </li>
                    <li className="flex gap-3 items-center capitalize font-sans text-lg text-gray-600 opacity-90 rounded-full">
                      <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                      regular security updates
                    </li>
                    <li className="flex gap-3 items-center capitalize font-sans text-lg text-gray-600 opacity-90 rounded-full">
                      <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                      scalable and flexible
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-10 gap-5">
              <h1 className="text-3xl lg:text-5xl text-indigo-950 font-semibold">
                Frequently<span className="bg-gradient-to-r bg-indigo-600 via-25% to-blue-400 bg-clip-text text-transparent"> asked questions</span>
              </h1>
              <Accordion
                data={serviceAccourdion}
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
      </div>
    </div>
  );
};

export default ServiceComponent;
