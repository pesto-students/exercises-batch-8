
function doubleOddNumbers(arr) {
  return arr.reduce((result, num) => {
    if (num % 2 === 1) {
      return [...result, num * 2];
    }
    return result;
  }, []);
}

export {
  doubleOddNumbers,
};
