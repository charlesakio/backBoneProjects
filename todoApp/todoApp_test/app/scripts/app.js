/* global define */
define([
  'underscore',
  'backbone',
  'models/TodoItem',
  'views/TodoItemView'], function (_, Backbone, TodoItem, TodoItemView) {
  var initialize = function () {}

  var todoItem = new TodoItem({title: 'test'})
  var todoItemView = new TodoItemView({el: '#container', model: todoItem})
  todoItemView.render()

  return {
    initialize: initialize
  }

})

// define
