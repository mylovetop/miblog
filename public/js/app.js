/**
 * Created by zdsoft on 14-7-15.
 */
requirejs.config({
  baseUrl: 'js/lib',
  path:{
    app:'../app',
    jquery: 'jquery-2.1.1.min',
    bootstrap: 'bootstrap'
  }
});
alert("requires 加载");
requirejs(['jquery', 'bootstrap'], function($, bootstrap){

});