const http = require('http');
const fs = require('fs');

// Se crea un servidor HTTP utilizando http.createServer().
// Cuando se recibe una solicitud (req), se crea un flujo de lectura (read) para leer el contenido del archivo index.html y se envía directamente al flujo de respuesta (res) utilizando pipe.

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./src/index.html');
    read.pipe(res);
    console.log(req)
});


server.listen(3000);
//El servidor escucha en el puerto 3000.

console.log(`Server on port ${3000}`);

// req (request): Este objeto contiene información sobre la solicitud del cliente, como la URL solicitada, los encabezados de la solicitud, y otros detalles relacionados con la petición del cliente.

// res (response): Este objeto es utilizado para enviar una respuesta al cliente. Contiene métodos y propiedades que te permiten configurar la respuesta que se enviará al navegador, como el código de estado HTTP, los encabezados de la respuesta y el cuerpo de la respuesta.


// El objeto req (request) en Node.js representa la solicitud HTTP del cliente. Algunas de sus propiedades más importantes incluyen:

// req.url: La URL solicitada por el cliente. Contiene la ruta y la cadena de consulta, pero no incluye el esquema, el nombre de host ni el número de puerto. Por ejemplo, si la URL completa es http://example.com:3000/path?name=John, req.url sería /path?name=John.

// req.method: El método HTTP utilizado en la solicitud, como "GET", "POST", "PUT", etc.

// req.headers: Un objeto que contiene los encabezados de la solicitud. Puedes acceder a encabezados específicos utilizando req.headers['nombre-del-encabezado'].

// req.httpVersion: La versión del protocolo HTTP utilizada en la solicitud, por ejemplo, "1.0" o "1.1".

// req.connection: Un objeto que representa la conexión del socket. Contiene información sobre la dirección IP del cliente, el puerto, y más.

// req.params (Express): En aplicaciones Express, esta propiedad contiene parámetros de ruta extraídos de la URL. Por ejemplo, si tienes una ruta como "/users/:id", req.params.id contendrá el valor de ":id" en la URL.

// req.body (cuando se utiliza body-parser o similar): En aplicaciones que utilizan middlewares como body-parser, esta propiedad contendrá los datos del cuerpo de la solicitud cuando se realiza una solicitud POST o PUT con un cuerpo JSON o formulario.

// req.query: Un objeto que contiene los parámetros de la cadena de consulta de la URL. Por ejemplo, si la URL es "/ruta?param1=valor1&param2=valor2", req.query será { param1: 'valor1', param2: 'valor2' }.


// res.statusCode: El código de estado HTTP que se enviará al cliente, por ejemplo, 200 para "OK", 404 para "Not Found", etc.

// res.statusMessage: El mensaje de estado asociado con el código de estado HTTP. Por ejemplo, "OK" para 200, "Not Found" para 404, etc.

// res.headersSent: Un booleano que indica si los encabezados ya han sido enviados al cliente.

// Métodos:

// res.setHeader(name, value): Establece el valor de un encabezado de respuesta. Puedes usar este método para personalizar los encabezados de la respuesta que se enviarán al cliente.

// res.writeHead(statusCode[, statusMessage][, headers]): Escribe los encabezados de la respuesta y el código de estado HTTP. Este método debe llamarse antes de escribir el cuerpo de la respuesta.

// res.write(chunk[, encoding]): Escribe un fragmento (chunk) de datos en el cuerpo de la respuesta.

// res.end([data][, encoding]): Finaliza la respuesta. Puede opcionalmente enviar datos y cerrar la conexión.

// res.send([body]) (Express): En aplicaciones Express, este método envía una respuesta al cliente. Puede enviar diversos tipos de datos y automatiza algunos aspectos de la respuesta, como establecer automáticamente el tipo de contenido y el código de estado.

// res.json([body]) (Express): En aplicaciones Express, este método envía una respuesta JSON al cliente. Es similar a res.send(), pero se encarga de la serialización JSON.