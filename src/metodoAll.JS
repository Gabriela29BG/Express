const express = require("express");

const app =  express();

app.all('/info', (req, res) => { //se utiliza para manejar todos los métodos HTTP en la ruta especificada
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