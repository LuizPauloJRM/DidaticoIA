import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Carregando...</div>; // Pode personalizar com um loader

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
