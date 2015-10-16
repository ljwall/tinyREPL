define(['view/FillDownView', 'jquery', 'codemirror', 'codemirror/mode/scheme/scheme'],
function (FillDownView, $, CodeMirror) {
  return FillDownView.extend({
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
      if (this.model.get('code') !== this.editor.doc.getValue()) {
        this.editor.doc.setValue(this.model.get('code'));
      }
    }
  });
});
