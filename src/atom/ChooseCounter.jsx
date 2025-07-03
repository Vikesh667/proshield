import { chooseCounter } from "../constant/data";
import ScrollCounter from "./ScrollCounter"; // Adjust the import path if needed

const ChooseCounter = () => {
  return (
    <div className="w-full h-full flex justify-around py-10 gap-5">
      {chooseCounter.map((ccounter, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-84 gap-5 border-r-[0.1px] border-gray-300/30 last:border-r-0"
        >
          <img
            src={ccounter.icon}
            alt="icon"
            className="w-16 h-16 object-contain"
          />

          {/* 👇 Counter animation */}
          <h1 className="text-5xl font-semibold text-white">
            <ScrollCounter to={ccounter.count} />
          </h1>

          <h1 className="text-xl text-white">{ccounter.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default ChooseCounter;
