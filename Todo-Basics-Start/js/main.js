// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules

// Create model Car
var Car = Backbone.Model.extend({})

// Create a car collection
var Cars = Backbone.Collection.extend({
  model: Car
})

// Create a view of a car
var CarView = Backbone.View.extend({
  tagName: 'li',

  render: function () {
    this.$el.html(this.model.get('registrationNumber'))

    return this
  }
})

// Create a view of a car
var CarsView = Backbone.View.extend({
  render: function () {
    // Avoids an error at the end of the loop
    var self = this

    // Use backbones model iterator
    this.model.each(function (car) {
      // Create an instance of a car view
      var carView = new CarView({model: car})
      self.$el.append(carView.render().$el)
    })
  }
})

// Create an instance of car collections
var cars = new Cars()

// * Add models into collection Cars
cars.add(new Car({registrationNumber: 'XLI887',
colour: 'Blue' }))
cars.add(new Car({registrationNumber: 'ZNP123',
colour: 'Blue' }))
cars.add(new Car({registrationNumber: 'XUV456',
colour: 'Gray' }))

// Crate an instance of cars collection view
var carsView = new CarsView({ el: '#cars', model: cars})
carsView.render()
