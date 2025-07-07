import ChooseUsCard from "../../atom/ChooseUsCard";
import { ourApproch } from "../../constant/data";
import featureImage from "../../assets/feature-image-1.jpg";
import iconHeading from "../../assets/icon-sub-heading.svg";
const OurApproch = () => {
  return (
    <div className="w-full min-h-screen flex flex-col  py-10 px-5 lg:px-20 lg:py-28 bg-gray-200 relative justify-end">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center lg:mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-wider">
          our approach
          </h1>
        </div>
        <div className=" flex  flex-col gap-2  justify-center mb-20">
          <h1 className="text-2xl text-center lg:text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
        Strengthening security,<span className="text-2xl lg:text-5xl text-center font-semibold font-serif px-5 lg:tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent"> your future</span>
          </h1> 
        
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-10 lg:flex-row items-center lg:justify-end relative">
        <div className="flex flex-col gap-5 space-y-10 w-full lg:w-1/2 lg:absolute lg:left-15 top-1/4 -mt-5">
          {ourApproch.map((item) => (
            <ChooseUsCard item={item} />
          ))}
        </div>
        <div className="lg:w-[50vw] w-full h-full lg:h-[85vh] flex">
          <img className="w-full h-full rounded-4xl" src={featureImage} />
        </div>
      </div>
    </div>
  );
};
export default OurApproch;
