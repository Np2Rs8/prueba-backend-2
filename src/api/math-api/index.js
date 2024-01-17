// Funciones de utilidad
function getNumbers(req) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  return validateNumbers([num1, num2]);
}

function validateNumbers(numbers) {
  return numbers.every((number) => !isNaN(number) || number === null)
    ? numbers
    : {};
}

// Funciones matemáticas
const executeOperation = (operation) => (req, res) => {
  const numbers = getNumbers(req);

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }

  const [num1, num2] = numbers;
  const result = operation(num1, num2);

  res.send({ result });
};

const add = executeOperation((num1, num2) => num1 + num2);
const subtract = executeOperation((num1, num2) => num1 - num2);
const multiply = executeOperation((num1, num2) => num1 * num2);

const divide = (req, res) => {
  const numbers = getNumbers(req);

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "Parámetros inválidos" });
  }

  const [num1, num2] = numbers;

  if (num2 === 0) {
    return res.status(400).json({ error: "No puedes dividir por cero." });
  }

  const result = num1 / num2;

  res.send({ result });
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
