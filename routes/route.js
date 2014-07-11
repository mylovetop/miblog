//var express = require('express');
//var router = express.Router();
///* GET home page. */
//router.get('/', function(req, res) {
//  res.render('login', { title: 'Express' });
//});
//
//module.exports = router;
var path            = require('path');
var logger          = require(path.resolve('./lib/util/logger'));
var rewriteUrl      = require(path.resolve('./lib/util/rewrite-url'));
var constant        = require(path.resolve('./lib/util/constant'));


//路由
var users = require('./users');
var login = require('./login');
var e404 = require('./e404');

var home = require('./index');


module.exports = function(app){

  logger.init(__filename);

  //首页
  app.use('/', home);
  app.use(rewriteUrl('/index', constant.urlType), home);

  app.use(rewriteUrl('/users', constant.urlType), users);
  app.use(rewriteUrl('/login', constant.urlType), login);

  //找不到页面
  app.use(rewriteUrl('/404', constant.urlType), e404);


  app.use(function(req, res, next){
    res.redirect(rewriteUrl('404', constant.urlType));
  });

};
