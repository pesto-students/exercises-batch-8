
function orbitalPeriod(altitudeDataList) {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km

  const orbitalPeriodsList = altitudeDataList.map((altData) => {
    const height = earthRadius + altData.avgAlt;
    const period = 2 * Math.PI * Math.sqrt(((height ** 3) / GM));

    return {
      name: altData.name,
      orbitalPeriod: Math.round(period),
    };
  });

  return orbitalPeriodsList;
}

export {
  orbitalPeriod,
};
