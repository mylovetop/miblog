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

  console.log('userName=' + userName + '\n' + 'password=' + password);

  logger.init(__filename);


  function callbackError(err, params){
    logger.error(err);
    req.session.err = {
      err:constant.KEY_ERROR_LOGIN
    };
    res.redirect(rewriteUrl('login', constant.urlType));
  }

  function callbackSuccess(err, params){
    req.session.userId = params.userName;
    console.log("用户信息11=" + params.userName);
    res.redirect(rewriteUrl('users', constant.urlType));
  };

  var u = new UserDao();
  var params = {};
//  params.res = res;
  params.userName = userName;
  params.password = password;
  u.login(callbackError, callbackSuccess, params);


});

module.exports = router;
