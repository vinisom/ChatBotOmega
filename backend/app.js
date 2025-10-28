// backend/app.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  const mensagem = req.body.mensagem;

  // Resposta simples, pode ser melhorada futuramente
  const resposta = `Você disse: "${mensagem}". Em breve um atendente entrará em contato.`;

  res.json({ resposta });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
