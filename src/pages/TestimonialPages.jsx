import TopSection from "../atom/TopSection"
import WhyChooseUs from "../component/choose/WhyChooseUs"
import Faq from "../component/faq/Faq"
import TestimonialComponent from "../component/pagecomponent/TestimonialComponent"

const TestimonialPages=()=>{
    const content={
        heading:"Testimonial",
        text:"Testimonials"
    }
    return(
        <div className="w-full h-full overflow-hidden">
        <TopSection content={content}/>
        <TestimonialComponent/>
        <WhyChooseUs/>
        <Faq/>
        </div>
    )
}
export default TestimonialPages