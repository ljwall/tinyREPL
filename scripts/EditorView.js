define(['backbone', 'jquery', 'codemirror', 'codemirror/mode/scheme/scheme'],
function (Backbone, $, CodeMirror) {
  return Backbone.View.extend({
    initialize: function () {
      _.bindAll(this, 'edited', 'render');
      this.editor = CodeMirror(this.el, {
        lineNumbers: true,
        mode: 'scheme',
        theme: 'solarized'
      });
      this.render();
      this.editor.on('changes', this.edited);
      this.model.on('change', this.render)
    },
    edited: function (editor) {
      this.model.set({code: editor.doc.getValue()});
    },
    render: function () {
      this.editor.doc.setValue(this.model.get('code'));
    }
  });
});
