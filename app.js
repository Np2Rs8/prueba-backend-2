const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routes = require("./src/routes");

const config = require("./src/config");
const port = config.port;

const middlewares = () => {
  // Habilitar CORS para todas las rutas
  app.use(cors());

  // Utilizar el middleware body-parser para analizar JSON
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Manejo de error global
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
  });
};

middlewares();

// Configurar rutas
app.use("/", routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
