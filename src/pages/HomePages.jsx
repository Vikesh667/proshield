import { useEffect, useState } from "react";
import HeroSection from "../component/HereSection"
import { BsTranslate } from "react-icons/bs";
import AboutSection from "../component/about/AboutSection";
import OurServices from "../component/services/OurServices";
import Feature from "../component/Feature";

const HomePages=()=>{
      const [position, setPosition] = useState({ x: 0, y: 0 });
      useEffect(() => {
        const mouseMoveHandle = (e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        };
        window.addEventListener("mousemove", mouseMoveHandle);
        return () => {
          window.removeEventListener("mousemove", mouseMoveHandle);
        };
      }, []);
    return(
        <div className="relative overflow-hidden">
            <HeroSection/>
            <AboutSection/>
            <OurServices/>
            <Feature/>
         {/* <div
          style={{ left:`${position.x}px`, top: `${position.y}px`,
           transform:"translate(-100%,-100%)"
        }}
          className="w-3 h-3 rounded-full bg-gradient-to-r bg-blue-700 to-blue-400 absolute z-20 top-0 left-0"
        ></div> */}
        </div>
    )
}
export default HomePages