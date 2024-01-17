const express = require("express");
const router = express.Router();

// Importar APIs
const helloWorldApi = require("../api/hello-world-api");
const mathApi = require("../api/math-api");
const tasksApi = require("../api/tasks-api");

// Rutas para la API de Hello World
router.get("/", helloWorldApi.helloWorld);

// Rutas para la API de matematicas
router.get("/math/add/:num1/:num2", mathApi.add);
router.get("/math/subtract/:num1/:num2", mathApi.subtract);
router.get("/math/multiply/:num1/:num2", mathApi.multiply);
router.get("/math/divide/:num1/:num2", mathApi.divide);

// Rutas para la API de tareas
router.get("/tasks", tasksApi.getTasks);
router.post("/tasks", tasksApi.createTask);
router.get("/tasks/:id", tasksApi.getTaskById);
router.put("/tasks/:id", tasksApi.updateTask);
router.delete("/tasks/:id", tasksApi.deleteTask);

module.exports = router;
