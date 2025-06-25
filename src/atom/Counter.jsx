import { useEffect, useState } from "react";
import { chooseCounter } from "../constant/data";

const Counter = ({  }) => {
  const [counter, setCounter] = useState(0);
  const arrya=chooseCounter.map((item)=>item.count)
  const count=[25,15,16,120]
  useEffect(() => {
    if (counter < count) {
      const timer = setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 50); // You can adjust speed here
      return () => clearTimeout(timer);
    }
  }, [counter]); // Include count in dependency

  return <span>{counter}</span>;
};

export default Counter;
