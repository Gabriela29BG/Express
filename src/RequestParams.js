const express = require("express");

const app =  express();

app.get('/hello/:user', (req, res) => {
    //console.log(req.params.user)
    console.log(typeof req.params.user)
    res.send(`hello ${req.params.user}`)
})

//Los parámetros de ruta son una forma de capturar valores específicos de una URL en una aplicación web. En Express.js, puedes definir parámetros de ruta en tus rutas para hacer que ciertas partes de la URL sean variables y puedan ser capturadas para su posterior procesamiento.

app.get('/add/:x/:y', (req, res) => { //define una ruta GET en tu aplicación Express. La ruta es '/add/:x/:y', donde :x y :y son parámetros de ruta que capturan valores específicos de la URL
    const { x, y } = req.params;  //Aquí, se extraen los valores de x e y de los parámetros de la ruta utilizando la desestructuración de objetos desde req.params.
    res.send(`Result: ${parseInt(x) + parseInt(y)}`); //La respuesta enviada al cliente es una cadena que muestra el resultado de sumar x e y. Se utiliza parseInt para convertir las cadenas en valores numéricos antes de realizar la suma.
});


app.get('/users/:username/photo', (req, res) => {
    if (req.params.username === 'gaby') {
        return res.sendFile('./javascript.png', {
            root:__dirname
        })
    }

    res.send('/nombre/:nombre/age/:age', (req, res) => {
        res.send(`el usuario ${req.params.nombre} tiene ${req.params.age } años `)
    })
})


app.listen(3000);
console.log(`server on port ${3000}`);