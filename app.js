const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//set port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Surviving on port ${port}`);
})



app.get('*', (req, res) => {
    res.status(404).send('404 Not Found :((')
})