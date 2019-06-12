function applyOperator(operator, ...nums) {
  if (operator) {
    if (nums.length === 0) return 0;
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        return nums.reduce((res, num) => res + num, 0);
      case '-':
        return nums.reduce((res, num) => res - num, 0);
      case '*':
        return nums.reduce((res, num) => res * num, 1);
      case '/':
        return Number(nums.slice(1).reduce((res, num) => res / num, nums[0]).toFixed(4));
      case '%':
        return nums.slice(1).reduce((res, num) => res % num, nums[0]);
    }
  }
  throw new Error('Unexpected Operator');
}

export {
  applyOperator,
};
