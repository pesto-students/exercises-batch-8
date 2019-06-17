
function placeInMiddle(numbers, replacer) {
  const firstHalf = numbers.slice(0, numbers.length / 2);
  const secondHalf = numbers.slice(numbers.length / 2, numbers.length);

  return [...firstHalf, ...replacer, ...secondHalf];
}

export {
  placeInMiddle,
};
