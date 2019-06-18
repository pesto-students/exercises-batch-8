
function factorial(arg) {
  if (!factorial.memo) {
    factorial.memo = {
      0: 1,
      1: 1,
    };
  }

  if (!factorial.memo[arg]) {
    factorial.memo[arg] = arg * factorial(arg - 1);
  }

  return factorial.memo[arg];
}

export {
  factorial,
};
