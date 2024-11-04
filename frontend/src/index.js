import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Verifique se o CSS está sendo importado
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom"; // Não é necessário aqui

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
