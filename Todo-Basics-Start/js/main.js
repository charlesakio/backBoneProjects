// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules
var Vehicle = Backbone.Model.extend({
  defaults: {
    registrationNumber: 22
  },

  url: 'api/vehicles',

  start: function () {
    console.log('Vehicle started..Vroooom!!!')
  },
})

var vehicle = new Vehicle()
vehicle.start()

var Car = Vehicle.extend({
  start: function () {
    console.log('Car with registration number ' +
      this.get('registrationNumber') + ' started')
  },

  validate: function (attrs) {
    if (!attrs.registrationNumber) {
      return 'Registration number is required'
    }
  }

})

var car = new Car()
car.set({
  registrationNumber: 'XL1887',
  color: 'Blue'
})
car.start()

// Remove registrationNumber
car.unset('registrationNumber')
car.isValid()
