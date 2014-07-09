/**
 * Created by zdsoft on 14-7-4.
 */
var path            = require('path');
var pool            = require(path.resolve('./lib/data/pool'));



var userDao = function(){
  console.log('userDao init');
};


/**
 * 获取用户信息
 * @param callback
 */
userDao.prototype.queryUserInfo = function(callbackError, callbackSuccess){

  var sql = 'SELECT * FROM youyiku.user_info';

  pool.getConnection(function(err, connection){
    connection.query(sql, function(err, rows, fields) {
      console.log('userDao.prototype.queryUserInfo');
      if (err) {
//        throw err;
        callbackError(err);
      }
      callbackSuccess(rows);
    });

    connection.release();

  });
};



module.exports = userDao;