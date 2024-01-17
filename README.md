# Prueba Técnica para Backend en Node.js

Bienvenido a nuestra prueba técnica de backend.
La intención de esta prueba es evaluar tu capacidad para aprender y aplicar conceptos nuevos en un lenguaje ya conocido.
Recuerda, no estamos buscando perfección, sino tu habilidad para resolver problemas y tu disposición para aprender.

## Requisitos

Para completar esta prueba necesitarás:

1. Un editor de texto (VSCode, Atom, etc.)
2. Git (Para clonar este repositorio y hacer push a tu propia rama)
3. Node.js instalado en tu máquina. Si no lo tienes instalado, puedes seguir la guía oficial [aquí](https://nodejs.org/es/download/).

## Instrucciones

1. Clona este repositorio en tu máquina local.
2. Crea una nueva rama con tu nombre.
3. Realiza las tareas que se detallan a continuación en tu rama.
4. Cuando hayas terminado, realiza un push de tu rama al repositorio remoto.

## Tareas

1. **Hello World API**

   Crea una API sencilla que responda con un "Hello, World!" cuando se haga una petición GET a la ruta raíz ('/'). Puedes utilizar la librería Express.js para hacer esto. Aquí tienes un ejemplo para comenzar:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   app.listen(port, () => {
     console.log(`App listening at http://localhost:${port}`);
   });
   ```

2. **API para Operaciones Básicas de Matemáticas**

   Amplía tu API para que maneje las operaciones matemáticas básicas (suma, resta, multiplicación y división).
   Crea rutas diferentes para cada operación.
   Cada ruta debe aceptar dos números como parámetros de consulta y responder con el resultado de la operación correspondiente.

3. **API para la Gestión de una Lista de Tareas**

   Crea una API que permita manejar una lista simple de tareas. Cada tarea debe tener un título y una descripción.
   La API debe permitir las operaciones CRUD: Crear, Leer, Actualizar y Borrar tareas.
   Por ahora, puedes simplemente almacenar las tareas en memoria o en una base de datos.

## Solución de tareas

1. **Hello World API**

   _Rutas_

   1. GET (http://localhost:3000) Mensaje Hello World

2. **API para Operaciones Básicas de Matemáticas**

   _Rutas_

   1. GET (http://localhost:3000/math/add/:num1/:num2): Sumar.
   2. GET (http://localhost:3000/math/subtract/:num1/:num2): Restar.
   3. GET (http://localhost:3000/math/multiply/:num1/:num2): Multiplicar.
   4. GET (http://localhost:3000/math/divide/:num1/:num2): Dividir.

3. **API para la Gestión de una Lista de Tareas**

   _Rutas_

   1. GET (http://localhost:3000/tasks): Listado de tareas.
   2. POST (http://localhost:3000/tasks): Crear tarea.

      ```json
      JSON (String title, String description, Boolean completed) Ejemplo.
      {
        "title": "tarea 01 titulo",
        "description": "tarea 01 descripcion",
        "completed": false
      }
      ```

   3. GET (http://localhost:3000/tasks/:id): Buscar tarea por id
   4. PUT (http://localhost:3000/tasks/:id): Actualizar tarea
   5. DELETE (http://localhost:3000/tasks/:id): Eliminar tarea

## Recursos Útiles

- [Documentación de Node.js](https://nodejs.org/es/docs/)
- [Guía de Express.js](https://expressjs.com/es/starter/hello-world.html)
- [Tutorial de API REST con Node.js y Express](https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/)

## Presentación de la Prueba

Una vez que hayas terminado, haz un commit de tus cambios y luego haz un push de tu rama al repositorio. Posteriormente, contáctanos para notificarnos que has completado la prueba.

¡Buena suerte!
