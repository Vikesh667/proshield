import { useState } from "react";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { projects } from "../../constant/data";
const OurProject = ({ setContent, setHovered }) => {
  const projectdetails=projects.slice(0,4)
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full min-h-screen bg-gray-200 p-10">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-widest">
            our project
          </h1>
        </div>
        <div className=" flex  flex-col gap-2 justify-center mb-20">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Showcasing our cybersecurity
          </h1>
          <h1 className="text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            latest projects
          </h1>
        </div>
      </div>
      <div className="flex gap-[1px] w-full h-full ">
        {projectdetails.map((project, index) => (
          <div
            key={index}
           
              onClick={()=>setOpen(true)}
              onMouseEnter={() => {
                setActiveIndex(index)
                setHovered(true);
                setContent(
                  <div className="flex flex-col items-center z-40">
                    <span className="text-sm">View</span>
                  </div>
                );
              }}
              onMouseLeave={() => {
                setHovered(false);
                setContent(null);
              }}
            className={`w-full h-auto overflow-hidden relative group 
      ${index === 0 ? "rounded-l-3xl" : ""} 
      ${index === projectdetails.length - 1 ? "rounded-r-3xl" : ""}
    `}
          >
            <img
              className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              src={project}
            />

            <div
              className={`flex flex-col items-start gap-4 justify-end w-full h-full absolute p-5 
        bg-gray-500/40 inset-0 left-0 bottom-0 transform
        transition duration-500
        ${
          activeIndex === index
            ? "translate-y-0 opacity-100 "
            : "translate-y-full opacity-0 "
        }
      `}
            >
              <button className="border-[1px] border-white text-white py-2 px-5 text-lg rounded-lg cursor-pointer">
                Authentication
              </button>
              <h1 className="text-white text-xl tracking-widest font-semibold mb-5">
                IoT Security Enhancement for Smart Devices
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center p-15">
        <h1 className="w-1/2 text-center capitalize text-md text-gray-600">
          Cybersecurity Innovations Explore All Our Projects Safeguarding
          Digital Futures Against Evolving Threats.
          <span className="relative inline-block bg-gradient-to-r from-indigo-900 to-blue-400 bg-clip-text text-transparent capitalize cursor-pointer text-lg">
            all project
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-indigo-900 to-blue-400"></span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default OurProject;
