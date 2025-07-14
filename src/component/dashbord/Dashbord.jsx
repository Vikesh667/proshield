
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
       <h1>Sidebar</h1>
      <div className="flex-1 flex flex-col bg-blue-400">
        <h1>Header</h1>
        <main className="p-4 overflow-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
