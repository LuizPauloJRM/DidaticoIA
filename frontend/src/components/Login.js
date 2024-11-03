// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Importa o objeto auth
import { signInWithEmailAndPassword } from "firebase/auth";
import Register from "./Register"; // Importa o componente de registro
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Estado para controlar a abertura do modal
  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login bem-sucedido!");
      navigate("/home"); // Redireciona para a página inicial após o login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={() => setIsRegisterOpen(true)}>Registrar</button>
      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsRegisterOpen(false)}>
              &times;
            </span>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
