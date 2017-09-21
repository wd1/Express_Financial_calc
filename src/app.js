import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import multer from 'multer';

import { jwtSecret, admin as adminConfig } from './config';

import index from './routes/index';
import users from './routes/users';
import dashboard from './routes/dashboard';
import admin from './routes/admin';




var app = express();

var PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	secret: jwtSecret,
	saveUninitialized: true,
	resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(cookieParser(jwtSecret));

app.use(multer({dest: 'src/uploads'}).any());

app.use(flash());
app.use(function(req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('*', function(req, res, next) {
  res.locals.user = req.user || null;

	if(req.user && req.user.email === adminConfig.email)
		res.locals.admin = req.user || null;

  next();
});

app.get('*', function(req, res, next) {
  res.locals.user = req.user || null;

	if(req.user && req.user.email === adminConfig.email)
		res.locals.admin = req.user || null;

  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(req, res) {
   // Expose "error" and "message" to all views that are rendered.
   res.locals.error = req.session.error || '';
   res.locals.message = req.session.message || '';

   // Remove them so they're not displayed on subsequent renders.
   delete req.session.error;
   delete req.session.message;
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

app.listen(PORT, process.env.IP, function(){
  console.log("Server has started " + PORT);
});
