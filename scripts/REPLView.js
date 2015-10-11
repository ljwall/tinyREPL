define(['jquery', 'backbone', 'tinyService', 'jqueryconsole'], function ($, Backbone, tinyService) {
  return Backbone.View.extend({
    el: 'div.REPL',
    initialize: function () {
      var repl = $(this.el).console({
          promptLabel: 'tiny> ',
          commandValidate:function(line){
            if (line == "") return false;
            else return true;
          },
          commandHandle:function(line, report){
            tinyService.evalOne(line)
            .tap(function (result) {
              report([{
                msg: result,
                className: 'jquery-console-message-value'
              }]);
            })
            //.then(function () {
            //  repl.report('Wombles', 'jquery-console-message-value');
            //})
            .catch(function (err) {
              report([{
                msg: err.message,
                className:"jquery-console-message-type"
              }]);
            });
          },
          autofocus:true,
          animateScroll:true,
          promptHistory:true
      });
    }
  });
});
