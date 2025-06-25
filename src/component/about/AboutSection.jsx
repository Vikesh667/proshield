import { aboutAvatar } from "../../constant/data";
import securitySpinImage from "../../assets/get-free-security-circle.svg";
import icon from "../../assets/icon-sub-heading.svg";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Button from "../../atom/Button";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SvgGradients from "../../atom/SvgGraduents";
const AboutSection = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex  justify-around gap-10 py-12 px-25">
      <SvgGradients />
      <div className="flex gap-10 h-full w-full items-center justify-center mt-10 relative ">
        <div className="flex items-end h-full mt-25">
          <img className="rounded-4xl h-[70vh]" src={aboutAvatar[1]} />
        </div>
        <div className="flex flex-col gap-10">
          <img className="rounded-4xl h-[40vh]" src={aboutAvatar[2]} />
          <img className="rounded-4xl h-[40vh]" src={aboutAvatar[3]} />
        </div>
        <div>
          <img
            src={securitySpinImage}
            className="absolute left-1/3 top-1/3 ml-5 mt-5 my-spinning-element transation duration-1500"
          />
        </div>
      </div>
      <div className="flex gap-10 h-full w-full items-start flex-col ">
        <div className="flex items-center text-black  mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-lg text-black uppercase font-serif tracking-wider">
            About Us
          </span>
        </div>
        <div className="-mt-5">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Your trusted partner in our{" "}
          </h1>
          <h1 className="text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            cyber security solutions
          </h1>
        </div>
        <h2 className="font-serif text-lg text-gray-700/60 -mt-5">
          We provide reliable, cutting-edge cybersecurity solutions to protect
          your digital assets, ensuring safety and peace of mind.
        </h2>
        <div class="flex items-center w-full">
          <div class="hexagonal w-52 h-36 bg-blue-500">
            <img
              className="w-full h-full overflow-hidden"
              src={aboutAvatar[0]}
            />
          </div>

          <div class="flex-1 bg-gray-100 h-36 -ml-30">
            <div class="hex-left w-full h-full bg-gradient-to-br bg-blue-800 to-blue-400 text-white p-4 flex flex-col  items-center rounded-r-full">
              <h2 class="text-xl font-bold -ml-4 ">24/7 aecurity assistance</h2>
              <p className="ml-35 text-md font-sans mt-3">
                Real-time support for all cybersecurity concerns, including
                breach response, threat detection, guidance.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10">
          <ul className="space-y-3">
            <li className="flex gap-3 items-center  font-sans text-md rounded-full">
             <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Threat Detection and Monitoring
            </li>
            <li className="flex gap-3 items-center  font-sans text-md rounded-full">
               <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Access Control Management
            </li>
            <li className="flex gap-3 items-center font-sans text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              Security Awareness Training
            </li>
          </ul>
          <div className="flex flex-col gap-10">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-400 flex items-center justify-center">
                <LiaPhoneVolumeSolid className="text-3xl text-white" />
              </div>
              <h2>+91123456789</h2>
            </div>
           <Button text="More About"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;

