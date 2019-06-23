
function allOfConditions(...fns) {
  return (params) => {
    for (const fn of fns) {
      const isFunctionValid = fn(params);
      if (!isFunctionValid) {
        break;
      }
    }
  };
}

export {
  allOfConditions,
};
