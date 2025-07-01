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
    <div className="w-full min-h-screen py-20 flex justify-between bg-gray-200">
      <div className="w-full flex-1 h-[100vh] relative px-10">
        <img className="rounded-3xl w-full h-full" src={benfitImage} />
        <img
          className="w-84 h-96 absolute bottom-15 -right-20 z-10 -mt-10 border-8 border-white rounded-4xl "
          src={benfitImage2}
          alt=""
        />
        <div>
          <img
            src={securitySpinImage}
            className="absolute -right-10 top-12 ml-5 mt-5 my-spinning-element transation duration-1500"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col w-1/2 h-full items-start justify-center mt-20  gap-10 px-20 ml-10">
        <div className="flex items-center text-black  mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-lg text-black uppercase font-serif tracking-wider">
            our benefits
          </span>
        </div>
        <div className="-mt-5 ">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Reliable solutions for
          </h1>
          <h1 className="text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            cybersecurity excellence
          </h1>
        </div>
        <h1 className="font-sans text-md font-semibold tracking-wide text-gray-700/60 -mt-5">
          Our comprehensive cybersecurity solutions provide robust protection,
          minimizing risks and giving you peace of mind knowing your data and
          systems are secure. We empower you with the tools and expertise to
          navigate today's.
        </h1>
        <div className="w-full h-full flex    gap-5">
          <div className="flex gap-5 items-center bg-white py-2 px-3 rounded-xl">
            <div
              className=" w-19 h-16 p-3 rounded-full overflow-hidden flex items-center justify-center
            bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600
    bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out
           "
            >
              {" "}
              <img className="w-full h-full rounded-full" src={benfitBody1} />
            </div>
            <h1 className="text-xl text-indigo-950 capitalize font-semibold">
              proactive threat protection
            </h1>
          </div>
          <div className="flex gap-5 items-center bg-white py-2 px-3 rounded-xl">
            <div
              className="w-19 h-16 p-3 rounded-full overflow-hidden flex items-center justify-center
                        bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-600
                        bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out"
            >
              {" "}
              <img className="w-full h-full" src={benfitBody2} />
            </div>
            <h1 className="text-xl text-indigo-950 capitalize font-semibold">
              24/7 monitoring and help
            </h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-10">
          <ul className="space-y-3">
            <li className="flex gap-3 items-center opacity-70   font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Enhanced Business Continuity
            </li>
            <li className="flex gap-3 items-center   opacity-70 font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Scalable Solutions
            </li>
            <li className="flex gap-3 items-center  opacity-70 font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Peace of Mind
            </li>
          </ul>
          <div>
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benfit;
