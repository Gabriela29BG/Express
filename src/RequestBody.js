const express = require("express");

const app = express();

//Configuración de Middleware:
//estas líneas configuran el middleware para manejar diferentes tipos de cuerpos de solicitud:
app.use(express.text()) //Analiza las solicitudes entrantes con cargas útiles de texto plano
app.use(express.json()) //Analiza las solicitudes entrantes con cargas útiles JSON.
app.use(express.urlencoded({extended:false})) //Analiza las solicitudes entrantes con cargas útiles codificadas en URL. La opción extended: false significa que los valores pueden ser solo cadenas o matrices.


app.post('/user', (req, res) => {
    console.log(req.body)
    res.send("nevo usuario")
})
 //Esto define una ruta POST en '/user'. Cuando se realiza una solicitud POST a esta ruta, el servidor registra el cuerpo de la solicitud en la consola y envía la respuesta "nuevo usuario" de vuelta al cliente.