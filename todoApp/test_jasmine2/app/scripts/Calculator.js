var Calculator = function () {
  var add = function (a, b) {
    if (!a || !b) {
      throw new Error('The add method expects two arguments, please provide some :)')
    }
    return a + b
  }

  return {
    add: add
  }
}
