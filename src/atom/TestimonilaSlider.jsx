import Slider from "react-slick";
import { testimonials } from "../constant/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import companylogo from "../assets/company-logo.svg";
import quote from "../assets/testimonial-quote.svg";

const TestimonilaSlider = ({ setContent, setHovered }) => {

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute -bottom-7 right-36 lg:bottom-10 lg:right-16 z-50 p-2 bg-white/30 text-white  rounded-full hover:bg-white/50 transition"
      onClick={onClick}
    >
      <FaArrowLeft size={14} />
    </button>
  );

  
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute -bottom-7 right-22  lg:bottom-10 lg:right-5 z-50 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition"
      onClick={onClick}
    >
      <FaArrowRight size={14} />
    </button>
  );

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative  lg:max-w-xl w-full h-[70vh] flex items-center justify-center z-10 bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-300 rounded-3xl lg:rounded-br-none lg:p-5">
      <div
        className="w-full h-full flex flex-col gap-10"
        onMouseEnter={() => {
          setHovered(true);
          setContent(
            <div className="flex flex-col items-center">
              <span className="text-sm">Drag</span>
            </div>
          );
        }}
        onMouseLeave={() => {
          setHovered(false);
          setContent(null);
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 text-white h-full p-3 lg:p-8 "
            >
             
              <div className="w-full flex items-center justify-between mb-4">
                <img src={companylogo} className="h-8 w-auto" />
                <img src={quote} className="h-6 w-6" />
              </div>

           
              <div className="flex flex-col gap-4">
                <h3 className="text-sm lg:text-lg font-medium leading-relaxed opacity-90 tracking-tight">
                  {testimonial.para}
                </h3>
                <h3 className="text-sm lg:text-lg font-medium leading-relaxed opacity-90 tracking-tight">
                  {testimonial.para1}
                </h3>
              </div>

            
              <div className="flex items-center gap-4 mt-5">
                <img
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                  <h3 className="text-sm opacity-75">
                    {testimonial.profession}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonilaSlider;
