import React, { useState } from "react";
import Favorites from "./Favorites"; // Assumindo que você tem esse componente
import Notes from "./Notes"; // Assumindo que você tem esse componente

const Home = () => {
  const [activeTab, setActiveTab] = useState("favorites");
  const [aiQuery, setAiQuery] = useState(""); // Estado para a entrada da IA

  const renderContent = () => {
    switch (activeTab) {
      case "favorites":
        return <Favorites />;
      case "notes":
        return <Notes />;
      default:
        return <Favorites />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Página Inicial</h1>
      <div className="tabs flex border-b border-gray-300 mb-4 w-full max-w-2xl">
        <button
          className={`tab ${
            activeTab === "favorites"
              ? "font-semibold text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          } px-4 py-2`}
          onClick={() => setActiveTab("favorites")}
        >
          Favoritos
        </button>
        <button
          className={`tab ${
            activeTab === "notes"
              ? "font-semibold text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          } px-4 py-2`}
          onClick={() => setActiveTab("notes")}
        >
          Notas
        </button>
      </div>
      <div className="content mb-8 w-full max-w-2xl">{renderContent()}</div>
      <div className="ai-bar w-full h-[80vh] bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Inteligência Artificial</h2>
        <input
          type="text"
          value={aiQuery}
          onChange={(e) => setAiQuery(e.target.value)} // Atualiza o estado com a entrada
          placeholder="Digite sua pergunta..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        {/* Aqui você pode adicionar lógica para enviar a consulta ao seu sistema de IA */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Buscar
        </button>
        <div className="h-full flex items-center justify-center mt-4">
          {/* Exemplo de componente interativo */}
          <p className="text-center text-gray-600">
            Resultados da IA aparecerão aqui...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
