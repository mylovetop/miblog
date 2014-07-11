var express         = require('express');
var router          = express.Router();
var path            = require('path');
var logger          = require(path.resolve('./lib/util/logger'));
var rewriteUrl      = require(path.resolve('./lib/util/rewrite-url'));
var constant        = require(path.resolve('./lib/util/constant'));

router.get('/', function(req, res){
  console.log(req.query.name);
  logger.init(__filename);

  res.render('login', {
    action: rewriteUrl('users', constant.urlType)
  });

  logger.error('错误---login');
});

module.exports = router;
