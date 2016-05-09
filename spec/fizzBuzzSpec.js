describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('Prints out \'Fizz\' if a multiple of 3', function() {
    expect(fizzBuzz.calc(3)).toEqual('Fizz');
  });

  it('Prints out \'Buzz\' if a multiple of 5', function() {
    expect(fizzBuzz.calc(5)).toEqual('Buzz');
  });

});
