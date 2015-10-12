define(['backbone'], function (Backbone) {
  var CodeModel = Backbone.Model.extend({
    defaults: {
      code: ';; This is an editor...\n\n(define foo 42)\n\n'
    }
  });

  return new CodeModel();
});
