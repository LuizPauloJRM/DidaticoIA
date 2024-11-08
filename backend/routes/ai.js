// routes/ai.js
const express = require("express");
const { generateContent } = require("../services/aiService");

const router = express.Router();

// Rota para gerar conteúdo didático
router.post("/generate", async (req, res) => {
  const { topic } = req.body;

  try {
    const content = await generateContent(topic);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
