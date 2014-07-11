/**
 * Created by zdsoft on 14-7-11.
 */
var path            = require('path');
var rewriteUrl      = require(path.resolve('./util/rewrite-url'));
var common          = require(path.resolve('./util/common'));

var isLogin = function(req, res, next){
  if(!req.session.userId){
    res.redirect(rewriteUrl('users', common.urlType));
  }else{
    next();
  }
};

module.exports = isLogin;