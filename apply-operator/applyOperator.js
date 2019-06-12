
function applyOperator(operator, ...args) {
  let x;
  if (operator === '-') x = -args[0];
  else [x] = args;

  if (!operator) { throw Error('No Values'); }
  if (args.length === 0) return 0;
  for (let i = 1; i < args.length; i += 1) {
    if (operator === '+') x += args[i];
    else if (operator === '-') x -= args[i];
    else if (operator === '*') x *= args[i];
    else if (operator === '/') x /= args[i];
    else if (operator === '%') x %= args[i];
  }
  if (operator === '/') x = Number(x.toFixed(4));
  return x;
}
export {
  applyOperator,
};
