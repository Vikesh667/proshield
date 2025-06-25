import PriceCard from "../../atom/PriceCard";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { pricingPlan } from "../../constant/data";
import pricing1 from "../../assets/icon-pricing-benefit-1.svg";
import pricing2 from "../../assets/icon-pricing-benefit-2.svg";
import pricing3 from "../../assets/icon-pricing-benefit-3.svg";
const PricePlan = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-5 py-20">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-widest">
            pricing plan
          </h1>
        </div>
        <div className=" flex  flex-col gap-2 justify-center mb-20">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Affordable cyber security plans
          </h1>
          <h1 className="text-5xl text-center font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            for every need
          </h1>
        </div>
      </div>
      <div className="flex gap-10">
        {pricingPlan.map((price, index) => (
          <PriceCard price={price} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10 gap-20">
       <div className="flex text-lg font-sans gap-5 text-[#010535]">
        <img src={pricing1}/>
        <h1>Get 30 day free trial</h1> 
       </div>
         <div className="flex text-lg font-sans gap-5 text-[#010535]">
        <img src={pricing1}/>
        <h1>No any hidden fees pay</h1> 
       </div>
         <div className="flex text-lg font-sans gap-5 text-[#010535]">
        <img src={pricing1}/>
        <h1>You can cancel anytime</h1> 
       </div>
      </div>
    </div>
  );
};
export default PricePlan;
