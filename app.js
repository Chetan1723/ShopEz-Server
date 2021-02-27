var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var keys = require('./config/keys');

var app = express();

var clothItems = require('./routes/product-catalog');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// APIs
app.use('/api/clothItems', clothItems);
mongoose
  .connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connection Successfull!');
  })
  .then(() => {
    
  })
  .catch((err) => {
    console.log('Connection Failed! ' + err);
  });

module.exports = app;
