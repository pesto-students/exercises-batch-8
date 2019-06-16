
const roundPrototype = {
  up: (number, decimals) => Math.ceil(number * (10 ** decimals)) / (10 ** decimals),
  down: (number, decimals) => Math.floor(number * (10 ** decimals)) / (10 ** decimals),
};


function roundTo(number, decimals) {
  return Math.round(number * (10 ** decimals)) / (10 ** decimals);
}


Object.setPrototypeOf(roundTo, roundPrototype);
// roundTo.prototype = roundPrototype;
export {
  roundTo,
};
