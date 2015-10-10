requirejs.config({
  baseUrl: 'scripts',
  paths: {
    text: '../bower_components/text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
    bluebird: '../bower_components/bluebird/js/browser/bluebird',
    jqueryconsole: '../bower_components/jquery-console/jquery.console'
  },
  shim: {
    'localstorage': ['backbone'],
    'jqueryconsole': ['jquery'],
  },
  packages: [{
    name: 'tinyJSScheme',
    location: '../bower_components/tinyJSScheme',
    main: 'index'
  }]
});

define(['REPLView'], function (REPLView) {
  var replView = new REPLView();
});

