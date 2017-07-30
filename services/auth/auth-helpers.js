const bcrypt = require('bcrypt.js');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}