const express = require('express');
const todoRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const todoController = require('../controllers/todo-controller');

todoRoutes.get('/', todoController.index);
todoRoutes.post('/', authHelpers.loginRequired, todoController.create);

todoRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('todo/todo-add', {});
});

todoRoutes.get('/:id', todoController.show);
todoRoutes.put('/:id', authHelpers.loginRequired, todoController.update);
todoRoutes.get('/:id/edit', authHelpers.loginRequired, todoController.edit);
todoRoutes.delete('/:id', authHelpers.loginRequired, todoController.delete);


module.exports = todoRoutes;