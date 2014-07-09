var express         = require('express');
var router          = express.Router();
var path            = require('path');
var userDao         = require(path.resolve('./lib/dao/user-dao'));
var logger          = require(path.resolve('./lib/util/logger'));


/* GET users listing. */
router.get('/', function(req, res) {
  logger.init('routes/users');

  function callbackSuccess(rows){
    var list = rows;
      res.render('user',{
        user:
        {
          name:req.query.user
        },
        list:list
      });
  };

  function callbackError(err){
    logger.error(err.message);
  }

  (new userDao()).queryUserInfo(callbackError, callbackSuccess);

});

module.exports = router;
