const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

function square(value) {
  return value ** 2;
}

function cube(value) {
  return value ** 3;
}

function toOrbitalPeriod(avgAlt) {
  const radius = avgAlt + earthRadius;
  const value = Math.sqrt((4 * square(Math.PI) * cube(radius)) / GM);
  return Math.round(value);
}

function orbitalPeriod(objects) {
  return objects.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: toOrbitalPeriod(avgAlt),
  }));
}

export {
  orbitalPeriod,
};
