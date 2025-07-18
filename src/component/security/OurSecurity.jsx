import iconHeading from "../../assets/icon-sub-heading.svg";
import securityImage from "../../assets/our-security-image.jpg";
import SvgGradients from "../../atom/SvgGraduents";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { motion } from "framer-motion";
const OurSecurity = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col py-10 px-5 lg:gap-25 lg:py-20 lg:px-25">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 flex-col">
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-3 items-center lg:mb-5">
              <div className="flex items-center text-indigo-950">
                <img
                  src={iconHeading}
                  alt="icon"
                  className="w-6 h-6 brightness-0 "
                />
                <span className="ml-2  text-lg lg:text-xl tracking-wide uppercase">
                  Our security
                </span>
              </div>
            </div>
            <div className=" flex  flex-col gap-2 justify-center mb-5 lg:mb-10">
              <h1 className="text-2xl lg:text-5xl font-semibold lg:leading-15  font-sans tracking-normal text-[#010535]">
                Securing your digital{" "}
                <span className="text-blue-500"> world together</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 mr-10">
            <h1 className="text-lg lg:text-xl capitalize text-[#010535] font-semibold">
              real-time threat monitoring:
            </h1>
            <p className="text-md tracking-tighter text-gray-500/95 lg:tracking-tight">
              Real-Time Threat Monitoring continuously analyzes network traffic,
              user behavior, and system activity to detect and respond to
              potential potentials security threats threats as they occur.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10 mr-11">
            <h1 className="text-lg lg:text-xl capitalize text-[#010535] font-semibold">
              compliance and risk management:
            </h1>
            <p className="text-md tracking-tighter text-gray-500/95">
              compliance & risk management continuously analyzes network
              traffic, user behavior, and system activity to detect and respond
              to potential potentials security threats threats as they occur.
            </p>
          </div>
        </div>
        <div className="w-full gap-5 lg:gap-0 lg:w-1/2 flex flex-col-reverse lg:flex-col  lg:px-3">
          <div className="relative w-full h-60 lg:h-80 overflow-hidden rounded-4xl ">
            <img
              src={securityImage}
              alt="Security"
              className="w-full h-full object-cover rounded-4xl"
            />
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-white z-10 origin-right pointer-events-none rounded-4xl"
              initial={{ scaleX: 1, opacity: 1 }}
              whileInView={{ scaleX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} 
            />
          </div>

          <div className="flex flex-col gap-3 lg:gap-5 mt-5 lg:mt-10">
            <h1 className="text-md lg:text-xl capitalize text-[#010535] font-semibold">
              identity and access management:
            </h1>
            <p className="text-md text-gray-500/95">
              Identity and access management continuously analyzes network
              traffic, user behavior, and system activity to detect and respond
              to potential security threats as they occur.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 ">
        <SvgGradients />
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
            <h1 className="text-[#010535] capitalize text-xl ">
              Computer security
            </h1>
          </div>
          <p className="text-md text-gray-500/95 px-10 py-2">
            Protecting systems and data from unauthorized access, cyber threats
            digital vulnerabilities.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
            <h1 className="text-[#010535] capitalize text-xl">
              Computer security
            </h1>
          </div>
          <p className="text-md text-gray-500/95 px-10 py-2">
            Protecting systems and data from unauthorized access, cyber threats
            digital vulnerabilities.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
            <h1 className="text-[#010535] capitalize text-xl ">
              Computer security
            </h1>
          </div>
          <p className="text-md text-gray-500/95 px-10 py-2">
            Protecting systems and data from unauthorized access, cyber threats
            digital vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSecurity;
