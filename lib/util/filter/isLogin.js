/**
 * Created by zdsoft on 14-7-11.
 */
var path            = require('path');
var rewriteUrl      = require(path.resolve('./lib/util/rewrite-url'));
var constant          = require(path.resolve('./lib/util/constant'));

exports.authorize = function(req, res, next){

  var loginUrl = rewriteUrl('/login', constant.urlType);

  if(!req.session.userId){
    res.redirect(loginUrl);

  }else{
    next();
  }
};

