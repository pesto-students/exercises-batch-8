
function orbital(avgAlt) {
  const twoPi = Math.PI * 2;
  const earthRadius = 6367.4447;
  const GM = 398600.4418;
  const value1 = (avgAlt + earthRadius) ** 3;
  const value2 = Math.sqrt(value1 / GM);
  return Math.round(twoPi * value2, 10);
}


function orbitalPeriod(array) {
  return array.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: orbital(avgAlt),
  }));
}

export {
  orbitalPeriod,
};
