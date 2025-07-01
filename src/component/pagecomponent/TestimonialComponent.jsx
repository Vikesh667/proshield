import { testimonialCard, testimonials } from "../../constant/data"

const TestimonialComponent=()=>{
    return(
       <div className="w-full h-full grid grid-cols-3 gap-10 py-20 px-20  bg-gray-100/60 overflow-hidden">
         {
           testimonialCard.map((testimonial)=>(
            <div className="w-full h-full  flex flex-col gap-5 p-10 bg-white rounded-3xl ">
              <div className="w-full flex items-center justify-between" >
                 <img src={testimonial.logo}/>
                 <img src={testimonial.quote}/>
              </div>
              <div className="flex items-center justify-center">
              <p className="text-lg text-gray-500 opacity-75">
                {testimonial.para}
              </p>
              </div>
              <div className="flex items-center gap-5">
                <img className="w-15 h-15 rounded-full bg-center" src={testimonial.image}/>
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-xl text-indigo-950 font-bold">{testimonial.name}</h1>
                    <h2>{testimonial.profession}</h2>
                </div>
              </div>
            </div>
           ))
         }
       </div>
    )
}
export default TestimonialComponent