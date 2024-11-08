// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const favoritesRoutes = require("./routes/favorites");
const notesRoutes = require("./routes/notes");
const aiRoutes = require("./routes/ai"); // Importar rotas de IA

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

// Usar as rotas de favoritos, notas e IA
app.use("/api/favorites", favoritesRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/ai", aiRoutes); // Usar as rotas de IA

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
