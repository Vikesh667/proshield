import { chooseCounter } from "../constant/data";
const ChooseCounter = () => {
 
  return (
    <div className="w-full h-full flex  justify-around py-10 gap-5">
      {chooseCounter.map((ccounter) => (
        <div className="flex flex-col items-center w-84 gap-5 border-r-[0.1px] border-gray-300/30 last:border-r-0">
          <img
            src={ccounter.icon}
            alt="icon"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-5xl font-semibold text-white">{ccounter.count}</h1>
          <h1 className="text-xl text-white">{ccounter.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default ChooseCounter;
