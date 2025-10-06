const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Endpoint 1
app.get("/", (req, res) => {
  res.send("Hola, esta es la aplicación Node.js dockerizada!");
});

// Endpoint 2
app.get("/info", (req, res) => {
  res.json({
    app: "Docker Node.js App",
    version: "1.0.0",
    author: "Ebert Castillo"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});