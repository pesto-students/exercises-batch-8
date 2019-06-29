
function bouncer(array) {
  const filtered = [];

  for (const element of array) {
    if (element) {
      filtered.push(element);
    }
  }

  return filtered;
}

export {
  bouncer,
};
