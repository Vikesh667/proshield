import { HiOutlineBadgeCheck } from "react-icons/hi";
import benfitImage from "../../assets/benefit-image-1.jpg";
import benfitImage2 from "../../assets/benefit-image-2.jpg";
import benfitBody1 from "../../assets/icon-benefit-body-1.svg";
import benfitBody2 from "../../assets/icon-benefit-body-2.svg";
import securitySpinImage from "../../assets/get-free-security-circle.svg";
import icon from "../../assets/icon-sub-heading.svg";
import Button from "../../atom/Button";

const Benfit = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gray-200 py-16 px-5 lg:px-20 gap-10">
      <div className="relative w-full lg:w-[45%] flex items-start justify-start h-[370px] lg:h-[600px] pr-4 lg:pr-10">
        <div className="w-full max-w-[480px] h-full relative">
          <img
            src={benfitImage}
            alt="Main"
            className="w-full h-full object-cover rounded-3xl"
          />

          <img
            src={benfitImage2}
            alt="Overlay"
            className="absolute w-40 h-36 lg:w-60 lg:h-72 bottom-5 -right-7 lg:-right-10 lg:bottom-10 border-4 lg:border-8 border-white rounded-xl lg:rounded-3xl object-cover z-10"
          />

          <img
            src={securitySpinImage}
            alt="Spin"
            className="absolute w-24 h-24 lg:w-36 lg:h-36 -right-7  lg:-right-10 top-10 animate-spin-slow"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-6">
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="w-6 h-6" />
          <span className="text-lg uppercase font-serif tracking-wider text-black">
            our benefits
          </span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-semibold font-serif text-indigo-950 leading-tight">
          Reliable solutions for
        </h1>
        <h1 className="text-2xl -mt-4 lg:text-5xl font-semibold font-serif bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent leading-tight">
          cybersecurity excellence
        </h1>

        <p className="text-gray-700 opacity-80 text-base lg:text-lg">
          Our comprehensive cybersecurity solutions provide robust protection,
          minimizing risks and giving you peace of mind knowing your data and
          systems are secure. We empower you with the tools and expertise to
          navigate today's threats.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex gap-4 items-center bg-white py-3 px-4 rounded-xl shadow-sm">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600 bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500">
              <img src={benfitBody1} alt="icon1" className="w-full h-full" />
            </div>
            <h2 className="text-base lg:text-xl text-indigo-950 font-semibold capitalize">
              proactive threat protection
            </h2>
          </div>

          <div className="flex gap-4 items-center bg-white py-3 px-4 rounded-xl shadow-sm">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600 bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500">
              <img src={benfitBody2} alt="icon2" className="w-full h-full" />
            </div>
            <h2 className="text-base lg:text-xl text-indigo-950 font-semibold capitalize">
              24/7 monitoring and help
            </h2>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 mt-6">
          <ul className="space-y-3">
            {[
              "Enhanced Business Continuity",
              "Scalable Solutions",
              "Peace of Mind",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-md text-gray-700 font-sans opacity-80"
              >
                <HiOutlineBadgeCheck className="text-indigo-600 text-2xl" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-2 lg:mt-0">
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benfit;
