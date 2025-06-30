import TopSection from "../atom/TopSection"
import OurServices from "../component/services/OurServices"
import WhyChooseUs from "../component/choose/WhyChooseUs"
import Testmonial from "../component/testmonial/Testmonial"
import Faq from "../component/faq/Faq"
const Services=()=>{
    const content={
        heading:"Our Services",
        text:"Service"
    }
    return(
        <div className="">
         <TopSection content={content}/>
         <OurServices/>
         <WhyChooseUs/>
         <Testmonial/>
         <Faq/>
        </div>
    )
}
export default Services