
function bouncer(values) {
  const truthyValuesArray = values.filter((value) => {
    if (value) {
      return true;
    }
    return false;
  });

  return truthyValuesArray;
}

export {
  bouncer,
};
