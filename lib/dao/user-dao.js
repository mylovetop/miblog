/**
 * Created by zdsoft on 14-7-4.
 */
var path            = require('path');
var pool            = require(path.resolve('./lib/data/pool'));
var async           = require('async');


var userDao = function(){
  console.log('userDao init');
};


userDao.prototype.queryUserInfo = function(callback){
  console.log('userDao.prototype.queryUserInfo');

  var sql = 'SELECT * FROM youyiku.user_info';

  pool.getConnection(function(err, connection){
    connection.query(sql, function(err, rows, fields) {
      console.log('userDao.prototype.queryUserInfo');
      if (err) throw err;
//      var list = rows;
      callback(rows);
    });

    connection.release();

  });
};



module.exports = userDao;