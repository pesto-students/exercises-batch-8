
function everyNthTest(str, n) {
  return str.split('').reduce((acc, char, index) => {
    if (index % n === 0) {
      return acc + char;
    }
    return acc;
  });
}

export {
  everyNthTest,
};
