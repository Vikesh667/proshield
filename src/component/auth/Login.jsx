import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://proshieldcybersecurity.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok && data.token) {
        // ✅ Store token
        localStorage.setItem("token", data.token);

        // ✅ Decode token to extract role
        const decoded = jwtDecode(data.token);
        const role = decoded.role;

        // ✅ Redirect to dashboard based on role
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "user") {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-400 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-8 sm:p-10 md:p-12">
        <form onSubmit={loginHandle} className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white text-center">Login</h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-4 rounded-lg outline-none bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-white/40 transition"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full py-3 px-4 rounded-lg outline-none bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-white/40 transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition duration-300 shadow-md"
          >
            Login
          </button>

          <p className="text-white text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold underline hover:text-blue-200 transition"
            >
              Create one now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );

};
export default Login;
