
function booleanExpressionEvaluator(...args) {
  if (typeof args !== 'string') {
    throw new Error(`Expected string, received ${typeof args}`);
  }
  // now we come here this means args is  a string 
  const booleanSymbols = ['&', '|', '^'];
  if (booleanSymbols.some(symbol => !args.includes(symbol))) {
    throw new Error('Must have atleast one of the boolean symbols');
  }
  return Boolean(args);
}

export {
  booleanExpressionEvaluator,
};
