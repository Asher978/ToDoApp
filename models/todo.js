const db = require('../db/config');

const Todo = {};

//showing all
Todo.findAll = () => {
    return db.query('SELECT * FROM todo')
}

//showing by ID
Todo.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM todo
        WHERE id = $1
    `, [id]);
}

module.exports = Todo;
