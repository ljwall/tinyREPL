define(['jquery', 'backbone', 'tinyJSScheme', 'jqueryconsole'], function ($, Backbone, tiny) {
  return Backbone.View.extend({
    el: 'div.REPL',
    initialize: function () {
      $(this.el).console({
          promptLabel: 'tiny> ',
          commandValidate:function(line){
            if (line == "") return false;
            else return true;
          },
          commandHandle:function(line, report){
            tiny.parseScheme.one(line)
            .then(function (res) {
              return res.matched[0];
            })
            .then(function (expr) {
              return expr.eval(tiny.schemeEnv);
            })
            .call('toString')
            .tap(function (result) {
              report([{
                msg: result,
                className: 'jquery-console-message-value'
              }]);
            })
            .catch(tiny.scheme.SchemeError, function (err) {
              report( [{msg: 'Error: ' + err.toString(),
                       className:"jquery-console-message-type"}]);
            })
            .catch(tiny.parseScheme.ParseError, function (err) {
              report( [{msg: 'Parser error. Expecting:\n' + err.expecting,
                       className:"jquery-console-message-type"}]);
            })
            .catch(function (err) {
              report([{
                msg: 'Error: ' + err.message,
                className:"jquery-console-message-type"
              }]);
            })

          },
          autofocus:true,
          animateScroll:true,
          promptHistory:true
      });
    }
  });
});
