const express = require('express');
const app = express();

// Middleware de nivel de aplicación
app.use((req, res, next) => {
    console.log('Middleware de nivel de aplicación');
    next(); // Llama a la siguiente función de middleware en la pila
});

// Ruta y middleware específico para esa ruta
app.get('/rutaEjemplo', (req, res, next) => {
    console.log('Middleware específico para la ruta /rutaEjemplo');
    next();
}, (req, res) => {
    res.send('Respuesta de la ruta /rutaEjemplo');
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


// Middleware de nivel de aplicación:

// Se define utilizando app.use().
// Se ejecuta para todas las solicitudes que llegan a la aplicación.
// Llama a next() para pasar el control al siguiente middleware en la pila.
// Middleware específico para una ruta:

// Se define directamente antes de la función de manejo de la ruta.
// Se ejecuta solo para las solicitudes que coinciden con la ruta especificada (/rutaEjemplo en este caso).
// Llama a next() para pasar al siguiente middleware o función de manejo de la ruta.
// Middleware de manejo de errores:

// Se define con cuatro parámetros, indicando que es un middleware de manejo de errores.
// Se ejecuta cuando se pasa un error a través de next(err).
// Se utiliza para manejar errores y generar respuestas de error personalizadas.