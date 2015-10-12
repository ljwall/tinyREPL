define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      code: ';; This is an editor...\n\n(define foo 42)\n\n'
    }
  });
});
