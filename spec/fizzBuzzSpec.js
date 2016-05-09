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

  it('Prints out \'FizzBuzz\' if a multiple of 3 and 5', function() {
    expect(fizzBuzz.calc(15)).toEqual('FizzBuzz');
  });

  it('Prints out number if not a multiple of 3 or 5', function() {
    expect(fizzBuzz.calc(2)).toEqual(2);
  });

});
