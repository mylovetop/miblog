/**
 * Created by zdsoft on 14-7-11.
 */
var express         = require('express');
var router          = express.Router();
var path            = require('path');
var logger          = require(path.resolve('./lib/util/logger'));
var rewriteUrl      = require(path.resolve('./lib/util/rewrite-url'));
var constant        = require(path.resolve('./lib/util/constant'));

router.get('/', function(req, res){
  console.log(req.query.name);
  logger.init(__filename);

  res.render('index', {
    userUrl:rewriteUrl('users', constant.urlType)
  });
});

module.exports = router;
