import { useEffect } from "react";

const MouseHover = () => {
  const handleMove = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-500" onMouseMove={handleMove}>
         
    </div> 
  );
};
export default MouseHover;
