import ChooseUsCard from "../../atom/ChooseUsCard";
import { ourApproch } from "../../constant/data";
import featureImage from "../../assets/feature-image-1.jpg";
import iconHeading from "../../assets/icon-sub-heading.svg";
const OurApproch = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-20 py-30 bg-gray-200 relative justify-end">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-wider">
          our approach
          </h1>
        </div>
        <div className=" flex  flex-col gap-2 justify-center mb-20">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
        Strengthening security,<span className="text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent"> your</span>
          </h1>
          <h1 className="text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
          future
          </h1>
        </div>
      </div>
      <div className="w-full h-full flex justify-end relative">
        <div className="flex flex-col space-y-10 w-1/2 absolute left-15 top-1/4 -mt-5">
          {ourApproch.map((item) => (
            <ChooseUsCard item={item} />
          ))}
        </div>
        <div className="w-[50vw] h-[85vh] flex">
          <img className="w-full h-full rounded-4xl" src={featureImage} />
        </div>
      </div>
    </div>
  );
};
export default OurApproch;
