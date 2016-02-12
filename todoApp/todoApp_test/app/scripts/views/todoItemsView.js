/* global define */
define(['backbone', 'app/scripts/todoItem', 'app/scripts/todoItemView'], function (Backbone, TodoItem, TodoItemView) {
  var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',

    id: 'todoItems',

    initialize: function (options) {
      if (!(options && options.model)) {
        throw new Error('model is not specified')
      }

      this.model.on('add', this.onAddTodoItem, this)
      this.model.on('remove', this.onRemoveTodoItem, this)
    },

    onRemoveTodoItem: function (todoItem) {
      this.$('li#' + todoItem.id).remove()
    },

    onAddTodoItem: function (todoItem) {
      var view = new TodoItemView({ model: todoItem })
      this.$el.append(view.render().$el)
    },

    events: {
      'click #add': 'onClickAdd',
      'keypress #newTodoItem': 'onKeyPress'
    },

    onClickAdd: function () {
      var $textBox = this.$('#newTodoItem')

      // Add new item if text box is not empty
      if ($textBox.val()) {
        var todoItem = new TodoItem({ title: $textBox.val() })
        // Adds the todoItem instance and save it to the server.
        this.model.create(todoItem)

        // Clear textbox after entering new description
        $textBox.val('')
      }
    },

    onKeyPress: function (e) {
      if (e.keyCode === 13) {
        this.onClickAdd()
      }
    },

    render: function () {
      var self = this

      this.$el.append("<input type='text' id='newTodoItem' autofocus></input>")
      this.$el.append("<button id='add'>Add</button>")

      this.model.each(function (todoItem) {
        var view = new TodoItemView({ model: todoItem })
        self.$el.append(view.render().$el)
      })

      return this
    }
  })

  return TodoItemsView
})
