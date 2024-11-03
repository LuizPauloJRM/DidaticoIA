// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
