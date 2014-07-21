var express         = require('express');
var router          = express.Router();
var path            = require('path');
var userDao         = require(path.resolve('./lib/dao/user-dao'));
var logger          = require(path.resolve('./lib/util/logger'));
var isLogin         = require(path.resolve('./lib/util/filter/isLogin'));

/* GET users listing. */
router.get('/', isLogin.authorize, function(req, res) {
  logger.init(__filename);


  var u = new userDao();
  var promise = u.queryUserInfo();

  promise
    .then(function(rows){
      res.render('user',{
        user:
        {
          name:req.query.user
        },
        list:rows
      });
    })
    .fail(function(err){
      logger.error(err.message);
    });



});

module.exports = router;
