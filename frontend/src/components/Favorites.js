import React, { useEffect, useState } from "react";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../services/favoritesService";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };
    fetchFavorites();
  }, []);

  const handleAddFavorite = async (item) => {
    await addFavorite(item);
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const handleRemoveFavorite = async (itemId) => {
    await removeFavorite(itemId);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div>
      <h2>Meus Favoritos</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}
            <button onClick={() => handleRemoveFavorite(favorite.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      {/* Aqui você pode adicionar lógica para adicionar favoritos */}
    </div>
  );
};

export default Favorites;
