const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Função que envia eventos SSE periodicamente
  const sendEvent = () => {
    const data = `Evento enviado às ${new Date().toLocaleTimeString()}`;
    res.write(`data: ${data}\n\n`);

    // Envia um novo evento a cada 2 segundos
    setTimeout(sendEvent, 2000);
  };

  sendEvent();

  // Fecha a conexão quando o cliente desconectar
  req.on("close", () => {
    console.log("Conexão encerrada");
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor SSE rodando em http://localhost:${PORT}`);
});
