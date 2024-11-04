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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <button
          className="w-full text-blue-500 mt-4 underline"
          onClick={() => setIsRegisterOpen(true)}
        >
          Registrar
        </button>
        {isRegisterOpen && (
          <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-white p-4 rounded shadow-lg w-80">
              <span
                className="close cursor-pointer text-red-500 float-right"
                onClick={() => setIsRegisterOpen(false)}
              >
                &times;
              </span>
              <Register />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
