const express = require("express");

const app =  express();

app.use((req, res, next) => {
   console.log('paso por aqui')
   next()
})

app.use((req, res, next) => {
    if (req.query.login === 'gaby@gmail.com') { 
    next()
   }else {
    res.send('No autorizado')
    // Este middleware verifica si el valor del parámetro de consulta login es igual a 'gaby@gmail.com'. Si es así, llama a next() y permite que la solicitud continúe; de lo contrario, envía la respuesta 'No autorizado'
   }
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

