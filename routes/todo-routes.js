const express = require('express');
const todoRoutes = express.Router();

const todoController = require('../controllers/todo-controller');

todoRoutes.get('/', todoController.index);
todoRoutes.post('/', todoController.create);

todoRoutes.get('/add', (req, res) => {
    res.render('todo/todo-add', {});
});

todoRoutes.get('/:id', todoController.show);
todoRoutes.get('/:id/edit', todoController.edit);
todoRoutes.put('/:id', todoController.update);


module.exports = todoRoutes;