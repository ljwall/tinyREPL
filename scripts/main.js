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
  },
  {
    name: 'codemirror',
    location: '../bower_components/codemirror',
    main: 'lib/codemirror'
  }]
});

define([
    'REPLView',
    'EditorView',
    'Tiny',
    'CodeRouter', 'backbone'],
function (REPLView, EditorView, Tiny, CodeRouter, Backbone) {
  var router = new CodeRouter(),
      tiny = new Tiny(router.editorModel),
      replView = new REPLView({el: '.REPL', tiny: tiny}),
      editorView = new EditorView({
        el: '.editor',
        model: router.editorModel
      });

  Backbone.history.start();
});

