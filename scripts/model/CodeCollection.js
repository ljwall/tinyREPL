define(['model/CodeModel', 'backbone'], function (CodeModel, Backbone) {
  return Backbone.Collection.extend({
    model: CodeModel
  });
});
