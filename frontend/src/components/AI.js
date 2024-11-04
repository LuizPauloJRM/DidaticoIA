// src/components/AI.js
import React from "react";

const AI = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold mb-4">
        Bem-vindo à Inteligência Artificial!
      </h2>
      <p className="mb-4">Aqui você pode interagir com a IA.</p>
      {/* Adicione sua lógica interativa aqui */}
      <input
        type="text"
        placeholder="Digite sua pergunta..."
        className="border rounded p-2 mb-2 w-3/4"
      />
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Perguntar
      </button>
    </div>
  );
};

export default AI;
