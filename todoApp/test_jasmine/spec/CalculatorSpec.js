describe('Calculator', function () {
  var calculator

  beforeEach(function () {
    calculator = new Calculator()
  })

  afterEach(function () {})

  describe('add', function () {
    it('it should be able to add 2 numbers', function () {
      var result = calculator.add(2, 3)

      expect(result).toEqual(5)
    })

    it('should throw an error if both arguments are not provided', function () {
      expect(function () {
        calculator.add(1)
      }).toThrow()
    })

    it('should be called with the right arguments', function () {
      spyOn(calculator, 'add').and.throwError('someError')

      expect(function () {
        var result = calculator.add(2, 5)
      }).toThrowError('someError')

    })
  })
})
