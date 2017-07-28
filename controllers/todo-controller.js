const Todo = require('../models/todo');

const todoController = {};


todoController.index = (req, res) => {
    Todo.findAll()
    .then(todo => {
        res.render('todo/todo-index', {
            message: 'ok',
            data: todo
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Not Found :((',
            error: err,
        });
    });
};


module.exports = todoController;