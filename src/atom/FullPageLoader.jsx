import React from "react";
import loader from "../assets/loader.svg";

const FullPageLoader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: "linear-gradient(135deg, #1d4ed8, #38bdf8)", // blue-700 to sky-400
      }}
    >
      {/* Spinner wrapper */}
      <div className="relative w-24 h-24">
        {/* Top arc */}
        <div className="absolute inset-0 rounded-full border-[1px] border-transparent border-t-white animate-spin-slow" />

        {/* Bottom arc (rotated 180°) */}
        <div className="absolute inset-0 rounded-full border-[1px] border-transparent border-b-white animate-spin-slow delay-[0.5s]" />

        {/* Static image in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={loader} alt="Loading..." className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Optional loading text */}
      <p className="mt-4 text-white text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default FullPageLoader;
