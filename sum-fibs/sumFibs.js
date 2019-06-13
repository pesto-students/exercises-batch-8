function sumFibs(...args) {
  const fibSeriesLimit = args[0];
  // Calculating fibonacci value of a number
  function fibonacci(aNumber) {
    if (aNumber === 0) {
      throw new Error('Fibonacci starts from number 1');
    } else if (aNumber === 1) {
      return 1;
    } else if (aNumber === 2) {
      return 1;
    } else {
      return fibonacci(aNumber - 1) + fibonacci(aNumber - 2);
    }
  }

  const fibOddNumSeries = [];
  // Calculating the odd numbers whose fibonacci value is less than a given number
  for (let i = 1; fibonacci(i) <= fibSeriesLimit; i++) {
    if (fibonacci(i) % 2 === 1) {
      fibOddNumSeries.push(fibonacci(i));
    }
  }

  // Returning the sum of the calculated odd fibonacci values
  return fibOddNumSeries.reduce((a, b) => a + b, 0);
}

export {
  sumFibs,
};
