import { jwtDecode } from "jwt-decode";


export const getToken = () => {
  return localStorage.getItem("token");
};

export const decodeToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode(token); // ✅ This automatically decodes safely
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const getUserRole = () => {
  const decoded = decodeToken();
  return decoded?.role || null;
};

export const isAuthenticated = () => {
  return !!getToken();
};
