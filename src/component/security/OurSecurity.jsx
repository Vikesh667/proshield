import iconHeading from "../../assets/icon-sub-heading.svg";
import securityImage from "../../assets/our-security-image.jpg";
import SvgGradients from "../../atom/SvgGraduents";
import { HiOutlineBadgeCheck } from "react-icons/hi";
const OurSecurity = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col gap-25 py-20 px-25">
      <div className="flex w-full">
        <div className="flex w-1/2 flex-col">
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-3 items-center mb-5">
              <div className="flex items-center text-indigo-950">
                <img
                  src={iconHeading}
                  alt="icon"
                  className="w-6 h-6 brightness-0 "
                />
                <span className="ml-2 text-xl tracking-wide uppercase">
                 Our security
                </span>
              </div>
            </div>
            <div className=" flex  flex-col gap-2 justify-center mb-10">
              <h1 className="text-5xl font-semibold leading-15  font-sans tracking-normal text-[#010535]">
                Securing your digital{" "}
                <span className="text-blue-500"> world together</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 mr-10">
            <h1 className="text-xl capitalize text-[#010535] font-semibold">
              real-time threat monitoring:
            </h1>
            <p className="text-md text-gray-500/95 tracking-tight">
              Real-Time Threat Monitoring continuously analyzes network traffic,
              user behavior, and system activity to detect and respond to
              potential potentials security threats threats as they occur.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-10 mr-11">
            <h1 className="text-xl capitalize text-[#010535] font-semibold">
              compliance and risk management:
            </h1>
            <p className="text-md tracking-wide text-gray-500/95">
              compliance & risk management continuously analyzes network
              traffic, user behavior, and system activity to detect and respond
              to potential potentials security threats threats as they occur.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex-col px-3 ">
          <img className="w-full rounded-4xl" src={securityImage} />
          <div className="flex flex-col gap-5 mt-10">
            <h1 className="text-xl capitalize text-[#010535] font-semibold">
              identity and access management:
            </h1>
            <p className="text-md text-gray-500/95">
              identity and access management continuously analyzes network
              traffic, user behavior, and system activity to detect and respond
              to potential potentials security threats threats as they occur.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ">
        <SvgGradients />
        <div className="flex flex-col">
        <div className="flex items-center gap-3">
        <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
        <h1 className="text-[#010535] capitalize text-xl ">Computer security</h1>
        </div>
        <p className="text-md text-gray-500/95 px-10 py-2">Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities.</p>
        </div>
          <div className="flex flex-col">
        <div className="flex items-center gap-3">
        <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
        <h1 className="text-[#010535] capitalize text-xl">Computer security</h1>
        </div>
        <p className="text-md text-gray-500/95 px-10 py-2">Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities.</p>
        </div>
          <div className="flex flex-col">
        <div className="flex items-center gap-3">
        <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
        <h1 className="text-[#010535] capitalize text-xl ">Computer security</h1>
        </div>
        <p className="text-md text-gray-500/95 px-10 py-2">Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities.</p>
        </div>
      </div>
    </div>
  );
};

export default OurSecurity;
