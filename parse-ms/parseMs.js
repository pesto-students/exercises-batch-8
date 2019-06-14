
function parseMs(ms) {
  if (ms > 0) {
    const milliseconds = ms;
    return {
      days: Math.floor(milliseconds / (24 * 60 * 60 * 1000)),
      hours: Math.floor(milliseconds / (60 * 60 * 1000)) % 24,
      minutes: Math.floor(milliseconds / (60 * 1000)) % 60,
      seconds: Math.floor(milliseconds / 1000) % 60,
      milliseconds: milliseconds % 1000,
    };
  }
  const milliseconds = 0 - ms;
  return {
    days: -Math.floor(milliseconds / (24 * 60 * 60 * 1000)),
    hours: -(Math.floor(milliseconds / (60 * 60 * 1000)) % 24),
    minutes: -(Math.floor(milliseconds / (60 * 1000)) % 60),
    seconds: -(Math.floor(milliseconds / 1000) % 60),
    milliseconds: -(milliseconds % 1000),
  };
}

export {
  parseMs,
};
