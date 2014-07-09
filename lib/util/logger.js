/**
 * Created by zdsoft on 14-7-9.
 */
var log4js = require('log4js'), path = require('path');

var logger = (function(){

  var logger;

  /**
   * 初始化
   * @param level 日志等级 ['TRACE','DEBUG','INFO','WARN','ERROR','FATAL']
   * @param categoryName 模块名称
   * @private
   */
  var _init = function(level, categoryName){
    var date = new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
    var logFileName = year + '-' + month + '-' + day + '';

    if (typeof categoryName == 'undefined'){
      categoryName = '[default]';
    }

//    log4js.loadAppender('console');
//    log4js.addAppender(log4js.appenders.console());

    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.file(path.resolve('./logs/' + logFileName + '.log')), categoryName);
    logger = log4js.getLogger(categoryName);


    if (typeof level == 'undefined'){
      logger.setLevel('ERROR');
    } else {
      logger.setLevel(level);
    }
  };

  var _error = function(info){
    logger.error(info);
  };

  var _fatal = function(info){
    logger.fatal(info);
  };

  var _warn = function(info){
    logger.warn(info);
  };

  var _info = function(info){
    logger.info(info);
  };

  var _debug = function(info){
    logger.debug(info);
  };

  var _trace = function(info){
    logger.trace(info);
  };



  return {
    init: function(params){
      var level, categoryName;

      if (typeof params == 'object'){

        var params = params || {};

        if (typeof params.level != 'undefined'){

          level = params.level;
        }
        if (typeof params.categoryName != 'undefined'){

          categoryName = params.categoryName;
        }

      } else if (typeof params == 'string') {

        categoryName = '[' + params + ']';
      };

      _init(level, categoryName);
    },
    error:function(info){
      _error(info);
    },
    fatal: function(info){
      _fatal(info);
    },
    warn: function(info){
      _warn(info);
    },
    info: function(info){
      _info(info);
    },
    debug: function(info){
      _debug(info);
    },
    trace: function(info){
      _trace(info);
    }

  }
}());


module.exports = logger;


