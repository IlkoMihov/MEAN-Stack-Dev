var express = require('express');
var path = require('path');

var indexRouter = require('./routes/ps4');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ps4', indexRouter);

module.exports = app;