import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({
  data = [],
  openHeight = "30vh",
  closedHeight = "10vh",
  bgOpen = "bg-gradient-to-l from-blue-500 to-indigo-800",
  bgClosed = "bg-white",
  textOpen = "text-white",
  textClosed = "text-[#010535]",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-5 ">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        const height = isOpen ? openHeight : closedHeight;
        const scaleY = isOpen ? 1 : 0;

        return (
          <div
            key={index}
            className={`w-full rounded-3xl flex flex-col relative overflow-hidden gap-5 transition-all duration-500 ${
              isOpen ? bgOpen : bgClosed
            }`}
            style={{ height }}
          >
            <div className="w-full flex items-center justify-between mt-4 lg:mt-7 transition duration-500 px-5">
              <h1 className={`text-md lg:text-xl font-semibold ${isOpen ? textOpen : textClosed}`}>
                {item.heading}
              </h1>
              <button onClick={() => handleToggle(index)}>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </div>

            <div
              className="w-full  h-52 flex flex-col justify-center transition-all duration-500 origin-bottom"
              style={{ transform: `scaleY(${scaleY})` }}
            >
              <hr className="w-full border-[0.1px] border-amber-50 opacity-15 mb-2" />
              <p className={`text-md lg:text-lg tracking-tighter mb-5 px-11 lg:py-3 ${textOpen}`}>
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
