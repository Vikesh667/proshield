import PriceCard from "../../atom/PriceCard"
import TopSection from "../../atom/TopSection"
import { pricingPlan } from "../../constant/data"
import pricing1 from "../../assets/icon-pricing-benefit-1.svg";
import pricing2 from "../../assets/icon-pricing-benefit-2.svg";
import pricing3 from "../../assets/icon-pricing-benefit-3.svg";
const Prices=()=>{
    const content={
        heading:"Pricing plan",
        text:"Pricing plan"
    }
    return(
     <div className="w-full min-h-screen">
      <TopSection content={content}/>
          <div className="flex gap-10 items-center justify-center py-20">
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
              <img src={pricing2}/>
              <h1>No any hidden fees pay</h1> 
             </div>
               <div className="flex text-lg font-sans gap-5 text-[#010535]">
              <img src={pricing3}/>
              <h1>You can cancel anytime</h1> 
             </div>
            </div>
     </div>
    )
}
export default Prices