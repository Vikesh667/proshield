import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitForm =async(e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedName.length < 3) {
      return setError("Please enter a valid name (min 3 characters)");
    }
    if (!trimmedEmail.includes("@")) {
      return setError("Please enter a valid email");
    }
    if (trimmedPassword.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    const user = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword,
      role
    };

    try {
    const response=await fetch("https://proshieldcybersecurity.onrender.com/api/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
      const data=await response.json()
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-600 via-blue-400 to-sky-400 flex items-center justify-center px-4">
      <form
        onSubmit={submitForm}
        className="w-full max-w-md bg-white/10 backdrop-blur-md flex flex-col items-center shadow-2xl p-8 sm:p-10 gap-6 border border-white/30 rounded-xl"
      >
        <h1 className="text-white text-2xl text-center font-sans font-semibold">
          Sign Up
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="bg-white/20 text-white placeholder-white/70 rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-white/40"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="bg-white/20 text-white placeholder-white/70 rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-white/40"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-4 py-2 rounded-md border border-white bg-white/20 text-white outline-none w-full"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="bg-white/20 text-white placeholder-white/70 rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-white/40"
        />

        <button type="submit" className="py-3 px-5 bg-gray-800 rounded-xl text-white text-lg font-sans hover:bg-gray-900 cursor-pointer hover:scale-95 transition duration-300 w-full">
          Submit
        </button>

        <p className="text-white text-sm text-center font-sans">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-sm text-white font-semibold underline hover:text-blue-200"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
