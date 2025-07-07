import Contact from "../../atom/Contact";
import Slider from "../../atom/Slider";
import { projectdetails, serviceAccourdion } from "../../constant/data";
import { projects } from "../../constant/data";
import videoImage from "../../assets/project-video-image.jpg";
import SvgGradients from "../../atom/SvgGraduents";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import entryImage1 from "../../assets/project-entry-image-1.jpg";
import entryImage2 from "../../assets/project-entry-image-2.jpg";
import { FaPlay } from "react-icons/fa";
import icon1 from "../../assets/icon-why-choose-1.svg"
import icon2 from "../../assets/icon-why-choose-3.svg"
import Accordion from "../../atom/Accordion";
const ProjectDetailComponent = () => {
  return (
    <div className="w-full h-full ">
    <div className=" flex flex-col lg:flex-row gap-15 py-20 px-5  lg:px-28">
      <div className="w-full lg:w-1/3 h-full flex flex-col gap-10 lg:sticky top-10">
        <div className="w-full h-full bg-gray-200 flex flex-col gap-5 px-5 py-3 rounded-2xl">
          <h1 className="text-lg text-indigo-950 font-semibold py-3">
            Project Details
          </h1>
          {projectdetails.map((project) => (
            <div className="w-full lg:w-84 h-full flex gap-5 bg-white rounded-2xl items-center px-5 py-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-5% bg-indigo-500 via-45% to-sky-400">
                {" "}
                <img src={project.icon} alt={project.category} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-black text-xl font-semibold">
                  {project.category}
                </h1>
                <h1 className="text-gray-500 opacity-85 text-lg font-semibold">
                  {project.auth}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <Contact />
      </div>
      <div className="w-full h-full flex flex-col gap-10">
        <Slider serviceImage={projects} />
        <div className="w-full h-full flex flex-col gap-5">
          <h1 className="text-3xl lg:text-5xl text-[#010535] font-bold tracking-wide font-serif">
            Project overview
          </h1>
          <p className="text-md text-gray-500 opacity-90 tracking-wide pr-3 text-start">
            The rapid proliferation of smart devices in homes, businesses, and
            critical infrastructure has transformed the way we live and work,
            but it has also introduced new cybersecurity challenges. Our IoT
            Security Enhancement project focuses on safeguarding these
            interconnected devices against emerging threats.
          </p>
          <p className="text-md text-gray-500 opacity-90 tracking-wide">
            We provide advanced protection through comprehensive threat
            monitoring, real-time analytics, and robust security protocols
            designed specifically for IoT environments. Our solutions include
            device identification and behavior analysis, anomaly detection, and
            the deployment of secure firmware updates. By implementing these
            measures, we ensure that smart devices remain protected from
            vulnerabilities such as unauthorized access, data breaches, and
            potential exploitation of device weaknesses.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl lg:text-5xl text-[#010535] font-bold tracking-tight font-serif">
            Challenges of project
          </h1>
          <p className="text-md text-gray-500 opacity-90 tracking-wide">
            Implementing IoT security enhancement involves several key
            challenges. One major challenge is the diverse and rapidly evolving
            nature of IoT devices, each with unique security requirements and
            vulnerabilities. Ensuring compatibility across different device
            types.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-5">
            <SvgGradients />
            <div className="flex flex-col gap-5">
              <h1 className="text-xl text-[#010535] font-bold tracking-tight font-serif">
                Challenges:
              </h1>
              <p className="text-md text-gray-500 opacity-90 tracking-wide">
                Balancing user convenience and usability is another significant
                challenge, as user adoption can be hindered by overly complex
                security
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center  font-sans text-md rounded-full">
                  <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                  <p className="text-md text-gray-500 opacity-90 tracking-wide">
                    complexity of device management
                  </p>
                </li>
                <li className="flex gap-3 items-center  font-sans text-md rounded-full">
                  <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                  <p className="text-md text-gray-500 opacity-90 tracking-wide">
                    cost and resource constraints
                  </p>
                </li>
                <li className="flex gap-3 items-center font-sans text-md rounded-full">
                  <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                  <p className="text-md text-gray-500 opacity-90 tracking-wide">
                    interconnected vulnerabilities
                  </p>
                </li>
                <li className="flex gap-3 items-center font-sans text-md rounded-full">
                  <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                  <p className="text-md text-gray-500 opacity-90 tracking-wide">
                    {" "}
                    diverse device compatibility
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full h-full relative">
              <img
                className="w-full h-full rounded-4xl"
                src={videoImage}
                alt=""
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   z-30">
                <span className="relative flex size-18">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFFFFF]  transition duration-500"></span>
                  <span className="relative flex size-18 rounded-full  bg-gradient-to-r from-indigo-500 to-blue-400 items-center justify-center z-20">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 mt-5">
          <h1 className="text-3xl lg:text-5xl text-[#010535] font-bold tracking-tight font-serif">
            Scope of project
          </h1>
          <p className="text-md text-gray-500 opacity-90 tracking-wide">
            The Iot Security Enhancement project aims to provide comprehensive
            protection for smart devices across various environments, including
            homes, businesses, and critical infrastructure. The project's scope
            includes the following key components:
          </p>
          <div className="w-full h-full">
            <ul className="space-y-3 grid grid-cols-1 lg:grid-cols-2">
              <li className="flex gap-3 items-center  font-sans text-md rounded-full">
                <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                <p className="text-md text-gray-500 opacity-90 tracking-wide">
                  {" "}
                  complexity of device management
                </p>
              </li>
              <li className="flex gap-3 items-center  font-sans text-md rounded-full">
                <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                <p className="text-md text-gray-500 opacity-90 tracking-wide">
                  {" "}
                  cost and resource constraints
                </p>
              </li>
              <li className="flex gap-3 items-center font-sans text-md rounded-full">
                <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                <p className="text-md text-gray-500 opacity-90 tracking-wide">
                  {" "}
                  interconnected vulnerabilities
                </p>
              </li>
              <li className="flex gap-3 items-center font-sans text-md rounded-full">
                <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
                <p className="text-md text-gray-500 opacity-90 tracking-wide">
                  {" "}
                  diverse device compatibility
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row gap-5">
            <img className="w-full h-full rounded-4xl" src={entryImage1} />
            <img className="w-full h-full rounded-4xl" src={entryImage2} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex gap-5 items-start">
              <img src={icon1}/>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl text-[#010535] font-bold ">Secure Firmware Updates</h1>
                <p className="text-md text-gray-500 opacity-100">
                  Developing a framework for secure firmware management,
                  enabling safe and reliable updates to address.
                </p>
              </div>
            </div>
              <div className="flex gap-5 items-start">
              <img src={icon2}/>
              <div className="flex flex-col gap-4 ">
                <h1 className="text-xl text-[#010535] font-bold ">Secure Firmware Updates</h1>
                <p className="text-md text-gray-500 opacity-100">
                  Developing a framework for secure firmware management,
                  enabling safe and reliable updates to address.
                </p>
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

export default ProjectDetailComponent;
