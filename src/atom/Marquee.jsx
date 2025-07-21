import React, { useEffect, useRef, useState } from "react";
import {  useAnimationFrame } from "framer-motion";
const Marquee = ({ speed = 50, direction = "left" }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [marquee, setMarquee] = useState([]);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const scrollWidth = content.offsetWidth / 2;
    const deltaX = (speed * delta) / 500;

    if (direction === "left") {
      x.current -= deltaX;
      if (x.current <= -scrollWidth) x.current = 0;
    } else {
      x.current += deltaX;
      if (x.current >= 0) x.current = -scrollWidth;
    }

    content.style.transform = `translateX(${x.current}px)`;
  });
  const getMarquees = async () => {
    const responve = await fetch("https://proshieldcybersecurity.onrender.com/api/marquee/");
    const data = await responve.json();
    setMarquee(data.marquees);
    console.log(data.marquees);
  };
  useEffect(() => {
    getMarquees();
  }, []);
  const MarqueeContent = () => (
    <div className="flex gap-10">
      {marquee.map((image) => (
        <div key={image._id} className="flex items-center gap-3 min-w-max px-4">
          <img src={image.imageUrl} alt="" className="w-8 h-8 object-contain" />
          <p className="whitespace-nowrap text-sm text-cyan-200 font-medium">
            {image.title}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0f172a] py-2 border-y border-cyan-500"
    >
      <div ref={contentRef} className="flex w-max">
        {/* Duplicate content for seamless scroll */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default Marquee;
