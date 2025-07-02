import { useEffect, useRef, useState } from "react";
import CommonCard from "../../atom/CommonCard";
import {
  serviceAccourdion,
  serviceCategory,
  serviceImage,
} from "../../constant/data";
import iconHeading from "../../assets/icon-sub-heading.svg";
import iconPhone from "../../assets/icon-phone.svg";
import featureIcon from "../../assets/icon-ferature-1.svg";
import featureIcon2 from "../../assets/icon-ferature-2.svg";
import featureIcon3 from "../../assets/icon-ferature-3.svg";
import serviceInteryImage from "../../assets/service-entry-image.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SvgGradients from "../../atom/SvgGraduents";
import Accordion from "../../atom/Accordion";
const ServiceComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalSlides = serviceImage.length;
  const extendedSlides = [...serviceImage, serviceImage[0]];
  const sliderRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex]);

  const handleDotClick = (i) => {
    setTransitionEnabled(true);
    setCurrentIndex(i);
  };

  return (
    <div className="w-full min-h-screen bg-white py-20 px-6 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar */}
        <div className="lg:w-[30%] w-full flex-shrink-0 flex flex-col gap-10 sticky top-20 self-start h-fit">
          {/* Service Categories */}
          <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-5">
            <h1 className="text-lg font-semibold text-black">
              Services Category
            </h1>
            {serviceCategory.map((item, i) => (
              <CommonCard key={i} item={item} />
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-5% bg-indigo-500 via-60% to-sky-300 p-10 rounded-2xl flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <img className="w-9 h-9" src={iconHeading} alt="heading" />
              </span>
              <h1 className="text-3xl font-semibold text-white">Proshield.</h1>
            </div>
            <p className="text-white text-md tracking-wide opacity-75 pr-5">
              We are a leading cybersecurity firm dedicated to protecting
              businesses from digital threats.
            </p>
            <hr className="border-white/20" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative flex w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 items-center justify-center z-10">
                  <img className="w-6 h-6" src={iconPhone} alt="phone" />
                </span>
              </div>
              <div>
                <h1 className="text-white text-xl">+(0) 123 - 456 - 789</h1>
                <p className="text-white opacity-75 text-sm">
                  Get free consultancy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[70%] ">
          {/* Image Slider */}
          <div className="relative w-full h-[550px] overflow-hidden rounded-4xl">
            <div
              ref={sliderRef}
              className={`flex h-full ${
                transitionEnabled
                  ? "transition-transform duration-1000 ease-in-out"
                  : ""
              }`}
              style={{
                width: `${extendedSlides.length * 100}%`,
                transform: `translateX(-${
                  (100 / extendedSlides.length) * currentIndex
                }%)`,
              }}
            >
              {extendedSlides.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${i}`}
                  className="h-full object-cover"
                  style={{
                    width: `${100 / extendedSlides.length}%`,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {serviceImage.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentIndex % totalSlides === i
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex % totalSlides === i
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Description Section */}
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

          {/* Heading Section */}
          <div className="mt-14 px-1">
            <h1 className="text-5xl text-indigo-950 font-bold mb-5">
              Why choose endpoint security
            </h1>
            <p className="text-md text-gray-700 opacity-90 leading-7">
              Endpoint Security Solutions are essential for protecting your
              business from ever-evolving cyber threats. By securing every
              device connected to your network, we provide a robust defense
              against malware, ransomware, and unauthorized access.
            </p>
            <div className="w-full grid grid-cols-2 gap-10  place-items-center mt-5 py-5 ">
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon}
                  className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                />

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
                    comprehensive protection for all connected devices
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon2}
                  className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
                    24/7 support & continuous security updates
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon3}
                  className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
                    seamless integration existing it infrastructure
                  </h2>
                </div>
              </div>
              <div className="flex gap-5  bg-gray-100 rounded-2xl p-4">
                <img
                  src={featureIcon3}
                  className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
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
            <h1 className="text-5xl text-indigo-950 font-bold mb-5 mt-5">
              Feature of endpoint security
            </h1>
            <p className="text-md text-gray-700 opacity-90 leading-7">
              Endpoint Security Solutions are essential for protecting your
              business from ever-evolving cyber threats. By securing every
              device connected to your network, we provide a robust defense
              against malware, ransomware, and unauthorized access.
            </p>
            <div className="w-full flex mt-5 py-5 ">
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex  gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold  tracking-tighter font-serif">
                    advanced threat detection
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex  gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
                    real-time monitoring
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
              <div className="flex flex-col  gap-5  bg-gray-100 rounded-2xl p-4">
                <div className="flex  gap-3">
                  <img
                    src={featureIcon}
                    className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
                  />
                  <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
                    user-friendly interface
                  </h2>
                </div>
                <p className="text-md text-gray-600 opacity-95">
                  Protects all connected devices across your network.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-7">
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
              <h1 className="text-5xl text-indigo-950 font-semibold">
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
