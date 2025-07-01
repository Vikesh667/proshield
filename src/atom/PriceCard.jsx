import { HiOutlineBadgeCheck } from "react-icons/hi";
import Button from "../atom/Button";
const PriceCard = ({ price,index }) => {
  return (
    <div className={`w-96 h-auto flex flex-col gap-[0.715px]  rounded-4xl bg-white border-[1px] border-gray-200`}>
      <div className="w-full h-44 bg-gradient-to-r bg-indigo-500 via-80% to-blue-400 rounded-t-4xl p-5 flex flex-col gap-5">
        <h1 className="text-white text-xl">{price.plan}</h1>
        <h2 className="text-white text-5xl font-semibold">
          {price.premium}
          <span className="text-white/60 text-sm">/per month </span>
        </h2>
        <h3 className="text-lg text-white/70">{price.text}</h3>
      </div>
      <div
        className={`flex flex-col gap-5 p-5 py-10 ${
          index === 1
            ? " bg-gradient-to-r bg-indigo-500 via-80% to-blue-400 rounded-b-4xl text-white"
            : "odd:bg-blue-500 "
        }`}
      >
        {price.list.map((lis) => (
          <h1 key={lis} className={`flex items-center gap-3 text-lg opacity-70`}>
            <HiOutlineBadgeCheck className="text-3xl stroke-[url(#iconGradientStroke)] stroke-[2px] fill-none" />
            {lis}
          </h1>
        ))}
        <div className="mt-10 px-3">
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
