const express = require("express");
const morgan = require('morgan')

const app =  express();

app.use(morgan('dev'))
//Este código utiliza el middleware morgan con el formato 'dev', que proporciona un formato de registro de solicitudes conciso y fácil de leer. Registra información como el método HTTP, la ruta, el código de estado y el tiempo de respuesta.
//Con este código, cuando accedes a diferentes rutas, se registrará la información de la solicitud en la consola gracias a morgan, y las respuestas variarán según las rutas y parámetros de consulta especificados en tu código.

app.all('/info', (req, res) => {
    res.send('server info')
})

app.get('/search', (req, res) => {
   if (req.query.q === `javascript books`){
    res.send('list de libros de javacript')
   }else {
    res.send('pagina normal')
   }
})

app.get('/hello/:user', (req, res) => {
    console.log(req.query.user)
    console.log(req.query.age)
    res.send(`hello ${req.params.user}`)
})

app.listen(3000);
console.log(`server on port ${3000}`);