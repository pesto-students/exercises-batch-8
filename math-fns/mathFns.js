// Placeholder for the mathFns export required by the test file
function mathFns(...args) {
  return args;
}

// Method-1 Wrapping the standard library
function sqrt(...args) {
  const aNumber = args[0];
  return Math.sqrt(aNumber);
}

function power(...args) {
  const aNumber = args[0];
  const exponent = args[1];
  return aNumber ** exponent;
}


function round(...args) {
  const aNumber = args[0];
  return Math.round(aNumber);
}

// TODO Method-2

export {
  mathFns,
  sqrt,
  power,
  round,
};
