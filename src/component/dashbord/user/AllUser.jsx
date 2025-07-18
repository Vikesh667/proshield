import { useEffect, useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message,setMessage]=useState(null)

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users");
      const data = await response.json();
      setUsers(data.user);
    } catch (error) {
      setError(error);
    }
  };
  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:4000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // <- Make sure this is correct
          "Content-Type": "application/json",
        },
      });
      const data = response.json();
      // setMessage(data)
      getAllUsers();
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="w-full h-screen p-10">
      <h1 className="text-white text-2xl text-center font-sans font-semibold mb-10">
        All Users
      </h1>
      {message && <p className="text-green-400 text-lg font-sans capitalize">{message}</p>}
      <div className="w-full h-full flex flex-col gap-10">
        {users.map((user) => (
          <div
            key={user._id}
            className="w-full  flex gap-5 items-center justify-between p-5 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-500"
          >
            <img
              className="w-16 h-16 rounded-full object-cover mix-blend-color-burn"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0gExaohZHdZW3609F12nUmVc14WXYNx_w&s"
            />
            <div className="flex gap-5 justify-start w-1/3">
              <h1 className="text-start capitalize">{user.name}</h1>
              <h1 className="text-start capitalize">{user.email}</h1>
            </div>
            <div className="flex gap-10">
              <button
                onClick={() => deleteUser(user._id)}
                className="p-2 bg-red-500 rounded-full shadow-lg text-sm text-white hover:scale-90 transition duration-300 cursor-pointer"
              >
                <FiDelete />
              </button>
              <button className="p-2 bg-yellow-500 rounded-full shadow text-sm text-white hover:scale-90 transition duration-300 cursor-pointer">
               <Link to={`/admin/dashboard/edit/${user._id}`}> <FiEdit /></Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllUser;
