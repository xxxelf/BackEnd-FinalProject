var dotenv = require('dotenv')
dotenv.config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

/*ROUTES*/
var index = require('./routes/index');
var board = require('./routes/board');

var app = express();

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/board', board);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  // allways log the error
  console.error("ERROR", req.method, req.path, err);

  // only send response if the error
  if (!res.headerSent) {
    res.status(500);
    res.json({ error: "error.unexpected" });
  }
});

module.exports = app;
