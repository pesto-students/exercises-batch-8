const orbitalPeriodEquationFromEarth = (altitudeInKms) => {
  const GM = 398600.4418; // in km3s-2
  const { PI } = Math;
  const earthRadius = 6367.4447; // in km
  const effectiveRadius = altitudeInKms + earthRadius; // in km
  const orbitalPeriodInSecs = Math.sqrt((4 * (PI ** 2) * (effectiveRadius ** 3)) / GM);
  return Math.round(orbitalPeriodInSecs);
};

function orbitalPeriod(satellites) {
  const orbitalPeriodsOfSatellites = satellites.map((satellite) => {
    const { name, avgAlt } = satellite;
    return {
      name,
      orbitalPeriod: orbitalPeriodEquationFromEarth(avgAlt),
    };
  });
  return orbitalPeriodsOfSatellites;
}

export {
  orbitalPeriod,
};
