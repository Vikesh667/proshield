import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const ScrollCounter = ({ from = 0, to = 25, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = from;
    const step = () => {
      start += 1;
      if (start <= to) {
        setCount(start);
        setTimeout(step, (duration * 1000) / (to - from));
      }
    };
    step();
  }, [isInView, from, to, duration]);

  return (
    <h1 ref={ref} className="text-5xl font-bold font-sans text-white text-center z-10">
      {count}+
    </h1>
  );
};

export default ScrollCounter;
