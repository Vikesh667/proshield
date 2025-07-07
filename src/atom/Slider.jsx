import { useEffect, useRef, useState } from "react";

const Slider = ({ serviceImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalSlides = serviceImage.length;
  const extendedSlides = [...serviceImage, serviceImage[0]];
  const sliderRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex]);

  const handleDotClick = (i) => {
    setTransitionEnabled(true);
    setCurrentIndex(i);
  };

  return (
    <div className="relative w-full lg:h-[550px] overflow-hidden rounded-4xl">
      <div
        ref={sliderRef}
        className={`flex h-full ${
          transitionEnabled
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{
          width: `${extendedSlides.length * 100}%`,
          transform: `translateX(-${
            (100 / extendedSlides.length) * currentIndex
          }%)`,
        }}
      >
        {extendedSlides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className="h-full object-cover"
            style={{
              width: `${100 / extendedSlides.length}%`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {serviceImage.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex % totalSlides === i
                ? "border-blue-600"
                : "border-gray-300"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex % totalSlides === i
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Slider;
