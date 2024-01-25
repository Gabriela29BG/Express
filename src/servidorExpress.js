const express = require('express')

const app = express()

app.get('/', (req, res) => {

    app.get('/', (req, res) => { // se utiliza para manejar solicitudes GET en una ruta específica.

        res.end('Hello world') //res.end('Hello world'): Cuando se recibe una solicitud GET en la raíz, se ejecuta la función de devolución de llamada. res.end('Hello world') envía la respuesta al cliente con el cuerpo "Hello world". res.end() finaliza la respuesta y envía los datos al cliente.
    })

    app.get('/products', (req, res) => {
        //validate data
        //query a database
        //process data //estos son los datos que pueden intruducirse aqui
        res.send('lista de productos')
    })

    app.get('/miarchivo', (req, res) => {
        res.sendFile('./javascript.png', {
            root: __dirname //Esta línea envía el archivo llamado 'javascript.png' como respuesta cuando se realiza una solicitud a '/miarchivo'. La variable __dirname se utiliza para especificar el directorio raíz desde el cual buscar el archivo y es otra forma de enviarlos arhivos no solo un imagen
        })
    })

    app.get('/user', (req, res) => {
        res.json({

            "name": "lol "  //este envia archivos tipo json
            "lastname": "ray"
            age: 20
        },
    });
});
    app.use((req, res) => {
        res.status(404).send('no se encontro tu pagina') //el status da informacion de la peticion
    })

    app.use(/*sin ruta*/(req, res) => {  //si ninguna de las rutas coincide con las busquedas cae en esta que no tiene nombre de ruta asiganado
        res.send('No se encontro tu pagina')
    })

    //res.sendFile('./src/index.html', {
    //  root:__dirname // Define una ruta que maneja las solicitudes GET a la raíz ("/"). Cuando se realiza una solicitud GET a la raíz, la función de callback se ejecuta y envía el contenido del archivo index.html al cliente utilizando res.sendFile. El objeto de opciones especifica que el directorio base (root) es el directorio actual (__dirname). })


app.listen(3000)
console.log(`Server on port ${3000}`)