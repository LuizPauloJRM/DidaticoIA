// routes/favorites.js
const express = require("express");
const Favorite = require("../models/Favorite");

const router = express.Router();

// Criar um novo favorito
router.post("/", async (req, res) => {
  const { userId, name, description } = req.body;

  try {
    const newFavorite = new Favorite({ userId, name, description });
    await newFavorite.save();
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obter favoritos de um usuário
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const favorites = await Favorite.find({ userId });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remover um favorito
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Favorite.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
