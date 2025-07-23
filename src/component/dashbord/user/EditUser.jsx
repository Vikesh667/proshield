import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  useEffect(() => {
    const fetchUserById = async () => {
      const response = await fetch(
        `https://proshieldcybersecurity.onrender.com/api/users/${id}`
      );
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setRole(data.role);
      setImage(
        data.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0gExaohZHdZW3609F12nUmVc14WXYNx_w&s"
      );
    };
    fetchUserById();
  }, [id]);

  const handleCameraClick = () => {
    cameraInputRef.current.click(); // opens camera (mobile only)
  };

  const handleGalleryClick = () => {
    galleryInputRef.current.click(); // opens file picker
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("role", role);
    if (file) {
      formData.append("image", file);
    }

    const response = await fetch(
      `https://proshieldcybersecurity.onrender.com/api/users/update/${id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );

    if (response.ok) {
      alert("User updated successfully!");
      navigate("/admin/dashboard/users");
    } else {
      const error = await response.json();
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="w-full h-full bg-gray-900/80 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-80 h-auto border border-white flex flex-col gap-5 p-5 bg-white/5 rounded-lg"
      >
        <h1 className="text-white text-center font-sans font-semibold">
          Edit User
        </h1>

        {/* Image preview and buttons */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={file ? URL.createObjectURL(file) : image}
            alt="Preview"
            className="w-20 h-20 rounded-full object-cover border"
          />

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-green-500 text-white px-3 py-1 rounded text-sm"
              onClick={handleCameraClick}
            >
              📷 Camera
            </button>

            <button
              type="button"
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              onClick={handleGalleryClick}
            >
              🖼️ Gallery
            </button>
          </div>

          {/* Hidden inputs for camera and gallery */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <input
            type="file"
            accept="image/*"
            ref={galleryInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        <input
          className="formInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="formInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
          className="bg-blue-400 text-lg text-white py-2 px-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
