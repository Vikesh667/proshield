const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Welcome to ProShield Admin</h2>
      
      {/* Example widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">🛡 Active Threats</h3>
          <p className="text-2xl">23</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">👥 Users</h3>
          <p className="text-2xl">158</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">📄 Reports</h3>
          <p className="text-2xl">12</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
