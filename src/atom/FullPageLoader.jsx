import React from "react";
import loader from "../assets/loader.svg";

const FullPageLoader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: "linear-gradient(135deg, #1d4ed8, #38bdf8)", 
      }}
    >

      <div className="relative w-24 h-24">
   
        <div className="absolute inset-0 rounded-full border-[1px] border-transparent border-t-white animate-spin-slow" />

        <div className="absolute inset-0 rounded-full border-[1px] border-transparent border-b-white animate-spin-slow delay-[0.5s]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <img src={loader} alt="Loading..." className="w-10 h-10 object-contain" />
        </div>
      </div>

      <p className="mt-4 text-white text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default FullPageLoader;
