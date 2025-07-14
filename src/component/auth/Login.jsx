import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // ✅ Store token
        localStorage.setItem("token", data.token);

        // ✅ Decode token to extract role
        const decoded = jwtDecode(data.token);
        const role = decoded.role;
      
        // ✅ Redirect to dashboard based on role
        if (role === "Admin") {
          navigate("/admin/dashboard");
        } else if (role === "User") {
          navigate("/");
        } else {
          alert("Unknown role. Cannot redirect.");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-400">
      <div className="w-96 h-96 flex items-center justify-center border-2 border-white rounded-2xl shadow-2xl">
        <form
          onSubmit={loginHandle}
          className="flex items-center flex-col gap-5"
        >
          <h1 className="text-center text-2xl text-white">Login</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="py-3 px-5 rounded-lg outline-none border-[1px] border-white text-white opacity-80"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="py-3 px-5 rounded-lg outline-none border-[1px] border-white text-white opacity-80"
          />
          <button
            type="submit"
            className="text-lg text-white py-3 px-10 bg-blue-500 rounded-2xl shadow-2xl hover:bg-blue-700 hover:scale-110 transition duration-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
