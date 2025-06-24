import { useEffect, useState } from "react";
import featureImage1 from "../assets/feature-image-1.jpg";
import featureImage2 from "../assets/feature-image-2.jpg";
import iconHeading from "../assets/icon-sub-heading.svg";
import featureIcon from "../assets/icon-ferature-1.svg";
import featureIcon2 from "../assets/icon-ferature-2.svg";
import featureIcon3 from "../assets/icon-ferature-3.svg";
import Card from "../atom/Card";

const Feature = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 25) {
      const timer = setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [counter]);
  return (
    <div className="w-full min-h-screen flex  gap-10 p-20">
      <div className="flex flex-col gap-10  overflow-hidden flex-1">
      <div className="w-full h-full relative group overflow-hidden rounded-4xl">
  {/* Image */}
  <img src={featureImage1} className="w-full h-full rounded-4xl object-cover" />

  {/* Overlay Div */}
 <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30
               opacity-0 rotate-[-45deg] scale-0
               group-hover:top-0 group-hover:left-0 
               group-hover:w-full group-hover:h-full
               group-hover:opacity-100 group-hover:scale-200
               transition-all duration-700 ease-out z-10 pointer-events-none"
  />
</div>

        <div className="flex gap-5">
          <img src={featureImage2} className="rounded-4xl" />
          <div className="w-52 h-66 bg-[linear-gradient(to_right,_#4338ca_5%,_#60a5fa_75%)] shadow-lg rounded-4xl flex flex-col items-center justify-around p-5 overflow-hidden relative group">
            <h1 className="text-5xl font-bold font-sans text-white text-center z-10">
              {counter}+
            </h1>
            <h2 className="text-lg text-white font-sans text-center z-10">
              Years of experience in cyber security
            </h2>
            <hr className="h-px border-0 bg-gray-300 opacity-30 w-40 z-10" />
            <Card className={"w-8 h-8 z-20"} counter={counter} />
            <div className="w-full h-full bg-[linear-gradient(to_right,_#60a5fa_75%,_#4338ca_5%)] blur-xl absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 py-15">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-3 items-center mb-5">
            <img src={iconHeading} className="text-white" />
            <h1 className="text-sm uppercase font-semibold tracking-wider">
              our feature
            </h1>
          </div>
          <div className=" flex  flex-col gap-2 justify-center mb-15">
            <h1 className="text-5xl font-bold  font-sans tracking-wide text-indigo-950">
              Comprehensive protection
            </h1>
            <h1 className="text-5xl text-start font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
              simplified security
            </h1>
          </div>
        </div>
        <div className="flex gap-5 -mt-4">
          <img
            src={featureIcon}
            className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16 "
          />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
              Real-time threat detection
            </h2>
            <p className="text-gray-500 text-lg tracking-tight">
              Real-Time Threat Detection provides instant monitoring & response
              to cyber threats, ensuring your devices and data remain secure.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <img
            src={featureIcon2}
            className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
              malware and virus prevention
            </h2>
            <p className="text-gray-500 text-lg tracking-tight">
              malware and virus prevention provides instant monitoring &
              response to cyber threats, ensuring your devices and data remain
              secure.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <img
            src={featureIcon3}
            className="p-4 bg-gradient-to-r bg-indigo-800 to-blue-400 rounded-full w-16 h-16"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif">
              24/7 monitoring and support
            </h2>
            <p className="text-gray-500 text-lg tracking-tight">
              24/7 monitoring and support provides instant monitoring & response
              to cyber threats, ensuring your devices and data remain secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
