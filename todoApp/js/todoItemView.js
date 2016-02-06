var TodoItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function (options) {
    debug(options)

    this.model.on('change', this.render, this)
  },

  events: {
    'click #toggle': 'onClickToggle'
  },

  onClickToggle: function () {
    this.model.toggle()
    console.log(this.model.toJSON())
  },

  toggle: function () {
    this.set('isCompleted', !this.get('isCompleted'))
  },

  render: function () {
    this.$el.toggleClass('completed', this.model.get('isCompleted'))

    var checked = this.model.get('isCompleted') ? 'checked' : ''
    this.$el.html("<input id='toggle' type='checkbox'" + checked + "></input>" + this.model.escape('description'))
    return this
  }
})
