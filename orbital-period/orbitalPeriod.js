const GM = 398600.4418; 
const earthRadius = 6367.4447;

function orbitalPeriod(satellites) {
  return satellites.map(satellite => ({
    name: satellite.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(((satellite.avgAlt + earthRadius) ** 3) / GM),
    ),
  }));

export { orbitalPeriod };
