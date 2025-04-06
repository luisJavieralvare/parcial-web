const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password, remember } = req.body;

  console.log("Usuario:", username);
  console.log("Password:", password);
  console.log("Remember me:", remember ? "Sí" : "No");

  res.json({ message: "Datos recibidos correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

