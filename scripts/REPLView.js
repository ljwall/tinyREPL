define(['FillDownView', 'Tiny', 'jqueryconsole'], function (FillDownView, Tiny) {
  return FillDownView.extend({
    initialize: function (options) {
      options = options || {};
      var tinyService = options.tiny || new Tiny();
      var repl = this.$el.console({
        promptLabel: 'tiny> ',
        commandValidate:function(line){
          if (line == '') return false;
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
          .catch(function (err) {
            report([{
              msg: err.message,
              className:'jquery-console-message-error'
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
