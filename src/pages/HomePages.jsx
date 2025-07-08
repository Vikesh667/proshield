import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSection from "../component/HereSection";
import Video from "../component/home/Video";
import AboutSection from "../component/about/AboutSection";
import OurServices from "../component/services/OurServices";
import Feature from "../component/Feature";
import OurProject from "../component/project/OurProject";
import WhyChooseUs from "../component/choose/WhyChooseUs";
import OurSecurity from "../component/security/OurSecurity";
import PricePlan from "../component/price/PricePlan";
import Testmonial from "../component/testmonial/Testmonial";
import Team from "../component/expertteam/Team";
import Faq from "../component/faq/Faq";
import LatestProjects from "../component/project/LatestProjects";
import PopComponent from "../atom/PopComponent";

const HomePages = () => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [content, setContent] = useState(null);
  const [component,setComponent]=useState(false)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Define which paths will show HeroSection
  const isCustomHome = ["/video", "/image", "/slider"].includes(location.pathname);
useEffect(()=>{
    setTimeout(()=>{
        setComponent(true)
    },500)
},[])
  return (
    <div className="relative overflow-hidden">
      {isCustomHome ? (
        <HeroSection setContent={setContent} setHovered={setHovered} />
      ) : (
        <Video setContent={setContent} setHovered={setHovered} />
      )}

      <AboutSection />
      <OurServices />
      <Feature />
      <OurProject setContent={setContent} setHovered={setHovered} />
      <WhyChooseUs />
      <OurSecurity />
      <PricePlan />
      <Testmonial setContent={setContent} setHovered={setHovered} />
      <Team setContent={setContent} setHovered={setHovered} />
      <Faq />
      <LatestProjects setContent={setContent} setHovered={setHovered} />
     {component &&   <PopComponent setComponent={setComponent}/>}
      {/* Custom Cursor */}
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: hovered ? "90px" : "8px",
          height: hovered ? "90px" : "8px",
          background: hovered
            ? "rgba(0, 0, 0, 0.7)"
            : "linear-gradient(to right, #1e40af, #60a5fa)",
          transition: "all 0.2s ease",
        }}
        className="fixed z-[9999] rounded-full pointer-events-none flex items-center justify-center text-white text-sm"
      >
        {hovered && content}
      </div>
    </div>
  );
};

export default HomePages;
