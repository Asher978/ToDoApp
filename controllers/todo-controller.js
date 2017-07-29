const Todo = require('../models/todo');

const todoController = {};

// show all
todoController.index = (req, res) => {
    Todo.findAll()
    .then(todo => {
        res.render('todo/todo-index', {
            currentPage: 'index page',
            data: todo
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

//by id
todoController.show = (req, res) => {
    Todo.findById(req.params.id)
    .then(todo => {
        res.render('todo/todo-single', {
            currentPage: 'single page',
            data: todo,
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

//new TODO
todoController.create = (req, res) => {
    Todo.create({
        title: req.body.title,
        status: req.body.status,
        category: req.body.category,
        description: req.body.description,
    }).then(() => {
        res.redirect('/todo');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};


module.exports = todoController;