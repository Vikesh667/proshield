import { Outlet } from "react-router-dom";
import Sidebar from "./siderbar/Sidebar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-screen flex overflow-hidden">
         <Sidebar open={open} setOpen={setOpen} />
      <div className="w-full h-full">
        <div className="w-full h-20 bg-gray-800 flex items-center px-10">
          <h1 className="text-2xl text-white font-semibold font-sans">
            Admin Dashbord
          </h1>
        </div>
        <main className="w-full h-full p-5">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
