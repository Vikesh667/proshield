import { chooseCounter } from "../constant/data";
import ScrollCounter from "./ScrollCounter"; // Adjust the import path if needed

const ChooseCounter = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 place-items-center lg:grid-cols-4 py-4   lg:py-10 gap-5">
     {chooseCounter.map((ccounter, index) => (
  <div
    key={index}
    className={`flex flex-col items-center gap-5 lg:w-84 w-full  
      ${index % 2 === 0 ? "border-r-[0.1px]" : ""} 
      ${index < 3 ? "lg:border-r-[0.1px]" : "lg:border-r-0"} 
      border-gray-300/30`}
  >
    <img
      src={ccounter.icon}
      alt="icon"
      className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
    />

    <div className="text-xl text-center lg:text-5xl font-semibold text-white">
      <ScrollCounter to={ccounter.count} />
    </div>

    <h1 className="text-md text-center lg:text-xl text-white">{ccounter.text}</h1>
  </div>
))}
   </div>
  );
};

export default ChooseCounter;
