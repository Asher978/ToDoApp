const express = require('express');
const todoRoutes = express.Router();

const todoController = require('../controllers/todo-controller');

todoRoutes.get('/', todoController.index);



module.exports = todoRoutes;