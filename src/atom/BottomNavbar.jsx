import { useEffect, useState } from "react";
import { navItem } from "../constant/data";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { socket } from "./Socket";


const BottomNavbar = () => {
  const [direction, setDirection] = useState("left");
  const [isRunning, setRunning] = useState(false);
  const controls = useAnimation();
  const [menu, setMenu] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const navigate=useNavigate()
  const handleMenu = () => {
    setMenu(!menu);
    setTranslate(100);
  };
  const logout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

 useEffect(() => {
  const fetchStatus = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/status");
      const data = await response.json();

      setRunning(data.data.isNotification);
      setDirection(data.data.direction || "left"); 
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  fetchStatus();

  if (!socket.connected) {
    socket.connect();
  }

  socket.on("notification", (data) => {
    console.log("Real-time update:", data);
    setRunning(data.isNotification);
    setDirection(data.direction);
  });


  return () => {
    socket.off("notification");
  };
}, []);

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


      <nav className="w-full h-16 lg:h-24 flex justify-between items-center bg-white shadow-md px-8 relative z-50">
        <div className="lg:ml-20">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>

        <ul className="lg:flex gap-10 relative hidden">
          {navItem.map((item) => (
            <li key={item.text} className="group relative">
              <Link
                to={item.link}
                className="font-light text-lg cursor-pointer font-serif text-black/80 capitalize hover:text-blue-400"
              >
                {item.text}
              </Link>
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

        {menu && (
          <div className="lg:hidden bg-gradient-to-r from-indigo-700 via-blue-400 to-sky-400 w-full absolute left-0 top-15 p-10 transition duration-500">
            <ul className="flex flex-col gap-3 relative">
              {navItem.map((item, index) => (
                <li key={item.text} className="relative">
                  <div
                    onClick={() => toggleSubmenu(index)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <Link
                      to={item.link}
                      className=" text-md font-sans text-white font-semibold capitalize hover:text-blue-400"
                    >
                      {item.text}
                    </Link>

                    {item.submenu && (
                      <span className="text-black ml-2">
                        {openSubmenuIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                    )}
                  </div>

                  {item.submenu && openSubmenuIndex === index && (
                    <div className="bg-gradient-to-r from-blue-700 to-blue-300 rounded-2xl w-full mt-2 transition-all duration-500 ease-in-out overflow-hidden">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.url}
                          className="block text-white px-4 py-2 text-md font-semibold font-serif hover:text-black hover:ml-2 transition-all duration-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
               <button
           onClick={logout}
          className="bg-red-500 py-3 px-5 rounded-lg text-md font-sans font-semibold text-white shadow-lg hover:scale-90 transition duration-300 cursor-pointer">Log out</button>
            </ul>
          </div>
        )}

        <div className="mr-20 hidden lg:flex gap-5">
          <Link to="/contact">
            <Button text="Get Started" />
          </Link>
          <button
           onClick={logout}
          className="bg-red-500 py-3 px-5 rounded-lg text-md font-sans font-semibold text-white shadow-lg hover:scale-90 transition duration-300 cursor-pointer">Log out</button>
        </div>

        <button
          onClick={handleMenu}
          className="block lg:hidden p-1 bg-gradient-to-r from-blue-700 to-blue-300 text-2xl text-white rounded-lg"
        >
          {menu ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </nav>
    </div>
  );
};

export default BottomNavbar;
