import { useEffect, useState } from "react";
import HeroSection from "../component/HereSection";
import AboutSection from "../component/about/AboutSection";
import OurServices from "../component/services/OurServices";
import Feature from "../component/Feature";
import OurProject from "../component/project/OurProject";
import WhyChooseUs from "../component/choose/WhyChooseUs";
import OurSecurity from "../component/security/OurSecurity";
import PricePlan from "../component/price/PricePlan";
import Testmonial from "../component/testmonial/Testmonial";

const HomePages = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Sections */}
      <HeroSection setContent={setContent} setHovered={setHovered} />
      <AboutSection />
      <OurServices />
      <Feature />
      <OurProject setContent={setContent} setHovered={setHovered}/>
      <WhyChooseUs />
      <OurSecurity />
      <PricePlan />
      <Testmonial setContent={setContent} setHovered={setHovered}/>
      {/* Floating Mouse Element */}
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: hovered ? "90px" : "12px",
          height: hovered ? "90px" : "12px",
          background: hovered
            ? "rgba(0, 0, 0, 0.7)" // black transparent when hovering
            : "linear-gradient(to right, #1e40af, #60a5fa)", // blue gradient by default
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
