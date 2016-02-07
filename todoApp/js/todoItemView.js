/* global TodoItemView, Backbone, debug */
/* eslint-disable no-unused-vars */
var TodoItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function (options) {
    debug(options)

    this.model.on('change', this.render, this)
  },

  events: {
    'click #toggle': 'onClickToggle',
    'click #delete': 'onClickDelete'
  },

  onClickToggle: function () {
    this.model.toggle()
    this.model.save()
    console.log(this.model.toJSON())
  },

  onClickDelete: function () {
    this.model.destroy()
  },

  render: function () {
    this.$el.attr('id', this.model.id)

    this.$el.toggleClass('completed', this.model.get('completed'))

    var template = $('#todoItemTemplate').html()
    console.log(this.model.toJSON())
    var html = Mustache.render(template, this.model.toJSON())
    this.$el.html(html)

    return this


  }
})

/* eslint-disable no-unused-vars */
