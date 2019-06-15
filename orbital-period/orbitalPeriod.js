const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

function getOrbitalPeriod(avgAlt) {
  const radius = avgAlt + earthRadius;
  const orbitalPeriodVal = Math.sqrt((4 * (Math.PI ** 2) * (radius ** 3)) / GM);
  return Math.round(orbitalPeriodVal);
}

function orbitalPeriod(altitudeObjects) {
  const orbitalPeriodObjects = altitudeObjects
    .map(altitudeObject => (
      { name: altitudeObject.name, orbitalPeriod: getOrbitalPeriod(altitudeObject.avgAlt) }));
  return orbitalPeriodObjects;
}

export {
  orbitalPeriod,
};
