import { useState } from "react";

const Settings = () => {
  const notificationStart = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/start", {
        method: "Post",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = response.json();
    } catch (error) {
      console.log("starting notification",error)
    }
  };
  const notificationStop = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/stop", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = response.json();
    } catch (error) {
      console.log("starting notification",error)
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-64 h-32 bg-white rounded-2xl shadow-lg flex flex-col gap-5 items-center p-5">
        <h1> Notification Settings</h1>
        <div className="flex gap-5">
          <button
            onClick={notificationStart}
            className="p-2 bg-green-500 rounded-full shadow-lg text-sm text-white hover:scale-90 transition duration-300 cursor-pointer"
          >
            On
          </button>
          <button
           onClick={notificationStop}
          className="p-2 bg-red-500 rounded-full shadow text-sm text-white  hover:scale-90 transition duration-300 cursor-pointer">
            Off
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
