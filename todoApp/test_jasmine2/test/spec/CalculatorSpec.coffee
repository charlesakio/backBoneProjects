describe 'Calculator', ->
  calculator = undefined
  beforeEach ->
    calculator = new Calculator
    return
  afterEach ->
  describe 'add', ->
    it 'it should be able to add 2 numbers', ->
      result = calculator.add(2, 3)
      expect(result).toEqual 5
      return
    it 'should throw an error if both arguments are not provided', ->
      expect(->
        calculator.add 1
        return
      ).toThrow()
      return
    it 'should be called with the right arguments', ->
      spyOn(calculator, 'add').and.throwError 'someError'
      expect(->
        result = calculator.add(2, 5)
        return
      ).toThrowError 'someError'
      return
    return
  return
