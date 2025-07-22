import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./siderbar/Sidebar";
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import Profile from "../../atom/Profile";
import { useMessages } from "./MessageProvider";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {messages}=useMessages()
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="w-full flex flex-col">
        <div className="w-full h-20 bg-gray-800 flex items-center justify-between px-10">
          <h1 className="text-lg lg:text-2xl text-white font-semibold font-sans">
            Admin Dashboard
          </h1>

          <div className="h-full flex gap-15 text-2xl text-white items-center relative">
            <div className="flex items-center justify-center  relative cursor-pointer">
              <Link to="/admin/dashboard/message">
                <FaBell className="text-3xl" />
              </Link>
              {messages.length >0 && (
                <span className="w-5 h-5 z-20 rounded-full bg-red-500 flex items-center justify-center text-sm absolute top-1 -right-1">
                 {messages.length}
                </span>
              )}
            </div>
            <Profile logout={logout} />
          </div>
          <button
            className="text-2xl text-white shadow lg:hidden"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
        <main className="w-full flex-1 scrollbar overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
