import { useContext } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GetUser } from "./UserProvider";

const AllUser = () => {
  const { users, setUsers, deleteUse, message, error } = useContext(GetUser);
  return (
    <GetUser.Provider value={{ users, setUsers }}>
      <div className="w-full min-h-screen px-5 bg-gray-300">
        <h1 className="text-[#010535] text-2xl text-center font-sans font-semibold  py-5">
          All Users
        </h1>
        {message && (
          <p className="text-green-400 text-lg font-sans capitalize">
            {message}
          </p>
        )}
        <div className="w-full h-full flex flex-col gap-10 py-5">
          {users.map((user) => (
            <div
              key={user._id}
              className="w-full  flex flex-col lg:flex-row  gap-5 items-center justify-between p-5 bg-white rounded-lg hover:bg-gray-800 hover:text-white transform hover:scale-95 transition-all duration-500"
            >
             {user.image ?  <img
                className="w-16 h-16 rounded-full object-cover"
                src={user.image}
              /> : <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0gExaohZHdZW3609F12nUmVc14WXYNx_w&s"
              />}
              <div className="flex gap-5 justify-start w-full lg:w-1/3 flex-col lg:flex-row">
                <h1 className="text-center lg:text-start capitalize">
                  {user.name}
                </h1>
                <h1 className="text-center lg:text-start capitalize">
                  {user.email}
                </h1>
              </div>
              <div className="flex gap-10">
                <button
                  onClick={() => deleteUse(user._id)}
                  className="p-2 bg-red-500 rounded-full shadow-lg text-sm text-white hover:scale-90 transition duration-300 cursor-pointer"
                >
                  <FiDelete />
                </button>
                <button className="p-2 bg-yellow-500 rounded-full shadow text-sm text-white hover:scale-90 transition duration-300 cursor-pointer">
                  <Link to={`/admin/dashboard/edit/${user._id}`}>
                    <FiEdit />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GetUser.Provider>
  );
};

export default AllUser;
