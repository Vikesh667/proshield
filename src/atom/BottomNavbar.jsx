import { useState } from "react";
import { navItem } from "../constant/data";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import { useAnimation, motion, AnimatePresence } from "framer-motion";

const BottomNavbar = () => {
  const [direction, setDirection] = useState("left");
  const [isRunning, setRunning] = useState(true);
  const controls = useAnimation();

  const toggleRunning = () => setRunning((prev) => !prev);
  const changeDirection = () =>
    setDirection((prev) => (prev === "left" ? "right" : "left"));

  return (
    <div className="flex flex-col justify-center">
      <AnimatePresence>
        {isRunning && (
          <motion.div
            className="w-full flex justify-center overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "4rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Marquee
              direction={direction}
              setDirection={setDirection}
              isRunning={isRunning}
              setRunning={setRunning}
              controls={controls}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className="w-full h-16 lg:h-24 flex justify-between items-center bg-white shadow-md px-8 relative z-50"
      >
        <div className="lg:ml-20">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>

        <ul className="lg:flex gap-10 relative hidden">
          {navItem.map((item) => (
            <li key={item.text} className="group relative">
              <a
                href={item.link}
                className="font-light text-lg cursor-pointer font-serif text-black/80 capitalize hover:text-blue-400"
              >
                {item.text}
              </a>
              {item.submenu && (
                <div className="bg-gradient-to-r from-blue-700 to-blue-300 rounded-2xl opacity-0 w-56 absolute mt-3 left-0 top-full transform scale-y-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.url}
                      className="block text-white px-4 py-2 rounded text-md font-semibold font-serif hover:text-black hover:ml-2 transition-all duration-500"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mr-20 hidden lg:flex gap-5">
          <Button text="Get Started" />
          <Button text={isRunning ? "Off" : "On"} onClick={toggleRunning} />
          {isRunning && <Button text={direction} onClick={changeDirection} />}
        </div>

        <button className="block lg:hidden">Menu</button>
      </nav>
    </div>
  );
};

export default BottomNavbar;
