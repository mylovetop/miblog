/**
 * Created by zdsoft on 14-7-4.
 * 用户信息
 */
var path            = require('path');
var pool            = require(path.resolve('./lib/data/pool'));
var logger          = require(path.resolve('./lib/util/logger'));

var userDao = function(){
  console.log('userDao init');
  logger.init(__filename);
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
        return;
      }
      callbackSuccess(rows);
    });

    connection.release();

  });
};


/**
 * 用户登录
 * @param callbackError
 * @param callbackSuccess
 * @param params
 */
userDao.prototype.login = function(callbackError, callbackSuccess, params){
  params = params || {};


  pool.getConnection(function(err, connection){
    var sql = 'SELECT * FROM youyiku.user_info where name=' + connection.escape(params.userName) + ' and password='+ connection.escape(params.password);
    connection.query(sql, function(err, rows, fields){
      if (err){
        callbackError(err, params);
        return;
      };
      if(rows.length == 0){
        callbackError(err, params);
      }else{
        callbackSuccess(rows, params);
      }

    });


    connection.release();
  });




}


module.exports = userDao;