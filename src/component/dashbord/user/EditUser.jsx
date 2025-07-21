import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();
const navigate=useNavigate()
  const fetchUserById = async () => {
    const response = await fetch(`https://proshieldcybersecurity.onrender.com/api/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setEmail(data.email);
    setRole(data.role);
  };
  useEffect(() => {
    fetchUserById();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://proshieldcybersecurity.onrender.com/api/users/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, role }),
    });
    if (response.ok) {
     alert("User is updated successfully")
      navigate("/admin/dashboard/users")
    }
  };
  return (
    <div className="w-full h-screen bg-gray-900/80 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-72 h-84 border-[1px] border-white flex flex-col gap-5 p-5"
      >
        <h1 className="text-white text-center font-sans font-semibold">
          Edit User
        </h1>
        <input className="formInput" value={name} onChange={(e)=>setName(e.target.value)} type="text" />
        <input className="formInput" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
        <select className="formInput" value={role} onChange={(e)=>setRole(e.target.value)}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-400 text-lg  text-white py-3 px-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};
export default EditUuser;
