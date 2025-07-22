import { Link } from "react-router-dom";
import { useMessages } from "./MessageProvider";
import { useContext } from "react";
import { GetUser } from "./user/UserProvider";

const DashboardHome = () => {
  const {messages}=useMessages()
  const {users}=useContext(GetUser)
  return (
    <div className="space-y-6 px-5">
      <h2 className="text-2xl font-bold text-gray-800">
        Welcome to ProShield Admin
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">🛡 Active Threats</h3>
          <p className="text-2xl">23</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">
            <Link to="/admin/dashboard/users">👥 Users</Link>
          </h3>
          <p className="text-2xl">{users.length}</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-semibold"><Link to="/admin/dashboard/project">Projects Done</Link></h3>
          <p className="text-2xl">6</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Client</h3>
          <p className="text-2xl">25k+</p>
        </div>
        <div className="bg-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-semibold"><Link to="/admin/dashboard/message">Messages</Link></h3>
          <p className="text-2xl">{messages.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
