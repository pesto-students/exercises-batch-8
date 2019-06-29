const retainTruthy = value => !value === false;

function bouncer(values) {
  const truthyValues = values.filter(retainTruthy);
  return truthyValues;
}

export { bouncer };
