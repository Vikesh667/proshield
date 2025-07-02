// src/hooks/useSmoothPagination.js
import { useEffect, useRef, useState } from "react";

const useSmoothPagination = (interval = 3000, maxPages = 5) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % maxPages);
      }, interval);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, interval, maxPages]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  const goNext = () => setCurrentPage((prev) => (prev + 1) % maxPages);
  const goPrev = () =>
    setCurrentPage((prev) => (prev - 1 + maxPages) % maxPages);

  return { currentPage, goNext, goPrev, pause, resume };
};

export default useSmoothPagination;
