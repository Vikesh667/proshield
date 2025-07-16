
import { Outlet } from "react-router-dom";
import Sidebar from "./siderbar/Sidebar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Dashboard = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className="flex h-screen bg-gray-200">
       <Sidebar open={open} setOpen={setOpen}/>
      <div className="flex-1 flex flex-col bg-blue-400">
        <div className="bg-white w-full h-20 flex items-center justify-center text-[#010535] text-2xl">
           <button
           onClick={()=>setOpen(true)}
           className="flex items-center justify-center bg-blue-400 mr-20 lg:hidden"><IoMenu/></button>
          <h1>Admin Dashbord</h1>
         
          </div>
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
