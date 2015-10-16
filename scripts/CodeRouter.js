define(['backbone', 'sampleData', 'underscore', 'CodeModel'], function (Backbone, sampleData, _, CodeModel) {
  return Backbone.Router.extend({
    routes: {
      'q/:index': 'item',
      '*any': 'defaultroute'
    },
    initialize: function (options) {
      _.bindAll(this, 'item', 'defaultroute', 'updateSampleData');
      this.editorModel = new CodeModel();
      this.editorModel.on('change', this.updateSampleData);
    },
    item: function (index) {
      index = parseInt(index);
      if (!(_.isFinite(index)) || index < 0 || index >= sampleData.length) {
        index = 0;
      }
      this.selectedIndex = index;
      this.editorModel.set('code', sampleData.at(index).get('code'));

      this.title = sampleData.at(index).get('name');
      if (index > 0) {
        this.prev = '#q/' + (index - 1);
      } else {
        this.prev = undefined;
      }
      if (index < sampleData.length-1) {
        this.next = '#q/' + (index + 1);
      } else {
        this.next = undefined;
      }
    },
    defaultroute: function () {
      this.item(0);
    },
    updateSampleData: function () {
      sampleData.at(this.selectedIndex).set({code: this.editorModel.get('code')})
    }
  });
});
