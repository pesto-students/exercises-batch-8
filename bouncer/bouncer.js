
function bouncer(...args) {
  const anArray = args[0];
  const truthyValues = anArray.filter(element => element);
  return truthyValues;
}

export {
  bouncer,
};
