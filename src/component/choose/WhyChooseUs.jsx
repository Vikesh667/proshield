import choosebg from "../../assets/why-choose-bg.png";
import chooseImage from "../../assets/why-choose-image.jpg";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { chooseUs } from "../../constant/data";
import ChooseCounter from "../../atom/ChooseCounter";
import ChooseUsCard from "../../atom/ChooseUsCard";
const WhyChooseUs = () => {

  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat  bg-[#010535] p-20 flex flex-col gap-10"
      style={{ backgroundImage: `url(${choosebg})` }}
    >
      <div className="flex gap-15">
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
       <div className="flex flex-col gap-15">
        {chooseUs.map((item) => (
        <ChooseUsCard item={item}/>
        ))}
        </div>
      
      </div>
      </div>
        <hr className="h-[0.3px] border-0 bg-gray-300 opacity-30 w-full z-10 mt-10" />
          <div  />
        <ChooseCounter/>
    </div>
  );
};
export default WhyChooseUs;
