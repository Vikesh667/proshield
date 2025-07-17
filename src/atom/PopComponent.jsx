import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopComponent = ({ setComponent }) => {
  const [viewSize, setViewSize] = useState({ width: 70, height: 40 });
  const [position, setPosition] = useState({ left: 50, top: 50 }); // default center
  const [isCenterMode, setIsCenterMode] = useState(false);
  const  [text,setText]=useState(null)
  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      setIsCenterMode(width <= 768);
    };

    const getPosition = async () => {
      try {
        const res = await fetch("https://proshieldcybersecurity.onrender.com/api/getpops");
        const data = await res.json();
        console.log(data)
        setPosition({
          left: data?.position?.position?.left ?? 50,
          top: data?.position?.position?.top ?? 50,
        });
        setText(data.position.position.text)
      } catch (error) {
        console.error("Position fetch error:", error);
      }
    };

    getPosition();
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);
  const style = isCenterMode
    ? {
        left: "16%",
        top: "20%",
        transform: "translate(-50%, -50%)",
      }
    : {
        left: `${position.left}%`,
        top: `${position.top}%`,
        transform: "translate(-50%, -50%)",
      };

  return (
    <motion.div
      className="fixed z-50 p-4 sm:p-6 flex flex-col items-center justify-center gap-6 
                 rounded-xl text-white bg-gray-800 shadow-lg overflow-auto"
      style={{
        ...style,
        width: `${viewSize.width}vw`,
        height: `${viewSize.height}vh`,
        maxWidth: "60vh",
        maxHeight: "60vh",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-sm lg:text-xl text-center md:text-2xl">
       {text}
      </h1>

      <button
        onClick={() => setComponent(false)}
        className="text-white lg:border lg:px-3 lg:py-1 rounded 
                   hover:bg-white hover:text-red-800 transition absolute top-2 right-2"
      >
        X
      </button>

      <button className="py-3 px-5 rounded-full bg-red-600 tracking-wide hover:bg-red-400 hover:scale-110 transition duration-500">
        <Link to="/contact">Subscribe</Link>
      </button>
    </motion.div>
  );
};

export default PopComponent;
