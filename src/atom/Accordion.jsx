import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faq } from "../constant/data";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which index is open

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-full flex flex-col items-center mt-30 ml-10 gap-10">
      {faq.map((item, index) => {
        const isOpen = openIndex === index;
        const height = isOpen ? "30vh" : "10vh";
        const scaleY = isOpen ? 1 : 0;

        return (
          <div
            key={index}
            className={`w-full rounded-3xl flex flex-col relative overflow-hidden gap-5 transition-all duration-500 ${
              isOpen ? "bg-gradient-to-l from-blue-500 to-indigo-800" : "bg-white"
            }`}
            style={{ height }}
          >
            <div className="w-full flex items-center justify-between mt-7 transition duration-500 px-5">
              <h1 className={`text-xl font-semibold ${isOpen ? "text-white" : "text-[#010535]"}`}>
                {item.heading}
              </h1>
              <button onClick={() => handleToggle(index)}>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </div>

            <div
              className="w-full h-52 flex flex-col justify-center transition-all duration-500 origin-bottom"
              style={{ transform: `scaleY(${scaleY})` }}
            >
              <hr className="w-full border-[0.1px] border-amber-50 opacity-15 mb-2" />
              <p className="text-lg tracking-tighter text-white px-11 py-3">
                {item.para}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
