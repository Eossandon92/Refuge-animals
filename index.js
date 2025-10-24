const express = require("express");
const app = express();
const path = require("path");

// Servir todos los archivos estáticos (HTML, CSS, JS, imágenes, etc.)


// Servir index.html por defecto
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});
app.use(express.static(__dirname));
app.listen(3000, () => {
    console.log("Servidor corriendo en 👉 http://localhost:3000");
});
