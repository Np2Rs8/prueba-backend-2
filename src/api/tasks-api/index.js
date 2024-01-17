// Importar el modulo de fechas para generar ID únicos
const { v4: uuidv4 } = require("uuid");

// Modelo de la tarea
class Task {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.completed = false;
  }
}

// Almacenamiento de tareas
const tasks = [];

// Funciones CRUD
const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Título y descripción son obligatorios" });
  }

  const task = new Task(title, description);
  tasks.push(task);
  res.json(task);
};

const getTaskById = (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);
  res.json(task || { error: "Task not found" });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const task = tasks[taskIndex];
  const { title, description, completed = false } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Título y descripción son obligatorios" });
  }

  task.title = title;
  task.description = description;
  task.completed = completed;

  res.json(task);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.json({ success: true });
};

module.exports = {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};