define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'default',
      code: ';; This is an editor...\n\n(define foo 42)\n\n'
    }
  });
});
