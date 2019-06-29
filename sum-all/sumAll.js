/* eslint-disable no-plusplus */

function sumAll(numbers) {
  const minimumNumber = Math.min(numbers[0], numbers[1]);
  const maximumNumber = Math.max(numbers[0], numbers[1]);
  let total = 0;
  for (let i = minimumNumber; i <= maximumNumber; i++) {
    total += i;
  }

  return total;
}
export {
  sumAll,
};
