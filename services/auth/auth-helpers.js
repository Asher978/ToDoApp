const bcrypt = require('bcrypt.js');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect (req, res, next) {
    if (req.users) return res.redirect('/user');
    return next();
};

