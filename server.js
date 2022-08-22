const express = require("express");
const server = express();
const cors = require("cors");
const port = 3333;
const config = require("./src/routes");

server.use(cors());
server.use(express.json());
server.use("/api", config);

server.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`);
});
