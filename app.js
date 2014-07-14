var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var process = require('process');

var routes = require('./routes/route');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.engine('.html', ejs.__express);


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//{secret: 'keyboard cat'} 这个必须加，要不会报错
app.use(session({secret: 'keyboard cat'}));
app.use(express.static(path.join(__dirname, 'public')));


//路由
routes(app);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


process.on('uncaughtException', function (err) {
  logger(err);
});


module.exports = app;
