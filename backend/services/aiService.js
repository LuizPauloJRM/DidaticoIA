// services/aiService.js
const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const generateContent = async (topic) => {
  const prompt = `Crie um conteúdo didático sobre ${topic} na área de tecnologia.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Erro ao chamar a API de IA:", error);
    throw new Error("Erro ao gerar conteúdo");
  }
};

module.exports = { generateContent };
