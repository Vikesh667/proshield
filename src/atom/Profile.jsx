import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
const Profile = ({logout}) => {
  const [user, setUser] = useState([]);
  const [showProfile, setShowProfiles] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("token");
    const decode = jwtDecode(user);
    console.log(decode);
    setUser(decode);
  }, []);
  return (
    <div className="relative">
      <h1
        className="capitalize text-lg font-bold cursor-pointer w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
        onClick={() => setShowProfiles(!showProfile)}
      >
        {user?.name?.split(" ")[0]?.charAt(0)}
      </h1>
      {showProfile && (
        <div className="w-56 h-52 flex flex-col bg-gray-800 absolute top-10 -right-10 rounded-lg py-5 px-5">
          <span className="text-sm mt-2 capitalize text-white opacity-80">
            {user.role}
          </span>
          <span className="text-sm mt-2 capitalize text-white opacity-80">
            {user.name}
          </span>
          <span className="text-sm mt-2 capitalize text-white opacity-80">
            {user.email}
          </span>
          <button
            onClick={logout}
            className="w-20 flex items-center justify-center bg-red-500 py-2 px-3 mt-10 rounded-lg text-sm font-sans font-semibold text-white shadow-lg hover:scale-90 transition duration-300 cursor-pointer"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};
export default Profile;
