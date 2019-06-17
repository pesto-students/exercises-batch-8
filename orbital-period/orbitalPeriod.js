const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

function orbitalPeriod(satallites) {
  const satallitesWithOrbitalPeriod = satallites.map(satallite => ({
    name: satallite.name,
    orbitalPeriod:
      Math.round(2 * Math.PI * Math.sqrt(((satallite.avgAlt + earthRadius) ** 3) / GM)),
  }));
  return satallitesWithOrbitalPeriod;
}

export {
  orbitalPeriod,
};
