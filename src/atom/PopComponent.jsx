import { motion } from "framer-motion";
import { useState } from "react";

const PopComponent = ({ setComponent }) => {
  const [viewHeight, setViewHeight] = useState({
    width: 50, 
    height:50, 
  });

  const [position, setPosition] = useState(50); 
  const [topPos, setTopPos] = useState(50); 

const handleLeft=()=>{
  setPosition(0)
  setTopPos(20)
}
const handleRight=()=>{
  setPosition(50)
  setTopPos(20)
}
const handleCenter=()=>{
  setPosition(25)
  setTopPos(40)
}
  return (
    <motion.div
      className="fixed z-50 flex items-center justify-center gap-6 
                 p-4 sm:p-6 rounded-xl text-white bg-red-500/90 shadow-lg 
                 overflow-auto "
      style={{
        left: `${position}%`, 
        top: `${topPos}%`,
        width: `${viewHeight.width}vw`,
        height: `${viewHeight.height}vh`,
        maxWidth: "90vw",
        maxHeight: "90vh",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl sm:text-2xl text-center text-white">Side Effect</h1>

      <button
        onClick={() => setComponent(false)}
        className="text-white border px-3 py-1 rounded 
                   hover:bg-white hover:text-red-800 transition absolute top-2 right-2"
      >
        X
      </button>
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>right</button>
      <button onClick={handleCenter}>center</button>
    </motion.div>
  );
};

export default PopComponent;
