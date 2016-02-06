var TodoItemsView = Backbone.View.extend({
  tagName: "ul",

  id: "todoItems",

  initialize: function(options){
    debug(options)

    this.model.on("add", this.onAddTodoItem, this);
  },

  onAddTodoItem: function(todoItem){
    var view = new TodoItemView({ model: todoItem });
      this.$el.append(view.render().$el);
  },

  events: {
    'click #add': "onClickAdd",
    'keypress #newTodoItem': "onKeyPress"
  },

  onClickAdd: function(){
    var $textBox = this.$("#newTodoItem");

    //Add new item if text box is not empty
    if($textBox.val()){
    var todoItem = new TodoItem({ description: $textBox.val()})
    this.model.add(todoItem)
    //Clear textbox after entering new description
    this.$("#newTodoItem").val("");
    }
  },


  onKeyPress: function(e) {
    if (isEnter(e)){
      this.onClickAdd();
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
});

//Event function
function isEnter(e){
  return e.keyCode == 13
}
