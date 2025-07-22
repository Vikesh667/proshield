import { image } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [file,setFile]=useState(null)
  const [image,setImage]=useState(null)
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchUserById = async () => {
    const response = await fetch(
      `https://proshieldcybersecurity.onrender.com/api/users/${id}`
    );
    const data = await response.json();
    setName(data.name);
    setEmail(data.email);
    setRole(data.role);
    setImage(data.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0gExaohZHdZW3609F12nUmVc14WXYNx_w&s")
  };
  useEffect(() => {
    fetchUserById();
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("role", role);
  if (file) {
    formData.append("image", file); 
  }

 const response = await fetch(`https://proshieldcybersecurity.onrender.com/api/users/update/${id}`, {
  method: "PATCH",
  body: formData,
});


  if (response.ok) {
    alert("User is updated successfully");
    navigate("/admin/dashboard/users");
  } else {
    const error = await response.json();
    alert("Error: " + error.message);
  }
};

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-full bg-gray-900/80 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-72 h-auto border-[1px] border-white flex flex-col gap-5 p-5"
      >
        <h1 className="text-white text-center font-sans font-semibold">
          Edit User
        </h1>
        <div className="w-full flex items-center justify-center">
      {file ? <img  className="w-16 h-16 rounded-full object-cover cursor-pointer hover:opacity-80 transition" src={URL.createObjectURL(file)}/> :<img
        src={image}
        alt="Upload"
        className="w-16 h-16 rounded-full object-cover cursor-pointer hover:opacity-80 transition"
        onClick={handleImageClick}
      />
}
    <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={(e)=>setFile(e.target.files[0])}
      />
    </div>

        <input
          className="formInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          className="formInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <select
          className="formInput"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
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
