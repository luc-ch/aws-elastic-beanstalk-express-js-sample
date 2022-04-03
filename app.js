const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Primer deploy de Lucho. Antes del despliegue, pasar por un review.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
