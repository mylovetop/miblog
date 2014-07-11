/**
 * Created by zdsoft on 14-7-11.
 */


/**
 * 重写url
 * @param url  访问路径
 * @param type 0 默认，1 html， 2 php, 3 jsp
 */
var rewriteUrl = function(url, type){

  var retVal;

  var arr = ['', '.html', '.php', '.jsp'];

  var getUrl = function(type){
    return url  + type;
  };

  switch (type){
    case 0:
      retVal = getUrl(arr[0]);
      break;
    case 1:
      retVal = getUrl(arr[1]);
      break;
    case 2:
      retVal = getUrl(arr[2]);
      break;
    default:
      retVal = getUrl(arr[0]);
  };

  return retVal;

};


module.exports = rewriteUrl;