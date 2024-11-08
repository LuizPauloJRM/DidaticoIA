// routes/notes.js
const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// Criar uma nova nota
router.post("/", async (req, res) => {
  const { userId, title, content } = req.body;

  try {
    const newNote = new Note({ userId, title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obter notas de um usuário
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const notes = await Note.find({ userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remover uma nota
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
