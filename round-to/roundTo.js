
function roundTo(number, precision, fn = 'round') {
  const isNegative = number < 0;
  const numberToRound = Math.abs(number);

  let func = Math.round;
  if (fn === 'ceil') {
    func = !isNegative ? Math.ceil : Math.floor;
  } else if (fn === 'floor') {
    func = !isNegative ? Math.floor : Math.ceil;
  }

  // Equivalent to multiply by (10 ** precision) and rounding
  const timesPair = `${numberToRound}e`.split('e');
  const numberTimesPrecision = func(`${timesPair[0]}e${+timesPair[1] + precision}`);

  // Equivalent to dividing by (10 ** precision)
  const divisionPair = `${numberTimesPrecision}e`.split('e');
  const numberByPrecision = +`${divisionPair[0]}e${+divisionPair[1] - precision}`;

  if (isNegative) {
    return -numberByPrecision;
  }
  return numberByPrecision;
}

roundTo.up = (number, precision) => roundTo(number, precision, 'ceil');

roundTo.down = (number, precision) => roundTo(number, precision, 'floor');


export {
  roundTo,
};
