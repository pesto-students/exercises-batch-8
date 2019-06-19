
function arrayCubeRootToJson(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('Only numerical arrays are accepted as input');
  }
  const invalidInputsLength = nums.filter(num => typeof num !== 'number').length;
  console.log(invalidInputsLength);
  if (!nums.every(Number)) {
    throw new Error('Non numerical values are present in array. Only numerical values are accepted');
  }
  return nums.reduce((acc, num) => {
    acc[num] = Math.cbrt(num);
    return acc;
  }, {});
}

export {
  arrayCubeRootToJson,
};
