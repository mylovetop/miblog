var express         = require('express');
var router          = express.Router();
var path            = require('path');
//var db              = require(path.resolve('./lib/data/db'));
var pool            = require(path.resolve('./lib/data/pool'));

/* GET users listing. */
router.get('/', function(req, res) {
//  res.send('respond with a resource');
  console.log('req.query.user=' + req.query.user);

  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM youyiku.user_info', function(err, rows, fields) {
      console.log('mysql 连接开始');
      if (err) throw err;
      var list = ['123', '3333', '4444', '这是什么'];
      res.render('user',{
        user:
        {
          name:req.query.user
        },
        list:list
      });
      console.log('The solution is: ', rows[0].solution);
      console.log('The solution is: ', fields);
    });

    connection.release();

  });


});

module.exports = router;
