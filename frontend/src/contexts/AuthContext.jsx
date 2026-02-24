import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const URL = import.meta.env.VITE_BASE_SERVER_URL;

export const AuthProvider = ({ children }) => {
  
  const [authIsLoading, setAuthIsLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);

  const getProfile = async () => {
    setAuthIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`${URL}/me`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }
      const data = await response.json();
      setAuthData(data);
      return data;
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setAuthIsLoading(false);
    }
  };

  const loginAndGetToken = async (body) => {
    setAuthIsLoading(true)
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      if (response.status === 200) {
        localStorage.setItem('token', data.token)
        await getProfile()
      }
      return data
    } catch (error) {
      setAuthError(error.message)
    } finally {
      setAuthIsLoading(false)
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthData(null);
    setAuthError(null);
  };

  return (
    <AuthContext.Provider value={{ authIsLoading, authData, authError, getProfile, loginAndGetToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
