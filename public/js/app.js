/**
 * Created by zdsoft on 14-7-15.
 */
requirejs.config({
  baseUrl: 'js/lib',
  paths:{
    app:'../app',
    jquery: 'jquery-2.1.1.min',
    bootstrap: 'bootstrap'
  }
});

requirejs(['jquery', 'bootstrap'], function($, bootstrap){
  alert("requires 加载");
});