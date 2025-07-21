import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./siderbar/Sidebar";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="w-full flex flex-col">
        <div className="w-full h-20 bg-gray-800 flex items-center justify-between px-10">
          <h1 className="text-2xl text-white font-semibold font-sans">
            Admin Dashboard
          </h1>
          <button className="text-2xl text-white shadow lg:hidden" onClick={()=>setOpen(true)}><FiMenu/></button>
        </div>
        <main className="w-full flex-1 scrollbar overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard