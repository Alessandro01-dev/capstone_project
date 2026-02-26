import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true;
  }
};

const ProtectedRoutes = () => {
  const { authData, authIsLoading } = useAuth();
  const token = localStorage.getItem('token');
  const location = useLocation();

  const [isExpired, setIsExpired] = useState(isTokenExpired(token));

  useEffect(() => {
    if (!token) return;

    const expired = isTokenExpired(token);
    setIsExpired(expired);

    try {
      const decoded = jwtDecode(token);
      const delay = (decoded.exp * 1000) - Date.now();

      if (delay > 0) {
        const timer = setTimeout(() => {
          setIsExpired(true);
          localStorage.removeItem('token');
        }, delay);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setIsExpired(true);
    }
  }, [token]);

  if (authIsLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner
          className="mx-auto"
        />
      </div>
    );
  }

  if (isExpired || !authData) {
    return <Navigate to="/landing" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
