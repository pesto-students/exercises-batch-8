
function sumAll([num1, num2]) {
  const biggerNumber = num1 > num2 ? num1 : num2;
  const smallerNumber = num1 < num2 ? num1 : num2;
  let sum = 0;
  for (let i = smallerNumber; i <= biggerNumber; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
