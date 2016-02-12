/*global require*/
require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    mustache: '../bower_components/mustache.js/mustache'
  }
})

require([
  'backbone',
  'todoItemsView'
], function (Backbone, TodoItemsView) {
  Backbone.history.start()

  var todoItemsView = new TodoItemsView()

})
