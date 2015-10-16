define(['backbone', 'jquery'], function (Backbone, $) {
  var FillDownView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      resetSize();
      $(window).resize(resetSize);

      function resetSize () {
        var height = $(window).height()-self.$el.offset().top-100;
        height = (height < 200 ? 200 : height);
        self.$el.height(height);
      }
    }
  });

  FillDownView.extend = function (child) {
    var NewView = Backbone.View.extend.apply(this, arguments);
    NewView.prototype.initialize = function () {
      FillDownView.prototype.initialize.apply(this, arguments);
      if (typeof child.initialize === 'function') {
        child.initialize.apply(this, arguments);
      }
    };
    return NewView;
  };
  return FillDownView;
});
