import { useEffect, useState } from "react";

const ProgressBar = ({count,onProgressChange}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < count) {
          const updated= prev + 1;
          onProgressChange?.(updated)
          return updated
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);
  }, []);
  return (
    <div className="bg-gray-300 lg:w-96 h-5 rounded-full overflow-hidden relative">
      <div
        className="h-full bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-400 rounded-full  "
        style={{ width: `${progress}%`, transition: "width 0.1s" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
