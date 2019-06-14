const GM = 398600.4418;
const earthRadius = 6367.4447;

function getOrbitalPeriod(orbitSize) {
  return Math.round(
    2 * Math.PI * Math.sqrt((orbitSize ** 3) / GM),
  );
}

function orbitalPeriod(satellitesDetails) {
  return satellitesDetails.map((satellite) => {
    const sizeOfOrbit = satellite.avgAlt + earthRadius;

    return {
      name: satellite.name,
      orbitalPeriod: getOrbitalPeriod(sizeOfOrbit),
    };
  });
}

export {
  orbitalPeriod,
};
