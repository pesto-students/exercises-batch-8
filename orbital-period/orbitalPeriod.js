
const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

function orbitalPeriod(satellites) {
  return satellites.map(satellite => ({
    name: satellite.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(((satellite.avgAlt + earthRadius) ** 3) / GM),
    ),
  }));
}

export {
  orbitalPeriod,
};
