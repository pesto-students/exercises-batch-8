const calculatePeriod = (averageAltitude) => {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  const distanceFromCore = earthRadius + averageAltitude;

  return (2 * Math.PI * (distanceFromCore ** 1.5)) / (GM ** 0.5);
};

function orbitalPeriod(spaceObjects) {
  return spaceObjects.map((spaceObject) => {
    return {
      name: spaceObject.name,
      orbitalPeriod: Math.round(calculatePeriod(spaceObject.avgAlt)),
    };
  });
}

export {
  orbitalPeriod,
};
