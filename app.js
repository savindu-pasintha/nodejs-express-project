var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Here You Can Import All The Http EndPoint Source File Inside The Route Folder
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jwtAuthenticationRouter = require('./routes/jwt_authentication');

var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Here You Can Define All The Https Endpoints 
app.use('/', indexRouter); //http://localhost:5000/layout,error
app.use('/user', usersRouter); //http://localhost:5000/users
app.use('/jwt',jwtAuthenticationRouter); //http://localhost:5000/jwt/login

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
