const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./routes/main.js');

app.use(express.static(path.resolve('public')));

app.listen(3030, () => console.log(`servidor corriendo en el puerto 3030`));

app.use('/', mainRoute);