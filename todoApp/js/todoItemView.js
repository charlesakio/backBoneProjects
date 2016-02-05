var TodoItemView = Backbone.View.extend({
  initialize: function(options) {
    debug(options)
  },
  render: function () {
    this.$el.html(this.model.get('description'))

    return this
  }
})
