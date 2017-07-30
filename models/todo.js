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

//creating a new TODO
Todo.create = (todo, userid) => {
    return db.one (`
        INSERT INTO todo
        (title, status, category, description, user_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [todo.title, todo.status, todo.category, todo.description, userid]);
}

//update an existing TODO
Todo.update = (todo, id) => {
    return db.one(`
        UPDATE todo SET
        title = $1,
        status = $2, 
        category = $3,
        description = $4
        WHERE id = $5
        RETURNING *
    `, [todo.title, todo.status, todo.category, todo.description, id]);
}

Todo.destroy = (id) => {
    return db.none(`
        DELETE FROM todo
        WHERE id = $1
    `, [id]);
}

module.exports = Todo;
