function objectAssign(dest, ...sources) {
  if (sources.length === 0) {
    return dest;
  }

  for (const source of sources) {
    if (typeof source === 'object' && source !== null) {
      for (const key of Object.keys(source)) {
        // eslint-disable-next-line no-param-reassign
        dest[key] = source[key];
      }
    }
  }
  return dest;
}

export {
  objectAssign,
};
