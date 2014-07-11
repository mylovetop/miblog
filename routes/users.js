var express         = require('express');
var router          = express.Router();
var path            = require('path');
var userDao         = require(path.resolve('./lib/dao/user-dao'));
var logger          = require(path.resolve('./lib/util/logger'));
var isLogin         = require(path.resolve('./lib/util/filter/isLogin'));

/* GET users listing. */
router.get('/', isLogin.authorize, function(req, res) {
  logger.init(__filename);
  logger.error('错误');


  function callbackSuccess(rows){
      res.render('user',{
        user:
        {
          name:req.query.user
        },
        list:rows
      });
  };

  function callbackError(err){
    logger.error(err.message);
  };

  var u = new userDao();
  u.queryUserInfo(callbackError, callbackSuccess);

});

module.exports = router;
