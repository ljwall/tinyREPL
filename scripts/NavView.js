define(['backbone', 'text!nav.html', 'underscore'], function (Backbone, navtemplate, _) {
  return Backbone.View.extend({
    template: _.template(navtemplate),
    initialize: function (options) {
      if (!(options.router instanceof Backbone.Router))
        throw new Error('router not defined');
      this.router = options.router;
      this.router.on('route', this.render, this);
      this.render();
    },

    render: function () {
      this.$el.html(this.template({
        prev: this.router.prev,
        next: this.router.next,
        title: this.router.title
      }));
      return this;
    }
  });
});
