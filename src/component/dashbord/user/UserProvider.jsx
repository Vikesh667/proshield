// UserContext.js
import { createContext, useEffect, useState } from "react";

export const GetUser = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await fetch("https://proshieldcybersecurity.onrender.com/api/users");
      const data = await response.json();
      setUsers(data.user);
    } catch (error) {
      setError(error);
    }
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`https://proshieldcybersecurity.onrender.com/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMessage(data.message);
      getAllUsers();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <GetUser.Provider value={{ users, setUsers, deleteUser, message, error }}>
      {children}
    </GetUser.Provider>
  );
};
