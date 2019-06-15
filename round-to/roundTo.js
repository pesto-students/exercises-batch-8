function roundTo(num, precision) {
  function up(number, upprecision) {
    const rounder = 10 ** upprecision;
    return Math.ceil(number * rounder) / rounder;
  }
  function down(number, downprecision) {
    const rounder = 10 ** downprecision;
    return Math.floor(number * rounder) / rounder;
  }
  if ((num * (10 ** (precision + 1))) % 10 > 4.5) {
    return up(num, precision);
  }
  return down(num, precision);
}

export {
  roundTo,
};
