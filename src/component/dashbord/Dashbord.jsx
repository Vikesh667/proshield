
import { Outlet } from "react-router-dom";
import Sidebar from "./siderbar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
       <Sidebar/>
      <div className="flex-1 flex flex-col bg-blue-400">
        <div className="bg-white w-full h-20 flex items-center justify-center text-[#010535] text-2xl"><h1>Admin Dashbord</h1></div>
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
