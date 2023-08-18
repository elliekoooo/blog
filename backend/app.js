var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
const options_cors = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionsSuccessStatus: 200
}

var apiRouter = require('./routes/api');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(options_cors));
app.use('/api', apiRouter);

module.exports = app;
