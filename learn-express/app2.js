var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next){
  console.log(req.url, '저도 미들웨어 입니다.');
  next();
})
// morgan
app.use(logger('dev'));
// static
app.use(express.static(path.join(__dirname, 'public')))
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//cookie parser
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret code',
  cookie:{
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash())

module.exports = app;
