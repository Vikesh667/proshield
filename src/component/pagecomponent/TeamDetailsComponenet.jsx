import sofiyacarter from "../../assets/team-2.jpg";
import { useEffect, useState } from "react";
import { teamMember, teamsContact } from "../../constant/data";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ProgressBar from "../../atom/ProgressBar";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SvgGradients from "../../atom/SvgGraduents";
import Button from "../../atom/Button";
const TeamDetailsComponent = () => {
  const [translateClass, setTranslateClass] = useState("-translate-y-full");
  const [visible, setVisible] = useState(true);

  const [progressValues, setProgressValues] = useState({
    integration: 0,
    migration: 0,
    analysis: 0,
    detection: 0,
  });
  const handleMouseEnter = () => {
    setVisible(true);
    setTranslateClass("translate-y-0");
  };

  const handleMouseLeave = () => {
    setTranslateClass("translate-y-full");

    setTimeout(() => {
      setVisible(false); // hide it
      setTranslateClass("-translate-y-full");
    }, 500);
  };

  const handleProgressChange = (key, value) => {
    setProgressValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-full min-h-screen px-5 py-5 lg:py-28 lg:px-25 flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/3 h-full lg:sticky top-0">
        <div className="w-full h-full">
          <img
            className="w-84 h-full rounded-2xl"
            src={sofiyacarter}
            alt="sofiya carter"
          />
        </div>
        <div className="w-full lg:w-84 h-full bg-gray-100 px-5 py-5 mt-10 rounded-lg">
          <div className="w-full h-full flex flex-col items-start gap-5 py-5">
            <h1 className="text-2xl font-sans font-semibold">Get in touch:</h1>
            <p className="text-md font-sans tracking-tight text-start text-gray-500 opacity-80">
              Reach out to us today discuss cybersecurity needs, ask questions,
              or learn more about our innovative solutions.
            </p>
          </div>
          <div className="w-full h-full flex flex-col  gap-5">
            {teamsContact.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-white py-3 px-3 rounded-xl relative overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-20% bg-indigo-500 via-55% to-sky-400  z-0 transform transition-transform duration-500 ease-in-out ${translateClass} ${
                    visible ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                />
                <span className="w-full h-full z-10">
                  <img className="group-hover:text-white" src={item.icon} />
                </span>
                <span className="text-[#010535] text-xl z-10">
                  {item.contact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full">
          {teamMember.map((member) => (
            <div className="w-full h-full flex flex-col gap-5 lg:gap-10">
              <div>
                <h2 className="text-lg font-sans font-light">
                  {member.profession}
                </h2>
                <h1 className="text-2xl lg:text-5xl font-bold">{member.heading}</h1>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-sm lg:text-lg font-sans text-gray-500 opacity-80">
                  {member.description}
                </p>
                <p className="text-sm lg:text-lg font-sans text-gray-500 opacity-80">
                  {member.description2}
                </p>
              </div>
              <div className="w-full h-full flex items-center gap-5 lg:gap-10 mt-5 lg:mt-10">
                <h1 className="text-xl lg:text-3xl">{member.followers}</h1>
                <div className="flex items-center gap-5">
                  <span className="w-10 h-10   bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-600 bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out text-xl text-white flex items-center justify-center rounded-full">
                    <FaXTwitter />
                  </span>
                  <span className="w-10 h-10   bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-600 bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out text-xl text-white flex items-center justify-center rounded-full">
                    <FaFacebookF />
                  </span>
                  <span className="w-10 h-10   bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-600 bg-[length:200%_auto] bg-left hover:bg-right transition-all duration-500 ease-in-out text-xl text-white flex items-center justify-center rounded-full">
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full mt-10 lg:mt-20">
          <h1 className="text-2xl lg:text-5xl tracking-wide font-sans font-semibold mb-2 lg:mb-7">
            Professional Skills
          </h1>
          <p className="text-sm lg:text-lg text-gray-500 opacity-80 tracking-normal">
            Proficient in advanced threat detection, vulnerability assessment,
            network security, and compliance management. Expertise in deploying
            innovative cybersecurity solutions, conducting audits, and ensuring
            robust protection of digital assets.
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-28 gap-y-10 mt-5">
          <div className="w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg  font-sans text-gray-500 opacity-90">
                Integration
              </h1>
              <h1>{progressValues.integration}%</h1>
            </div>
            <ProgressBar
              count={56}
              onProgressChange={(value) =>
                handleProgressChange("integration", value)
              }
            />
          </div>
          <div className="w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg  font-sans text-gray-500 opacity-90">
                Migration
              </h1>
              <h1>{progressValues.migration}%</h1>
            </div>
            <ProgressBar
              count={89}
              onProgressChange={(value) =>
                handleProgressChange("migration", value)
              }
            />
          </div>
          <div className="w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg  font-sans text-gray-500 opacity-90">
                Analysis
              </h1>
              <h1>{progressValues.analysis}%</h1>
            </div>
            <ProgressBar
              count={66}
              onProgressChange={(value) =>
                handleProgressChange("analysis", value)
              }
            />
          </div>
          <div className="w-full h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg  font-sans text-gray-500 opacity-90">
                Detection
              </h1>
              <h1>{progressValues.detection}%</h1>
            </div>
            <ProgressBar
              count={76}
              onProgressChange={(value) =>
                handleProgressChange("detection", value)
              }
            />
          </div>
        </div>
        <div className="w-full h-full flex-col mt-10">
          <SvgGradients />
          <h1 className="text-2xl lg:text-5xl font-semibold">Personal experience</h1>
          <p className="text-sm lg:text-lg font-sans text-gray-500 opacity-80 mt-5">
            Sophia Carter brings a wealth of hands-on experience in the
            cybersecurity field, having worked on numerous high-profile projects
            to secure complex digital ecosystems.
          </p>
          <ul className="space-y-3  mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
            <li className="flex gap-3 items-center text-gray-500/90  font-sans text-sm lg:text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              expertise in advanced threat detection
            </li>
            <li className="flex gap-3 items-center text-gray-500/90  font-sans text-sm lg:text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              success in securing cloud-based platforms
            </li>
            <li className="flex gap-3 items-center text-gray-500/90  font-sans text-sm lg:text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              proven track record in incident response
            </li>
            <li className="flex gap-3 items-center text-gray-500/90  font-sans text-sm lg:text-md rounded-full">
              <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
              collaborator across cross-functional team
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 mt-10 ">
          <h1 className="text-2xl lg:text-5xl font-sans font-semibold">
            Get in touch with us
          </h1>
          <form className="w-full h-full flex flex-col gap-5">
            <div className="flex items-center gap-5 flex-col lg:flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="w-full py-3 px-3 outline-none border-[1px] border-gray-200 rounded-md"
              />
              <input
                type="text"
                placeholder="Last  Name"
                className="w-full py-3 px-3 outline-none border-[1px] border-gray-200 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Phone"
              className="w-full py-3 px-3 outline-none border-[1px] border-gray-200 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full py-3 px-3 outline-none border-[1px] border-gray-200 rounded-md"
            />
            <textarea  
            type="text"
            rows="5"
              placeholder="Write Message"
              className="w-full py-3 px-3 outline-none border-[1px] border-gray-200 rounded-md"></textarea>
             <div> <Button text="Submit Message"/></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TeamDetailsComponent;
