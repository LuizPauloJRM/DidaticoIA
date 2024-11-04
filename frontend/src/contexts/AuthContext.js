import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig"; // Seu arquivo de configuração Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";

// Criação do contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar o estado de autenticação quando o componente carrega
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Função de logout
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Função para acessar o contexto
export const useAuth = () => useContext(AuthContext);
