function getIndexToIns(array, value) {
  const sorted = array.sort();

  // Using binary search algorithm
  let left = 0;
  let right = array.length - 1;
  let mid = Number.parseInt(array.length / 2, 10);
  console.log(mid);
  while (left < right) {
    if (value > mid) {
      left = mid;
    } else {
      right = mid;
    }
    mid = Number.parseInt((left + right) / 2, 10);
    console.log(left, right);
  }
}

export {
  getIndexToIns,
};
