/**
 * Created by zdsoft on 14-7-15.
 */

require.config({
  baseUrl: 'js/lib',
  paths:{
    app:'../app',
    jquery: 'jquery-2.1.1.min'
  },
  shim: {
    'bootstrap' :{
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  waitSeconds: 15
});

require(['jquery'], function ($) {
  //Do setup work here


});