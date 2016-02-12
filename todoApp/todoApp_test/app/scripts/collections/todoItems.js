/* global define */
define(['backbone', 'todoItem'], function (Backbone, TodoItem) {
  var TodoItems = Backbone.Collection.extend({
    model: TodoItem,

    url: 'http://jsonplaceholder.typicode.com/todos'
  })

  return TodoItems
})
