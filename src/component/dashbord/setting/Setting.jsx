import { useEffect, useState } from "react";
import UpdateComponent from "./UpdateComponent";
import AddComponent from "./AddComponent";
import { RiImageEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Settings = () => {
  const [direction, setDirection] = useState("left");
  const [isRunning, setIsRunning] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(
          "https://proshieldcybersecurity.onrender.com/api/status"
        );
        const data = await response.json();
        setDirection(data.data.direction);
        setIsRunning(data.data.isNotification);
      } catch (error) {
        console.error("Error fetching notification status:", error);
      }
    };

    fetchStatus();
  }, []);

  const notificationStart = async () => {
    try {
      const response = await fetch(
        "https://proshieldcybersecurity.onrender.com/api/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ direction }),
        }
      );
      const data = await response.json();
      setIsRunning(true);
    } catch (error) {
      console.error("Error starting notification:", error);
    }
  };

  const notificationStop = async () => {
    try {
      const response = await fetch(
        "https://proshieldcybersecurity.onrender.com/api/stop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setIsRunning(false);
    } catch (error) {
      console.error("Error stopping notification:", error);
    }
  };

  const changeDirection = async (newDir) => {
    if (!isRunning) return;
    setDirection(newDir);
    try {
      await fetch("https://proshieldcybersecurity.onrender.com/api/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ direction: newDir }),
      });
    } catch (error) {
      console.error("Error changing direction:", error);
    }
  };

  const leftPosition = async () => {
    try {
      await fetch("http://localhost:4000/api/popup", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          position: {
            top: 22,
            left: 0,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const rightPosition = async () => {
    try {
      await fetch("http://localhost:4000/api/popup", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          position: {
            top: 22,
            left: 70,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const centerPosition = async (e) => {
    try {
      await fetch("http://localhost:4000/api/popup", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          position: {
            top: 22,
            left: 35,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  return (
   <div className="w-full h-full flex flex-col items-center lg:flex-row gap-10 lg:items-start bg-gray-300 p-5">
      <div className="w-64 h-32 bg-white rounded-2xl shadow-lg flex flex-col gap-5 items-center p-5">
        <h1 className="font-semibold text-lg">Notification Settings</h1>
        <div className="flex gap-5">
          <button
            onClick={notificationStart}
            className="p-2 bg-green-500 rounded-full shadow-lg text-sm text-white hover:scale-90 transition duration-300 cursor-pointer"
            disabled={isRunning}
          >
            On
          </button>
          <button
            onClick={notificationStop}
            className="p-2 bg-red-500 rounded-full shadow text-sm text-white hover:scale-90 transition duration-300 cursor-pointer"
            disabled={!isRunning}
          >
            Off
          </button>
          <button
            className="rounded-full shadow text-2xl text-[#010535] hover:scale-90 transition duration-300 cursor-pointer"
          >
           <Link to="/admin/dashboard/marquee"> <RiImageEditLine /></Link>
          </button>
        </div>
      </div>

      <div className="w-64 h-32 bg-white rounded-2xl shadow-lg flex flex-col gap-5 items-center p-5">
        <h1 className="font-semibold text-lg">Direction Control</h1>
        <div className="flex gap-5">
          <button
            onClick={() => changeDirection("left")}
            disabled={!isRunning}
            className={`py-2 px-5 rounded-2xl shadow-lg cursor-pointer transition ${
              direction === "left"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            } ${
              !isRunning ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-500"
            }`}
          >
            Left
          </button>
          <button
            onClick={() => changeDirection("right")}
            disabled={!isRunning}
            className={`py-2 px-5 rounded-2xl shadow-lg cursor-pointer transition ${
              direction === "right"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            } ${
              !isRunning ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-500"
            }`}
          >
            Right
          </button>
        </div>
      </div>
      <div className="w-64 h-32 bg-white rounded-2xl shadow-lg flex gap-5 items-center justify-center p-5">
        <button
          onClick={() => setUpdateShow(true)}
          className="py-3 px-5 bg-green-400 rounded-lg hover:scale-95 transition-all duration-300 text-white shadow-lg"
        >
          Edit
        </button>
        <button
          onClick={() => setAddShow(true)}
          className="py-3 px-5 bg-amber-400 rounded-lg hover:scale-95 transition-all duration-300 text-white shadow-lg"
        >
          Add
        </button>
      </div>
      {updateShow && <UpdateComponent setUpdateShow={setUpdateShow} />}
      {addShow && <AddComponent setAddShow={setAddShow} />}
    </div>
  );
};

export default Settings;
