define(['jquery', 'backbone'], function ($, Backbone) {
  return Backbone.View.extend({
    initialize: function (options) {
      if (!(options.router instanceof Backbone.Router))
        throw new Error('router not defined');
      if (!options.urlparam)
        throw new Error('urlparam not defined');
      this.router = options.router;
      this.urlparam = options.urlparam;
      options.router.on('route', this.render, this);
      this.render();
    },
    render: function () {
      if (this.router[this.urlparam]) {
        this.$el.attr('href', this.router[this.urlparam]);
        this.$el.removeAttr('disabled');
      } else {
        this.$el.attr('disabled', 'disabled');
        this.$el.removeAttr('href');
      }
    }
  });
});
