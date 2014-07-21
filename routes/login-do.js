/**
 * Created by zdsoft on 14-7-14.
 */
var express         = require('express');
var router          = express.Router();
var path            = require('path');
var logger          = require(path.resolve('./lib/util/logger'));
var rewriteUrl      = require(path.resolve('./lib/util/rewrite-url'));
var constant        = require(path.resolve('./lib/util/constant'));
var UserDao         = require(path.resolve('./lib/dao/user-dao'));


router.get('/', function(req, res){

  var userName = req.query.name;
  var password = req.query.password;

  logger.init(__filename);


  var u = new UserDao();
  var params = {};
  params.userName = userName;
  params.password = password;
  var p = u.login2(params);


//  p.then(function(rows){
//    req.session.userId = params.userName;
//    res.redirect(rewriteUrl('users', constant.urlType));
//  },function(err){
//    logger.error(err);
//    req.session.err = {
//      err:constant.KEY_ERROR_LOGIN
//    };
//    res.redirect(rewriteUrl('login', constant.urlType));
//  });

  p.then(function(rows){
    req.session.userId = params.userName;
    res.redirect(rewriteUrl('users', constant.urlType));
  }).then(function(err){
    logger.error(err);
    req.session.err = {
      err:constant.KEY_ERROR_LOGIN
    };
    res.redirect(rewriteUrl('login', constant.urlType));
  });


});

module.exports = router;
