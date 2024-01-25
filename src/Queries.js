const express = require("express");

const app =  express();


//Los parámetros de consulta son pares clave-valor que se pueden adjuntar a la URL de una solicitud HTTP. En el contexto de Express.js, estos parámetros de consulta se pueden acceder a través del objeto req.query en las rutas.

app.get('/search', (req, res) => { //efines una ruta GET en la ruta '/search'.
   if (req.query.q === `javascript books`){ //Accedes al objeto req.query, que contiene los parámetros de consulta de la URL. En este caso, estás verificando si el valor de la clave q es igual a la cadena 'javascript books'.
    res.send('list de libros de javacript') //Si la condición es verdadera, envías la respuesta 'list de libros de javacript'.
   }else {
    res.send('pagina normal') //Si la condición es falsa, envías la respuesta 'pagina normal'.
   }
})
// los parámetros de consulta suelen ser sensibles a mayúsculas y minúsculas. 

app.get('/hello/:user', (req, res) => {
    console.log(req.query.user)
    console.log(req.query.age)
    res.send(`hello ${req.params.user}`)
})




app.listen(3000);
console.log(`server on port ${3000}`);