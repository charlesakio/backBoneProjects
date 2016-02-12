/* global define */
define([
  'underscore',
  'backbone'], function (_, Backbone) {
  var TodoItem = Backbone.Model.extend({
    defaults: {
      id: 0,
      completed: false
    },

    urlRoot: 'http://jsonplaceholder.typicode.com/todos',

    validate: function (attrs) {
      if (attrs.title) {
        return 'Title is required'
      }
    },

    toggle: function () {
      this.set('completed', !this.get('completed'))
    }
  })
  // TodoItem

  return TodoItem
})
