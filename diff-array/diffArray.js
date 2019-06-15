
function diffArray(arrA, arrB) {
  const uniqueInA = arrA.filter(el => !arrB.includes(el));
  const uniqueInB = arrB.filter(el => !arrA.includes(el));
  return uniqueInA.concat(uniqueInB);
}

export {
  diffArray,
};
