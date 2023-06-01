const express = require('express');
const route = express.Router();
const mainController = require('../controller/mainController.js');

route.get('/', mainController.index);

module.exports = route;