/**
 * Approach used and required in test cases is as below:
 * take mid num, right most element, and left most element
 * now if there sum is equal to given sum then return
 * Otherwise bring right most and left most closer according to sum
 */

const threeSum = (nums, sum) => {
  if (!Array.isArray(nums)) {
    throw new Error(`Expected: 'nums' should be an Array. Actual: 'nums' is '${typeof nums}'.`);
  }
  if (nums.length < 3) {
    throw new Error(`Expected: 'nums' should have three elements. Actual: 'nums' have ${nums.length} elements.`);
  }

  if (typeof sum !== 'number') {
    throw new Error(`Expected: 'sum' should be a number. Actual: 'sum' is '${typeof sum}'.`);
  }

  const sortedNums = nums.sort((a, b) => a - b);
  let midIndex = Number.parseInt(sortedNums.length / 2, 10);

  while (midIndex < sortedNums.length) {
    const target = sortedNums[midIndex] * -1 + sum;
    let rightIndex = sortedNums.length - 1;
    let leftIndex = 0;
    while (rightIndex > midIndex && leftIndex < midIndex) {
      if (sortedNums[rightIndex] + sortedNums[leftIndex] < target) {
        if (leftIndex < midIndex) {
          leftIndex += 1;
        }
      } else if (sortedNums[rightIndex] + sortedNums[leftIndex] > target) {
        if (rightIndex > midIndex) {
          rightIndex -= 1;
        }
      } else {
        const result = [sortedNums[leftIndex], sortedNums[midIndex], sortedNums[rightIndex]];
        if (result[0] < 0) {
          return result.reverse();
        }
        return result;
      }
    }
    midIndex += 1;
  }
  return null;
};

export { threeSum };
