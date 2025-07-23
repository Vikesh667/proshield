import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/company-logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const user = localStorage.getItem("token");
    const decode = jwtDecode(user);
    setUser(decode);
  }, []);
  return (
    <>
      <aside className="w-84 h-full bg-gray-900 p-6 space-y-4 hidden lg:block scrollbar overflow-y-scroll">
        <img src={logo} alt="Proshield" />
        <nav className="space-y-3 flex flex-col items-start text-white gap-3 mt-10">
          <Link to="/admin/dashboard" className="sidebar">
            📊 Dashboard
          </Link>
          <Link to="/admin/monitoring" className="sidebar">
            🖥️ System Monitoring
          </Link>
          <Link to="/admin/threats" className="sidebar">
            🚨 Threat Logs
          </Link>
          <Link to="/admin/scans" className="sidebar">
            🔍 Vulnerability Scans
          </Link>
          <Link to="/admin/dashboard/users" className="sidebar">
            👤 User Management
          </Link>
          <Link to="/admin/incidents" className="sidebar">
            📝 Incidents
          </Link>
          <Link to="/admin/tools" className="sidebar">
            🛠️ Tools & Utilities
          </Link>
          <Link
            to="/admin/dashboard/project"
            className="sidebar flex items-center gap-2"
            onClick={handleClose}
          >
            <GrProjects />
            Project
          </Link>
          <Link to="/admin/dashboard/settings" className="sidebar">
            ⚙️ Settings
          </Link>
          <Link to="/admin/profile" className="sidebar">
            👨‍💼 Profile
          </Link>
          <button onClick={handleLogout} className="text-red-400 sidebar">
            🚪 Logout
          </button>
        </nav>
      </aside>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.aside
              className="w-64 h-screen bg-gray-900 p-6 space-y-4 lg:hidden fixed top-0 left-0 z-50 scrollbar overflow-y-scroll"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center">
                <img src={logo} alt="Proshield" className="h-10" />
                <button onClick={handleClose} className="text-2xl text-white">
                  ✖
                </button>
              </div>
              <nav className="space-y-3 flex flex-col items-start text-white gap-3 mt-10">
                <div className="w-full h-auto flex flex-col items-center gap-3 ">
                  <img
                    className="w-16 h-16 object-cover bg-center rounded-full"
                    src={user.image}
                    alt={user.name}
                  />
                  <Link
                    to={`/admin/dashboard/edit/${user.userId}`}
                    onClick={handleClose}
                    className="text-sm mt-2 capitalize text-white opacity-80 "
                  >Profile</Link>
                </div>
                <Link
                  to="/admin/dashboard"
                  className="sidebar"
                  onClick={handleClose}
                >
                  📊 Dashboard
                </Link>
                <Link
                  to="/admin/monitoring"
                  className="sidebar"
                  onClick={handleClose}
                >
                  🖥️ System Monitoring
                </Link>
                <Link
                  to="/admin/threats"
                  className="sidebar"
                  onClick={handleClose}
                >
                  🚨 Threat Logs
                </Link>
                <Link
                  to="/admin/scans"
                  className="sidebar"
                  onClick={handleClose}
                >
                  🔍 Vulnerability Scans
                </Link>
                <Link
                  to="/admin/dashboard/users"
                  className="sidebar"
                  onClick={handleClose}
                >
                  👤 User Management
                </Link>
                <Link
                  to="/admin/incidents"
                  className="sidebar"
                  onClick={handleClose}
                >
                  📝 Incidents
                </Link>
                <Link
                  to="/admin/tools"
                  className="sidebar"
                  onClick={handleClose}
                >
                  🛠️ Tools & Utilities
                </Link>
                <Link
                  to="/admin/dashboard/settings"
                  className="sidebar"
                  onClick={handleClose}
                >
                  ⚙️ Settings
                </Link>
                <Link
                  to="/admin/dashboard/client"
                  className="sidebar flex items-center gap-2"
                  onClick={handleClose}
                >
                  <FaUsers />
                  Client
                </Link>
                <Link
                  to="/admin/profile"
                  className="sidebar"
                  onClick={handleClose}
                >
                  👨‍💼 Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    handleClose();
                  }}
                  className="text-red-400 sidebar"
                >
                  🚪 Logout
                </button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
