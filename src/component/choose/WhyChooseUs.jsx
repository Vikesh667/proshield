import choosebg from "../../assets/why-choose-bg.png";
import chooseImage from "../../assets/why-choose-image.jpg";
import iconWhy1 from "../../assets/icon-why-choose-1.svg";
import iconWhy2 from "../../assets/icon-why-choose-2.svg";
import iconWhy3 from "../../assets/icon-why-choose-3.svg";
import iconHeading from "../../assets/icon-sub-heading.svg";
const WhyChooseUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat  bg-indigo-950 p-20 flex gap-10"
      style={{ backgroundImage: `url(${choosebg})` }}
    >
      <div className="flex w-1/2 h-full">
        <img src={chooseImage} className="w-full h-full rounded-4xl" />
      </div>
      <div className="w-1/2 py-15 ">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-3 items-center mb-5">
            <div className="flex items-center text-white">
              <img
                src={iconHeading}
                alt="icon"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="ml-2 text-xl tracking-widest uppercase">
                why choose us
              </span>
            </div>
          </div>
          <div className=" flex  flex-col gap-2 justify-center mb-15">
            <h1 className="text-5xl font-bold  font-sans tracking-wide text-white">
              Reliable solutions for cybersecurity excellence
            </h1>
          </div>
        </div>
        <div className="flex gap-5 -mt-4 bg-white px-7 py-3 items-center overflow-hidden rounded-4xl relative group">
          <img
            src={iconWhy1}
            className=" w-20 h-20 group-hover:invert transition duration-500 z-10"
          />

          <div className="flex flex-col gap-3 ml-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif z-10 group-hover:text-white">
              expertise and experience
            </h2>
            <p className="text-gray-500 text-lg tracking-tight mr-5 z-10 group-hover:text-white">
              A team of seasoned cybersecurity professionals with extensive
              industry knowledge.
            </p>
          </div>
          <div className="w-full h-full bg-gradient-to-l bg-blue-500 from-60% to-indigo-600 rounded-4xl absolute inset-0 top-0 left-0 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
        <div className="flex gap-5 mt-10 bg-white px-7 py-3 items-center overflow-hidden rounded-4xl relative group">
          <img
            src={iconWhy2}
            className=" w-20 h-20 group-hover:invert z-10 transition duration-500"
          />

          <div className="flex flex-col gap-3 ml-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif group-hover:text-white z-10">
              proactive security approach
            </h2>
            <p className="text-gray-500 text-lg tracking-tight mr-5 group-hover:text-white z-10">
              Focused on preventing threats before they impact your system, not
              just reacting after the fact.
            </p>
          </div>
          <div className="w-full h-full bg-gradient-to-l bg-blue-500 from-60% to-indigo-800 rounded-4xl absolute inset-0 top-0 left-0 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
        <div className="flex gap-5 mt-10 bg-white px-7 py-3 items-center rounded-4xl overflow-hidden relative group z-10">
          <img
            src={iconWhy3}
            className=" w-20 h-20 z-10 group-hover:invert transition duration-500"
          />

          <div className="flex flex-col gap-3 ml-3">
            <h2 className="text-xl capitalize text-indigo-950 font-semibold font-serif group-hover:text-white z-10">
              tailored training programs
            </h2>
            <p className="text-gray-500 text-lg tracking-tight mr-5 group-hover:text-white z-10">
              Educating your team on security best practices to reduce human
              error and enhance vigilance.
            </p>
          </div>
          <div className="w-full h-full bg-gradient-to-l bg-blue-500 from-60% to-indigo-800 rounded-4xl absolute inset-0 top-0 left-0 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
