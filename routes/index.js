//var express = require('express');
//var router = express.Router();
///* GET home page. */
//router.get('/', function(req, res) {
//  res.render('login', { title: 'Express' });
//});
//
//module.exports = router;


//路由
var users = require('./users');
var login = require('./login');

module.exports = function(app){

  app.use('/users', users);
  app.use('/login', login);

};
