import { Link, useNavigate } from "react-router-dom"
import logo from "../../../assets/company-logo.svg"
const Sidebar=()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
         navigate("/login")
    }
    return(
     <aside className="w-64 h-screen bg-gray-900 p-6 space-y-4">
      <img src={logo} alt="Proshield" />
      <nav className="space-y-3 flex flex-col items-start text-white gap-3 mt-10">
          <Link to="/admin/dashboard" className=" sidebar">📊 Dashboard</Link>
        <Link to="/admin/monitoring" className="sidebar">🖥️ System Monitoring</Link>
        <Link to="/admin/threats" className="sidebar">🚨 Threat Logs</Link>
        <Link to="/admin/scans" className="sidebar">🔍 Vulnerability Scans</Link>
        <Link to="/admin/users" className="sidebar">👤 User Management</Link>
        <Link to="/admin/incidents" className="sidebar">📝 Incidents</Link>
        <Link to="/admin/tools" className="sidebar">🛠️ Tools & Utilities</Link>
        <Link to="/admin/dashboard/settings" className="sidebar">⚙️ Settings</Link>
        <Link to="/admin/profile" className="sidebar">👨‍💼 Profile</Link>
        <button 
        onClick={handleLogout}
        className="text-red-400">🚪 Logout</button>
      </nav>
     </aside>
    )
}
export default Sidebar